---
title: kt-tricks
date: 2026-06-09 01:39:35
tags:
---

# kotlin 伟大无需多言

- 自1.9后 listOf方法多了一个单参数的重载 对应java的SingletonList 单元素数组优化
``` kotlin
    @SinceKotlin("1.9")
    public expect fun <T> listOf(element: T): List<T>

    // set也是
    @SinceKotlin("1.9")
    public expect fun <T> setOf(element: T): Set<T>

    // 还有map
    @SinceKotlin("1.9")
    public expect fun <K, V> mapOf(pair: Pair<K, V>): Map<K, V>
```
> ~~我用 SingletonList<T?> 当三个状态用XD [data] [null] []~~