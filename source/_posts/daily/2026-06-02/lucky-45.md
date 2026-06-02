---
title: lucky-45
categories: daily
date: 2026-06-02 12:39:40
tags:
---

# lwjgl项目窗口不显示

~~not work on my machine~~

排查后发现是wayland下 n卡驱动的opengl多线程优化问题

``` bash
__GL_THREADED_OPTIMIZATIONS=0
```