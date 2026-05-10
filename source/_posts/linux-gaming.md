---
title: linux-gaming
date: 2026-05-11 04:41:45
tags:
---

> 非官方指南: https://github.com/ValveSoftware/Proton/wiki/Using-a-NTFS-disk-with-Linux-and-Windows

## wrong ELF class: ELFCLASS32

确保你的proton是安装在非ntfs文件系统下

&& 确保你的compatata清理完毕并正确链接

&& 确保挂载的ntfs卷权限设置正确


## wine会像windows那样自动加载同目录下dll 但steam proton貌似不会 需要手动指定

如星趴加速插件 改启动选项为

``` ini
    WINEDLLOVERRIDES="version=n,b" %command%
```

"version": 你的dll去掉后缀 | n: native (文件夹内) | b: buildin (wine内)

%command% 即为原启动命令
