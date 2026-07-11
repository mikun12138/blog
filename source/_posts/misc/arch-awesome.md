---
title: arch-awesome
date: 2026-07-08 00:03:01
tags:
---

# pacman

## 安装日志
``` bash
grep -F "[ALPM] installed" /var/log/pacman.log
```
## 安装日志
``` bash
grep -F "[ALPM] upgraded" /var/log/pacman.log
```
## 安装日志
``` bash
grep -F "[ALPM] removed" /var/log/pacman.log
```

# qol
展开文件夹
``` bash
find src/ -type f -exec cp -t dest/ {} +
```

dolphin缓存
``` bash
rm -rf ~/.cache/thumbnails/*
```

tree格式化为yaml
``` bash
tree -J | yq -P
```