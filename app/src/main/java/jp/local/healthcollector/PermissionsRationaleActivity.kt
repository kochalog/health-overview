package jp.local.healthcollector

import android.os.Bundle
import android.view.View
import androidx.appcompat.app.AppCompatActivity

class PermissionsRationaleActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_rationale)
        findViewById<View>(R.id.rationaleRoot).applySystemBarInsets()
    }
}
