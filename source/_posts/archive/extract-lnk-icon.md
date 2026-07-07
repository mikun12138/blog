---
title: extract-file-icon
date: 2026-05-02 05:15:36
tags:
    - win
categories:
    - qol
---

## 获取ico 仅限lnk
``` powershell
$path = Read-Host "Drop shortcut here"
(New-Object -ComObject WScript.Shell).CreateShortcut($path.Trim('"')).IconLocation
pause
```