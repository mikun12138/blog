---
title: 关闭windows开始栏的bing搜索
date: 2025-10-23 20:34:27
tags:
---

``` powershell
    Set-ItemProperty -Path "HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\Search" -Name "BingSearchEnabled" -Value 0 -Type DWord
```
- win10有效 win11有待测试
