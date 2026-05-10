---
title: linux-gaming
date: 2026-05-11 04:41:45
tags:
---

wine会像windows那样自动加载同目录下dll 但steam proton貌似不会 需要手动指定

如星趴加速插件 改启动选项为

``` ini
    WINEDLLOVERRIDES="version=n,b" %command%
```

"version": 你的dll去掉后缀 | n: native (文件夹内) | b: buildin (wine内)