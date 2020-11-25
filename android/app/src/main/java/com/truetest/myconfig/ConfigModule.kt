package com.truetest.myconfig

import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.truetest.BuildConfig
import java.util.*

class ConfigModule : ReactContextBaseJavaModule() {
    override fun getName(): String = "ConfigModule"

    override fun getConstants(): Map<String, Any>? {
        val constants: MutableMap<String, Any> = HashMap()
        constants.put("BUILD_TYPE", BuildConfig.BUILD_TYPE)
        return constants
    }
}