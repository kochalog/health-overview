const MAX_BODY_BYTES = 25 * 1024 * 1024;

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
  const canonicalPayload = canonicalJson(payload);
  const receivedAt = new Date().toISOString();

  const result = await env.DB.prepare(
    `INSERT OR IGNORE INTO exports
      (export_hash, device_id, exported_at, received_at, payload_json)
     VALUES (?, ?, ?, ?, ?)`
  )
    .bind(exportHash, deviceId, exportedAt, receivedAt, canonicalPayload)
    .run();

  const created = (result.meta?.changes || 0) > 0;
  return jsonResponse(created ? 201 : 200, { id: exportHash, created });
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
