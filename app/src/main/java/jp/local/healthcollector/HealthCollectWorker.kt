package jp.local.healthcollector

import android.content.Context
import androidx.health.connect.client.HealthConnectClient
import androidx.work.CoroutineWorker
import androidx.work.WorkerParameters
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import java.time.Instant
import java.time.temporal.ChronoUnit

class HealthCollectWorker(
    appContext: Context,
    workerParams: WorkerParameters,
) : CoroutineWorker(appContext, workerParams) {

    override suspend fun doWork(): Result {
        val statusStore = AutoCollectStatusStore(applicationContext)
        statusStore.recordAttempt()

        if (HealthConnectClient.getSdkStatus(applicationContext) != HealthConnectClient.SDK_AVAILABLE) {
            statusStore.recordFailure("Health Connectを利用できないため、後で再試行します。")
            return Result.retry()
        }

        return try {
            val export = HealthConnectRepository(
                HealthConnectClient.getOrCreate(applicationContext)
            ).collect(
                start = Instant.now().minus(30, ChronoUnit.DAYS),
                end = Instant.now(),
            )
            ExportStore(applicationContext).save(export)
            val config = UploadSettings(applicationContext).load()
            if (config == null) {
                statusStore.recordFailure("自動送信設定が未設定です。")
                return Result.success()
            }
            when (val uploadResult = withContext(Dispatchers.IO) {
                HealthDataUploader().upload(export, config)
            }) {
                UploadResult.Success -> {
                    statusStore.recordSuccess()
                    Result.success()
                }
                is UploadResult.RetryableFailure -> {
                    statusStore.recordFailure(
                        "自動送信に失敗しました。後で再試行します: ${uploadResult.message}"
                    )
                    Result.retry()
                }
                // Keep periodic collection alive so corrected settings are used on the next run.
                is UploadResult.PermanentFailure -> {
                    statusStore.recordFailure(
                        "自動送信設定に問題があります: ${uploadResult.message}"
                    )
                    Result.success()
                }
            }
        } catch (error: Exception) {
            statusStore.recordFailure(
                "自動収集に失敗しました: ${error.localizedMessage ?: error::class.simpleName}"
            )
            Result.retry()
        }
    }
}
