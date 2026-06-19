package jp.local.healthcollector

import android.content.Context
import java.time.Instant

data class AutoCollectStatus(
    val lastAttemptAt: String?,
    val lastSuccessAt: String?,
    val message: String?,
)

class AutoCollectStatusStore(context: Context) {
    private val preferences = context.getSharedPreferences(PREFERENCES_NAME, Context.MODE_PRIVATE)

    fun load(): AutoCollectStatus = AutoCollectStatus(
        lastAttemptAt = preferences.getString(KEY_LAST_ATTEMPT_AT, null),
        lastSuccessAt = preferences.getString(KEY_LAST_SUCCESS_AT, null),
        message = preferences.getString(KEY_MESSAGE, null),
    )

    fun recordAttempt() {
        preferences.edit()
            .putString(KEY_LAST_ATTEMPT_AT, Instant.now().toString())
            .putString(KEY_MESSAGE, "Health Connectから自動収集中です。")
            .apply()
    }

    fun recordSuccess() {
        val now = Instant.now().toString()
        preferences.edit()
            .putString(KEY_LAST_ATTEMPT_AT, now)
            .putString(KEY_LAST_SUCCESS_AT, now)
            .putString(KEY_MESSAGE, "自動収集と送信に成功しました。")
            .apply()
    }

    fun recordFailure(message: String) {
        preferences.edit()
            .putString(KEY_MESSAGE, message)
            .apply()
    }

    private companion object {
        const val PREFERENCES_NAME = "auto_collect_status"
        const val KEY_LAST_ATTEMPT_AT = "last_attempt_at"
        const val KEY_LAST_SUCCESS_AT = "last_success_at"
        const val KEY_MESSAGE = "message"
    }
}
