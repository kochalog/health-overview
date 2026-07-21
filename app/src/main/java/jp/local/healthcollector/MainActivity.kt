package jp.local.healthcollector

import android.Manifest
import android.content.Intent
import android.content.pm.PackageManager
import android.os.Build
import android.os.Bundle
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AppCompatActivity
import androidx.health.connect.client.HealthConnectClient
import androidx.health.connect.client.HealthConnectFeatures
import androidx.health.connect.client.PermissionController
import androidx.health.connect.client.permission.HealthPermission
import androidx.health.connect.client.permission.HealthPermission.Companion.PERMISSION_READ_HEALTH_DATA_IN_BACKGROUND
import androidx.health.connect.client.records.ActiveCaloriesBurnedRecord
import androidx.health.connect.client.records.BasalMetabolicRateRecord
import androidx.health.connect.client.records.BodyFatRecord
import androidx.health.connect.client.records.ExerciseSessionRecord
import androidx.health.connect.client.records.HeartRateRecord
import androidx.health.connect.client.records.HeartRateVariabilityRmssdRecord
import androidx.health.connect.client.records.LeanBodyMassRecord
import androidx.health.connect.client.records.OxygenSaturationRecord
import androidx.health.connect.client.records.RespiratoryRateRecord
import androidx.health.connect.client.records.RestingHeartRateRecord
import androidx.health.connect.client.records.SleepSessionRecord
import androidx.health.connect.client.records.StepsRecord
import androidx.health.connect.client.records.WeightRecord
import androidx.lifecycle.lifecycleScope
import androidx.core.content.ContextCompat
import androidx.work.ExistingPeriodicWorkPolicy
import androidx.work.ExistingWorkPolicy
import androidx.work.Constraints
import androidx.work.NetworkType
import androidx.work.OneTimeWorkRequestBuilder
import androidx.work.PeriodicWorkRequestBuilder
import androidx.work.WorkInfo
import androidx.work.WorkManager
import jp.local.healthcollector.databinding.ActivityMainBinding
import kotlinx.coroutines.launch
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import org.json.JSONObject
import java.time.Duration
import java.time.Instant
import java.time.LocalTime
import java.time.temporal.ChronoUnit
import java.time.ZonedDateTime
import java.time.ZoneId
import java.time.format.DateTimeFormatter
import java.util.concurrent.TimeUnit

class MainActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMainBinding
    private var client: HealthConnectClient? = null
    private var latestExport: JSONObject? = null
    private var periodicWorkInfos: List<WorkInfo> = emptyList()
    private var autoCollectScheduleRefreshed = false

    private val dataPermissions = setOf(
        HealthPermission.getReadPermission(WeightRecord::class),
        HealthPermission.getReadPermission(BodyFatRecord::class),
        HealthPermission.getReadPermission(LeanBodyMassRecord::class),
        HealthPermission.getReadPermission(BasalMetabolicRateRecord::class),
        HealthPermission.getReadPermission(HeartRateRecord::class),
        HealthPermission.getReadPermission(RestingHeartRateRecord::class),
        HealthPermission.getReadPermission(HeartRateVariabilityRmssdRecord::class),
        HealthPermission.getReadPermission(OxygenSaturationRecord::class),
        HealthPermission.getReadPermission(RespiratoryRateRecord::class),
        HealthPermission.getReadPermission(SleepSessionRecord::class),
        HealthPermission.getReadPermission(StepsRecord::class),
        HealthPermission.getReadPermission(ActiveCaloriesBurnedRecord::class),
        HealthPermission.getReadPermission(ExerciseSessionRecord::class),
    )

    private val permissionLauncher = registerForActivityResult(
        PermissionController.createRequestPermissionResultContract()
    ) { updatePermissionStatus() }

    private val notificationPermissionLauncher = registerForActivityResult(
        ActivityResultContracts.RequestPermission()
    ) { granted ->
        binding.statusText.text = if (granted) {
            "毎朝07:30頃のデータ送信通知を設定しました。"
        } else {
            "通知が許可されていないため、毎朝のデータ送信通知は表示されません。"
        }
    }

    private val saveLauncher = registerForActivityResult(
        ActivityResultContracts.CreateDocument("application/json")
    ) { uri ->
        val export = latestExport ?: return@registerForActivityResult
        if (uri != null) {
            contentResolver.openOutputStream(uri)?.bufferedWriter()?.use {
                it.write(export.toString(2))
            }
            binding.statusText.text = "JSONを保存しました。"
        }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
        binding.root.applySystemBarInsets()

        binding.permissionButton.setOnClickListener { permissionLauncher.launch(permissions) }
        binding.collectButton.setOnClickListener { collect() }
        binding.autoCollectButton.setOnClickListener { enableAutoCollect() }
        binding.saveUploadSettingsButton.setOnClickListener { saveUploadSettings() }
        binding.saveButton.setOnClickListener {
            val name = "health-connect-${ZonedDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMdd-HHmm"))}.json"
            saveLauncher.launch(name)
        }
        latestExport = ExportStore(this).loadLatest()
        binding.saveButton.isEnabled = latestExport != null
        binding.uploadEndpointInput.setText(UploadSettings(this).endpointUrl())
        observeAutoCollectWork()
        refreshAutoCollectStatus()
        checkAvailability()
        setupDailySendReminder()
    }

    override fun onResume() {
        super.onResume()
        if (client != null) updatePermissionStatus()
        refreshAutoCollectStatus()
    }

    private fun checkAvailability() {
        when (HealthConnectClient.getSdkStatus(this)) {
            HealthConnectClient.SDK_AVAILABLE -> {
                client = HealthConnectClient.getOrCreate(this)
                binding.collectButton.isEnabled = true
                updatePermissionStatus()
            }
            HealthConnectClient.SDK_UNAVAILABLE_PROVIDER_UPDATE_REQUIRED -> {
                binding.statusText.text = "Health Connectのインストールまたは更新が必要です。"
                binding.permissionButton.text = "Health Connectを開く"
                binding.permissionButton.setOnClickListener {
                    startActivity(Intent(HealthConnectClient.ACTION_HEALTH_CONNECT_SETTINGS))
                }
            }
            else -> {
                binding.statusText.text = "この端末ではHealth Connectを利用できません。Android 9以降の対応端末が必要です。"
                binding.permissionButton.isEnabled = false
                binding.collectButton.isEnabled = false
            }
        }
    }

    private fun updatePermissionStatus() {
        val healthClient = client ?: return
        lifecycleScope.launch {
            val granted = healthClient.permissionController.getGrantedPermissions()
            val missing = dataPermissions - granted
            if (missing.isEmpty()) {
                binding.statusText.text = "必要な読み取り権限が許可されています。"
                binding.permissionButton.text = "読み取り権限は許可済み"
                binding.permissionButton.isEnabled = false
            } else {
                binding.statusText.text =
                    "${dataPermissions.size - missing.size}/${dataPermissions.size}種類の読み取り権限が許可されています。未許可の種類は収集できません。"
                binding.permissionButton.text = "読み取りを許可する"
                binding.permissionButton.isEnabled = true
            }
        }
    }

    private fun collect() {
        val healthClient = client ?: return
        binding.collectButton.isEnabled = false
        binding.saveButton.isEnabled = false
        binding.statusText.text = "Health Connectから収集中です…"

        lifecycleScope.launch {
            try {
                val export = HealthConnectRepository(healthClient).collect(
                    start = Instant.now().minus(30, ChronoUnit.DAYS),
                    end = Instant.now(),
                )
                latestExport = export
                ExportStore(this@MainActivity).save(export)
                binding.summaryText.text = buildSummary(export.getJSONObject("counts"))
                binding.statusText.text = uploadIfConfigured(export)
                binding.saveButton.isEnabled = true
            } catch (error: Exception) {
                binding.statusText.text = "収集できませんでした: ${error.localizedMessage ?: error::class.simpleName}"
            } finally {
                binding.collectButton.isEnabled = true
            }
        }
    }

    private fun buildSummary(counts: JSONObject): String {
        val lines = mutableListOf("取得件数")
        counts.keys().forEach { key -> lines += "$key: ${counts.getInt(key)}" }
        return lines.joinToString("\n")
    }

    private val permissions: Set<String>
        get() = dataPermissions

    private suspend fun uploadIfConfigured(export: JSONObject): String {
        val config = UploadSettings(this).load()
            ?: return "収集が完了しました。自動送信は未設定です。"
        return when (val result = withContext(Dispatchers.IO) {
            HealthDataUploader().upload(export, config)
        }) {
            UploadResult.Success -> "収集したデータを受信APIへ送信しました。"
            is UploadResult.RetryableFailure -> "収集は完了しましたが送信できませんでした: ${result.message}"
            is UploadResult.PermanentFailure -> "収集は完了しましたが送信設定に問題があります: ${result.message}"
        }
    }

    private fun saveUploadSettings() {
        val endpoint = binding.uploadEndpointInput.text?.toString().orEmpty()
        val token = binding.uploadTokenInput.text?.toString().orEmpty()
        UploadSettings(this).save(endpoint, token)
            .onSuccess {
                binding.uploadTokenInput.text?.clear()
                binding.statusText.text = "自動送信設定を保存しました。次回の収集から送信します。"
            }
            .onFailure {
                binding.statusText.text = it.localizedMessage ?: "自動送信設定を保存できませんでした。"
            }
    }

    private fun enableAutoCollect() {
        val healthClient = client ?: return
        lifecycleScope.launch {
            val backgroundAvailable = healthClient.features.getFeatureStatus(
                HealthConnectFeatures.FEATURE_READ_HEALTH_DATA_IN_BACKGROUND
            ) == HealthConnectFeatures.FEATURE_STATUS_AVAILABLE

            if (!backgroundAvailable) {
                binding.statusText.text = "この端末のHealth Connectはバックグラウンド読み取りに対応していません。"
                return@launch
            }

            val granted = healthClient.permissionController.getGrantedPermissions()
            if (PERMISSION_READ_HEALTH_DATA_IN_BACKGROUND !in granted) {
                permissionLauncher.launch(dataPermissions + PERMISSION_READ_HEALTH_DATA_IN_BACKGROUND)
                binding.statusText.text = "権限を許可した後、もう一度「毎日の自動収集」を押してください。"
                return@launch
            }

            val workManager = WorkManager.getInstance(this@MainActivity)
            val constraints = autoCollectConstraints()
            enqueueDailyAutoCollect(workManager, constraints)

            val immediateRequest = OneTimeWorkRequestBuilder<HealthCollectWorker>()
                .setConstraints(constraints)
                .build()
            workManager.enqueueUniqueWork(
                HealthWork.IMMEDIATE_NAME,
                ExistingWorkPolicy.REPLACE,
                immediateRequest,
            )

            binding.autoCollectButton.text = "自動収集を再設定・テストする"
            binding.statusText.text = "毎日07:50 JSTを目標に自動収集を再登録し、即時テストを開始しました。"
            refreshAutoCollectStatus()
        }
    }

    private fun observeAutoCollectWork() {
        val workManager = WorkManager.getInstance(this)
        workManager.getWorkInfosForUniqueWorkLiveData(HealthWork.PERIODIC_NAME).observe(this) { workInfos ->
            periodicWorkInfos = workInfos
            if (!autoCollectScheduleRefreshed && workInfos.any { it.isScheduledForAutoCollect() }) {
                autoCollectScheduleRefreshed = true
                enqueueDailyAutoCollect(workManager, autoCollectConstraints())
            }
            refreshAutoCollectStatus()
        }
        workManager.getWorkInfosForUniqueWorkLiveData(HealthWork.IMMEDIATE_NAME).observe(this) {
            refreshAutoCollectStatus()
        }
    }

    private fun refreshAutoCollectStatus() {
        val scheduled = periodicWorkInfos.any { it.isScheduledForAutoCollect() }
        binding.autoCollectButton.text = if (scheduled) {
            "自動収集を再設定・テストする"
        } else {
            "毎日の自動収集を有効にする"
        }

        val status = AutoCollectStatusStore(this).load()
        binding.autoCollectStatusText.text = buildString {
            append("定期実行: ")
            append(if (scheduled) "登録済み" else "未登録")
            if (scheduled) {
                append("（毎日07:50 JST目標）")
            }
            append("\n最終試行: ")
            append(formatStatusTime(status.lastAttemptAt))
            append("\n最終成功: ")
            append(formatStatusTime(status.lastSuccessAt))
            append("\n結果: ")
            append(status.message ?: "まだ実行履歴がありません。")
        }
    }

    private fun formatStatusTime(raw: String?): String {
        if (raw == null) return "-"
        return runCatching {
            DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")
                .format(Instant.parse(raw).atZone(ZoneId.systemDefault()))
        }.getOrDefault(raw)
    }

    private fun setupDailySendReminder() {
        DailySendReminder.schedule(this)
        if (
            Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU &&
            ContextCompat.checkSelfPermission(this, Manifest.permission.POST_NOTIFICATIONS) !=
                PackageManager.PERMISSION_GRANTED
        ) {
            val preferences = getSharedPreferences(REMINDER_PREFERENCES, MODE_PRIVATE)
            if (!preferences.getBoolean(KEY_NOTIFICATION_PERMISSION_REQUESTED, false)) {
                preferences.edit().putBoolean(KEY_NOTIFICATION_PERMISSION_REQUESTED, true).apply()
                notificationPermissionLauncher.launch(Manifest.permission.POST_NOTIFICATIONS)
            }
        }
    }

    private fun millisUntilNextAutoCollect(): Long {
        val now = ZonedDateTime.now(AUTO_COLLECT_ZONE)
        var next = now.toLocalDate().atTime(AUTO_COLLECT_TIME).atZone(AUTO_COLLECT_ZONE)
        if (!next.isAfter(now)) {
            next = next.plusDays(1)
        }
        return Duration.between(now, next).toMillis()
    }

    private fun autoCollectConstraints(): Constraints =
        Constraints.Builder()
            .setRequiredNetworkType(NetworkType.CONNECTED)
            .build()

    private fun enqueueDailyAutoCollect(workManager: WorkManager, constraints: Constraints) {
        val periodicRequest = PeriodicWorkRequestBuilder<HealthCollectWorker>(24, TimeUnit.HOURS)
            .setConstraints(constraints)
            .setInitialDelay(millisUntilNextAutoCollect(), TimeUnit.MILLISECONDS)
            .build()
        workManager.enqueueUniquePeriodicWork(
            HealthWork.PERIODIC_NAME,
            ExistingPeriodicWorkPolicy.CANCEL_AND_REENQUEUE,
            periodicRequest,
        )
    }

    private fun WorkInfo.isScheduledForAutoCollect(): Boolean =
        state == WorkInfo.State.ENQUEUED ||
            state == WorkInfo.State.RUNNING ||
            state == WorkInfo.State.BLOCKED

    companion object {
        private const val REMINDER_PREFERENCES = "daily-send-reminder"
        private const val KEY_NOTIFICATION_PERMISSION_REQUESTED = "notification-permission-requested"
        private val AUTO_COLLECT_ZONE: ZoneId = ZoneId.of("Asia/Tokyo")
        private val AUTO_COLLECT_TIME: LocalTime = LocalTime.of(7, 50)
    }
}
