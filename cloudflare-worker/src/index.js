const MAX_BODY_BYTES = 25 * 1024 * 1024;
const MAX_D1_VALUE_BYTES = 1_900_000;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "GET" && url.pathname === "/health") {
      return jsonResponse(200, { status: "ok" });
    }

    if (request.method === "GET" && url.pathname === "/ready") {
      return ready(env);
    }

    if (request.method === "POST" && url.pathname === "/v1/health-exports") {
      return receiveExport(request, env);
    }

    return jsonResponse(404, { error: "not_found" });
  },
};

async function ready(env) {
  try {
    await env.DB.prepare("SELECT 1").first();
    return jsonResponse(200, { status: "ready" });
  } catch {
    return jsonResponse(503, { status: "not_ready" });
  }
}

async function receiveExport(request, env) {
  if (!isAuthorized(request, env)) {
    return jsonResponse(401, { error: "unauthorized" });
  }

  const contentLength = Number(request.headers.get("content-length") || "0");
  if (contentLength > MAX_BODY_BYTES) {
    return jsonResponse(413, { error: "invalid_body_size" });
  }

  let payload;
  try {
    const body = await request.text();
    if (!body || new TextEncoder().encode(body).byteLength > MAX_BODY_BYTES) {
      return jsonResponse(413, { error: "invalid_body_size" });
    }
    payload = JSON.parse(body);
    validatePayload(payload);
  } catch (error) {
    return jsonResponse(400, {
      error: "invalid_payload",
      message: error instanceof Error ? error.message : "Invalid payload.",
    });
  }

  const deviceId = payload.deviceId;
  const exportedAt = payload.export.exportedAt;
  const identityJson = canonicalJson({ deviceId, export: payload.export });
  const exportHash = await sha256Hex(identityJson);
  const receivedAt = new Date().toISOString();
  let storedPayload;
  try {
    storedPayload = await encodePayload(canonicalJson(payload));
  } catch (error) {
    if (error instanceof PayloadTooLargeError) {
      return jsonResponse(413, { error: "payload_too_large", message: error.message });
    }
    return jsonResponse(500, { error: "payload_encoding_failed" });
  }

  let result;
  try {
    result = await env.DB.prepare(
      `INSERT OR IGNORE INTO exports
        (export_hash, device_id, exported_at, received_at, payload_json, payload_encoding, payload_data)
       VALUES (?, ?, ?, ?, ?, ?, ?)`
    )
      .bind(
        exportHash,
        deviceId,
        exportedAt,
        receivedAt,
        storedPayload.payloadJson,
        storedPayload.encoding,
        storedPayload.payloadData,
      )
      .run();
  } catch (error) {
    console.error("D1 insert failed", error);
    return jsonResponse(500, {
      error: "storage_error",
      message: error instanceof Error ? error.message : "Failed to store payload.",
    });
  }

  const created = (result.meta?.changes || 0) > 0;
  return jsonResponse(created ? 201 : 200, { id: exportHash, created });
}

class PayloadTooLargeError extends Error {}

async function encodePayload(canonicalPayload) {
  const jsonBytes = new TextEncoder().encode(canonicalPayload);
  if (jsonBytes.byteLength <= MAX_D1_VALUE_BYTES) {
    return {
      encoding: "json",
      payloadJson: canonicalPayload,
      payloadData: null,
    };
  }

  const compressed = await gzip(canonicalPayload);
  const payloadData = bytesToBase64(compressed);
  const encodedBytes = new TextEncoder().encode(payloadData).byteLength;
  if (encodedBytes > MAX_D1_VALUE_BYTES) {
    throw new PayloadTooLargeError("Payload is too large to store even after compression.");
  }
  return {
    encoding: "gzip+base64",
    payloadJson: "",
    payloadData,
  };
}

async function gzip(content) {
  const stream = new Blob([content]).stream().pipeThrough(new CompressionStream("gzip"));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

function bytesToBase64(bytes) {
  let binary = "";
  const chunkSize = 0x8000;
  for (let index = 0; index < bytes.length; index += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(index, index + chunkSize));
  }
  return btoa(binary);
}

function isAuthorized(request, env) {
  const token = env.HEALTH_RECEIVER_TOKEN || "";
  const supplied = request.headers.get("authorization") || "";
  return token.length > 0 && supplied === `Bearer ${token}`;
}

function validatePayload(payload) {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    throw new Error("Payload must be an object.");
  }
  if (typeof payload.deviceId !== "string" || payload.deviceId.length === 0) {
    throw new Error("deviceId is required.");
  }
  if (!payload.export || typeof payload.export !== "object" || Array.isArray(payload.export)) {
    throw new Error("export is required.");
  }
  if (typeof payload.export.exportedAt !== "string" || payload.export.exportedAt.length === 0) {
    throw new Error("export.exportedAt is required.");
  }
  if (!Array.isArray(payload.export.records)) {
    throw new Error("export.records must be an array.");
  }
}

function canonicalJson(value) {
  return JSON.stringify(sortValue(value));
}

function sortValue(value) {
  if (Array.isArray(value)) {
    return value.map(sortValue);
  }
  if (value && typeof value === "object") {
    return Object.keys(value)
      .sort()
      .reduce((result, key) => {
        result[key] = sortValue(value[key]);
        return result;
      }, {});
  }
  return value;
}

async function sha256Hex(content) {
  const bytes = new TextEncoder().encode(content);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)]
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function jsonResponse(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
  });
}
