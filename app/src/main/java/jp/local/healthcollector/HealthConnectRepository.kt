package jp.local.healthcollector

import androidx.health.connect.client.HealthConnectClient
import androidx.health.connect.client.records.ActiveCaloriesBurnedRecord
import androidx.health.connect.client.records.BasalMetabolicRateRecord
import androidx.health.connect.client.records.BodyFatRecord
import androidx.health.connect.client.records.ExerciseSessionRecord
import androidx.health.connect.client.records.HeartRateRecord
import androidx.health.connect.client.records.HeartRateVariabilityRmssdRecord
import androidx.health.connect.client.records.LeanBodyMassRecord
import androidx.health.connect.client.records.OxygenSaturationRecord
import androidx.health.connect.client.records.Record
import androidx.health.connect.client.records.RespiratoryRateRecord
import androidx.health.connect.client.records.RestingHeartRateRecord
import androidx.health.connect.client.records.SleepSessionRecord
import androidx.health.connect.client.records.StepsRecord
import androidx.health.connect.client.records.WeightRecord
import androidx.health.connect.client.request.ReadRecordsRequest
import androidx.health.connect.client.time.TimeRangeFilter
import org.json.JSONArray
import org.json.JSONObject
import java.time.Instant
import kotlin.reflect.KClass

class HealthConnectRepository(private val client: HealthConnectClient) {

    suspend fun collect(start: Instant, end: Instant): JSONObject {
        val records = JSONArray()
        val counts = JSONObject()
        val errors = JSONObject()

        collectType(WeightRecord::class, start, end, records, counts, errors)
        collectType(BodyFatRecord::class, start, end, records, counts, errors)
        collectType(LeanBodyMassRecord::class, start, end, records, counts, errors)
        collectType(BasalMetabolicRateRecord::class, start, end, records, counts, errors)
        collectType(HeartRateRecord::class, start, end, records, counts, errors)
        collectType(RestingHeartRateRecord::class, start, end, records, counts, errors)
        collectType(HeartRateVariabilityRmssdRecord::class, start, end, records, counts, errors)
        collectType(OxygenSaturationRecord::class, start, end, records, counts, errors)
        collectType(RespiratoryRateRecord::class, start, end, records, counts, errors)
        collectType(SleepSessionRecord::class, start, end, records, counts, errors)
        collectType(StepsRecord::class, start, end, records, counts, errors)
        collectType(ActiveCaloriesBurnedRecord::class, start, end, records, counts, errors)
        collectType(ExerciseSessionRecord::class, start, end, records, counts, errors)

        return JSONObject()
            .put("schemaVersion", 1)
            .put("exportedAt", Instant.now().toString())
            .put("rangeStart", start.toString())
            .put("rangeEnd", end.toString())
            .put("counts", counts)
            .put("errors", errors)
            .put("records", records)
    }

    private suspend fun <T : Record> collectType(
        type: KClass<T>,
        start: Instant,
        end: Instant,
        output: JSONArray,
        counts: JSONObject,
        errors: JSONObject,
    ) {
        val typeName = type.simpleName ?: "Unknown"
        try {
            var pageToken: String? = null
            var count = 0
            do {
                val response = client.readRecords(
                    ReadRecordsRequest(
                        recordType = type,
                        timeRangeFilter = TimeRangeFilter.between(start, end),
                        pageToken = pageToken,
                    )
                )
                response.records.forEach {
                    output.put(it.toJson())
                    count++
                }
                pageToken = response.pageToken
            } while (pageToken != null)
            counts.put(typeName, count)
        } catch (error: Exception) {
            errors.put(typeName, error.localizedMessage ?: error::class.simpleName)
        }
    }

    private fun Record.toJson(): JSONObject {
        val json = JSONObject()
            .put("type", this::class.simpleName)
            .put("id", metadata.id)
            .put("sourcePackage", metadata.dataOrigin.packageName)
            .put("lastModifiedTime", metadata.lastModifiedTime.toString())

        when (this) {
            is WeightRecord -> json.put("time", time).put("kilograms", weight.inKilograms)
            is BodyFatRecord -> json.put("time", time).put("percentage", percentage.value)
            is LeanBodyMassRecord -> json.put("time", time).put("kilograms", mass.inKilograms)
            is BasalMetabolicRateRecord -> json.put("time", time).put("kilocaloriesPerDay", basalMetabolicRate.inKilocaloriesPerDay)
            is RestingHeartRateRecord -> json.put("time", time).put("beatsPerMinute", beatsPerMinute)
            is HeartRateVariabilityRmssdRecord -> json.put("time", time).put("milliseconds", heartRateVariabilityMillis)
            is OxygenSaturationRecord -> json.put("time", time).put("percentage", percentage.value)
            is RespiratoryRateRecord -> json.put("time", time).put("rate", rate)
            is HeartRateRecord -> json
                .put("startTime", startTime)
                .put("endTime", endTime)
                .put("samples", JSONArray().apply {
                    samples.forEach { put(JSONObject().put("time", it.time).put("beatsPerMinute", it.beatsPerMinute)) }
                })
            is SleepSessionRecord -> json
                .put("startTime", startTime)
                .put("endTime", endTime)
                .put("title", title)
                .put("notes", notes)
                .put("stages", JSONArray().apply {
                    stages.forEach { put(JSONObject().put("startTime", it.startTime).put("endTime", it.endTime).put("stage", it.stage)) }
                })
            is StepsRecord -> json.put("startTime", startTime).put("endTime", endTime).put("count", count)
            is ActiveCaloriesBurnedRecord -> json.put("startTime", startTime).put("endTime", endTime).put("kilocalories", energy.inKilocalories)
            is ExerciseSessionRecord -> json
                .put("startTime", startTime)
                .put("endTime", endTime)
                .put("exerciseType", exerciseType)
                .put("title", title)
                .put("notes", notes)
                .put("segments", JSONArray().apply {
                    segments.forEach {
                        put(
                            JSONObject()
                                .put("startTime", it.startTime)
                                .put("endTime", it.endTime)
                                .put("segmentType", it.segmentType)
                                .put("repetitions", it.repetitions)
                        )
                    }
                })
        }
        return json
    }
}
