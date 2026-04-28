---
title: Kotlin Load Native Lib
date: 2025-06-16 22:33:49
tags: 
---

加载本地库
``` kotlin
Files.createTempFile("libname").apply {
    deleteOnExit()
    // 写入
        ...
    System.load(getAbsolutePath())
}
```