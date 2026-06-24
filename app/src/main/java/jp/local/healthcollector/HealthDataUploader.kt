package jp.local.healthcollector

import org.json.JSONObject
import java.net.HttpURLConnection
import java.net.URL
import java.time.Instant

sealed interface UploadResult {
    data object Success : UploadResult
    data class RetryableFailure(val message: String) : UploadResult
    data class PermanentFailure(val message: String) : UploadResult
}

class HealthDataUploader {
    fun upload(export: JSONObject, config: UploadConfig): UploadResult {
        val payload = JSONObject()
            .put("deviceId", config.deviceId)
            .put("sentAt", Instant.now().toString())
            .put("export", export)
            .toString()

        val connection = try {
            (URL(config.endpointUrl).openConnection() as HttpURLConnection).apply {
                requestMethod = "POST"
                connectTimeout = 20_000
                readTimeout = 30_000
                doOutput = true
                setRequestProperty("Authorization", "Bearer ${config.authToken}")
                setRequestProperty("Content-Type", "application/json; charset=utf-8")
                setRequestProperty("Accept", "application/json")
                setRequestProperty("User-Agent", "HealthConnectCollector/0.2")
            }
        } catch (error: Exception) {
            return UploadResult.PermanentFailure(error.localizedMessage ?: "送信先URLを開けませんでした。")
        }

        return try {
            connection.outputStream.use { it.write(payload.toByteArray(Charsets.UTF_8)) }
            when (val status = connection.responseCode) {
                in 200..299 -> UploadResult.Success
                408, 425, 429, in 500..599 -> UploadResult.RetryableFailure(
                    "受信APIがHTTP $status を返しました。${responseMessage(connection)}"
                )
                else -> UploadResult.PermanentFailure(
                    "受信APIがHTTP $status を返しました。${responseMessage(connection)}"
                )
            }
        } catch (error: Exception) {
            UploadResult.RetryableFailure(error.localizedMessage ?: "受信APIへ接続できませんでした。")
        } finally {
            connection.disconnect()
        }
    }

    private fun responseMessage(connection: HttpURLConnection): String {
        val stream = connection.errorStream ?: try {
            connection.inputStream
        } catch (_: Exception) {
            null
        } ?: return "設定を確認してください。"
        val body = stream.bufferedReader(Charsets.UTF_8).use { it.readText() }.trim()
        return if (body.isBlank()) "設定を確認してください。" else body.take(500)
    }
}
