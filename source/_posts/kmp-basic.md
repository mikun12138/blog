---
title: KMP
---

# 记一次完整的kmp项目新建 
{% asset_img 0.png %}

## 环境
### Android Sdk 33 (Android 13)
### Gradle 8.11.1
### AGP (Android Gradle Plugin) 8.9.1


#### libs.versions.toml
``` toml
[versions]
compose-multiplatform = "1.8.0-beta02"
[plugins]
composeMultiplatform = { id = "org.jetbrains.compose", version.ref = "compose-multiplatform" }

```

#### build.gradle
``` kotlin
plugins {
    alias(libs.plugins.androidApplication) apply false
    alias(libs.plugins.androidLibrary) apply false
    alias(libs.plugins.kotlinAndroid) apply false 
    alias(libs.plugins.kotlinMultiplatform) apply false
    alias(libs.plugins.compose.compiler) apply false

+    alias(libs.plugins.composeMultiplatform) apply false

}
```

#### build.gradle (:androidApp)
``` kotlin

dependencies {
    implementation(projects.shared)
-    implementation(libs.compose.ui)
-    implementation(libs.compose.ui.tooling.preview)
-    implementation(libs.compose.material3)
    implementation(libs.androidx.activity.compose)
-    debugImplementation(libs.compose.ui.tooling)
}

```

#### build.gradle (:shared)
``` kotlin
plugins {
    alias(libs.plugins.kotlinMultiplatform)
    alias(libs.plugins.androidLibrary)
+    alias(libs.plugins.composeMultiplatform)
+    alias(libs.plugins.compose.compiler)
}

kotlin {
+    jvm("desktop")


+    val desktopMain by getting
+    desktopMain.dependencies {
+        implementation(compose.desktop.currentOs)
+        implementation(libs.kotlinx.coroutines.swing)
+    }
}

+compose.desktop {
+    application {
+        mainClass = "me.mikun.template.MainKt"
+
+        nativeDistributions {
+            targetFormats(TargetFormat.Dmg, TargetFormat.Msi, TargetFormat.Deb)
+            packageName = "me.mikun.template"
+            packageVersion = "1.0.0"
+        }
+    }
+}

```

#### 常用库
``` kotlin

commonMain.dependencies {
    implementation(compose.runtime)
    implementation(compose.foundation)
    implementation(compose.ui)
    implementation(compose.components.resources)
    implementation(compose.components.uiToolingPreview)

    implementation(compose.material3)

    // 通用viewModel
    implementation("org.jetbrains.androidx.lifecycle:lifecycle-viewmodel-compose:2.8.2")
    // 通用navigation
    implementation("org.jetbrains.androidx.navigation:navigation-compose:2.8.0-alpha10")
}


commonTest.dependencies {
    implementation(libs.kotlin.test)

    // https://www.jetbrains.com/help/kotlin-multiplatform-dev/compose-test.html#writing-and-running-tests-with-compose-multiplatform
    implementation(compose.uiTest)
}
```
