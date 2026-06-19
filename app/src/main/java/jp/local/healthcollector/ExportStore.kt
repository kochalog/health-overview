package jp.local.healthcollector

import android.content.Context
import org.json.JSONObject
import java.io.File
import java.time.ZonedDateTime
import java.time.format.DateTimeFormatter

class ExportStore(context: Context) {
    private val exportDirectory = File(context.filesDir, "exports").apply { mkdirs() }
    private val latestFile = File(exportDirectory, "latest.json")

    fun save(export: JSONObject) {
        val timestamp = ZonedDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMdd-HHmm"))
        val content = export.toString(2)
        latestFile.writeText(content)
        File(exportDirectory, "health-connect-$timestamp.json").writeText(content)
        trimOldExports()
    }

    fun loadLatest(): JSONObject? =
        latestFile.takeIf { it.exists() }?.readText()?.let(::JSONObject)

    private fun trimOldExports() {
        exportDirectory.listFiles()
            ?.filter { it.name.startsWith("health-connect-") }
            ?.sortedByDescending { it.lastModified() }
            ?.drop(31)
            ?.forEach(File::delete)
    }
}
