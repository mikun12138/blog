---
title: foreign's memory
date: 2025-05-11 04:59:41
tags:
---

# 关于 Arena
``` kotlin
    
Arena.ofConfined().use {
    it.allocate()
    ...
} // 退出作用域时由内部的arena分配的内存都将无效!

// 你会更习惯用这个的(逃
Arena.global()

```

# 关于 MemorySegment
``` java

// 很安全 大概
MemorySegment ofAddress(Long address)

// 访问其内部值的时候都应确保其被指定了大小
MemorySegment reinterpret(long newSize)

```

# 对于需要从参数返回值
``` kotlin

val outSizeInPixels = Arena.global().allocate(2 * ValueLayoutJAVA_FLOAT.byteSize())
val outOriginInPixels = Arena.global().allocate(2 * ValueLayoutJAVA_FLOAT.byteSize())
val outPixelsPerUnit = Arena.global().allocate(1 * ValueLayoutJAVA_FLOAT.byteSize())
Live2DCubismCoreFFI.csmReadCanvasInfo(
    model,
    outSizeInPixels,
    outOriginInPixels,
    outPixelsPerUnit
)
// read
outSizeInPixels.getAtIndex(
    ValueLayout.JAVA_FLOAT,
    0
)
...

```

# 对于返回双重指针
``` kotlin

Live2DCubismCoreFFI.csmGetParameterCount(model).also { parameterCount->
    println("csmGetParameterCount: $parameterCount")
    Live2DCubismCoreFFI.csmGetParameterIds(model).also { ids ->
        val m0 = ids.reinterpret(parameterCount * ValueLayout.ADDRESS.byteSize())
        for (i in 0 until parameterCount) {
            val memorySegment = m0.getAtIndex(
                ValueLayout.ADDRESS,
                i.toLong()
            )
            println(
                "csmGetParameterIds: ${
                    memorySegment.reinterpret(Long.MAX_VALUE).getUtf8String(0)
                }"
            )
        }
    }
}

```