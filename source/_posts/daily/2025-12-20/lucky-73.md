---
title: lucky-73
categories: daily
date: 2025-12-20 11:35:55
tags:
---

``` kotlin
    implementation(compose.desktop.currentOs)
```
该依赖会引入旧的material2

将其exclude
``` kotlin
    implementation(compose.desktop.currentOs) {
        exclude(group = "org.jetbrains.compose.material")
    }
```