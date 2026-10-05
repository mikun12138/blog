---
title: csp-in-arch
date: 2026-05-28 10:27:10
tags:
    - arch
categories:
    - misc
---

## env

驱动方面 笔者的板子是Huion的GC610 aur有个官方版本驱动 不过各种问题之下改用了OpenTabletDriver

同时使用Bottles管理wine版本
``` bash
yay -S opentabletdriver bottles
```
## Auto
> https://www.youtube.com/watch?v=iYhEm32Lr4Y

> https://github.com/parka6060/CSPenguin-Installer

## Manual

### csp

似乎是csp会默认调用windows ink的缘故 模拟win10+下均启动失败

使用win7成功启动 kron4ek-wine-11.9-amd下笔压正常

### cs

clipstudio界面使用webview2 需要安装一个microsoft edge

> 参考 https://appdb.winehq.org/objectManager.php?sClass=version&iId=42586#notes

觉得edge烦的可以单独全局安装webview2 不过webview2不支持win7全局安装 可切到win10安装再切回

~~或者直接用Remove-Edge~~

> OpenTabletDriver有个 windows ink插件 解决了有时wine内收不到点击输入的问题