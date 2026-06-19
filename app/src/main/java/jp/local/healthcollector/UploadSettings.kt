package jp.local.healthcollector

import android.content.Context
import java.net.URI
import java.util.UUID

data class UploadConfig(
    val endpointUrl: String,
    val authToken: String,
    val deviceId: String,
)

class UploadSettings(context: Context) {
    private val preferences = context.getSharedPreferences(PREFERENCES_NAME, Context.MODE_PRIVATE)

    fun load(): UploadConfig? {
        val endpointUrl = preferences.getString(KEY_ENDPOINT_URL, null)?.trim().orEmpty()
        val authToken = preferences.getString(KEY_AUTH_TOKEN, null)?.trim().orEmpty()
        if (endpointUrl.isBlank() || authToken.isBlank()) return null

        return UploadConfig(
            endpointUrl = endpointUrl,
            authToken = authToken,
            deviceId = deviceId(),
        )
    }

    fun endpointUrl(): String = preferences.getString(KEY_ENDPOINT_URL, "").orEmpty()

    fun save(endpointUrl: String, authToken: String): Result<Unit> = runCatching {
        val normalizedUrl = endpointUrl.trim().trimEnd('/')
        requireValidEndpoint(normalizedUrl)
        require(authToken.isNotBlank()) { "認証トークンを入力してください。" }

        preferences.edit()
            .putString(KEY_ENDPOINT_URL, normalizedUrl)
            .putString(KEY_AUTH_TOKEN, authToken.trim())
            .apply()
        deviceId()
        Unit
    }

    private fun deviceId(): String {
        preferences.getString(KEY_DEVICE_ID, null)?.let { return it }
        return UUID.randomUUID().toString().also {
            preferences.edit().putString(KEY_DEVICE_ID, it).apply()
        }
    }

    private fun requireValidEndpoint(endpointUrl: String) {
        val uri = runCatching { URI(endpointUrl) }.getOrNull()
        require(uri != null && uri.host != null) { "正しい送信先URLを入力してください。" }
        require(uri.scheme == "https") { "送信先URLにはHTTPSを使用してください。" }
    }

    private companion object {
        const val PREFERENCES_NAME = "upload_settings"
        const val KEY_ENDPOINT_URL = "endpoint_url"
        const val KEY_AUTH_TOKEN = "auth_token"
        const val KEY_DEVICE_ID = "device_id"
    }
}
