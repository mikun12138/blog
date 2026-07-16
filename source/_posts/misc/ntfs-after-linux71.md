---
title: ntfs-after-linux7.1
date: 2026-07-16 14:09:41
tags:
---

linux自6.9废弃了ntfs(旧)驱动 又于7.1引入了ntfs(新)驱动

新ntfs(下称ntfs) 与 ntfs3 各有优劣, 笔者先前使用 ntfs3 遇到了不少问题 诸如磁盘脏位啊文件读写出错导致应用进入TASK_UNINTERRUPTIBLE啊变成Zombie啊~~然后就只能重启重新拉一堆排的好好的工作区~~

ntfs 工具集使用 ntfsprogs-plus 替代 ntfs3 下的 ntfsprogs, 该包出于兼容 ntfs-3g 定义了几个mount.*链接 导致 fstab 中的 ntfs 被指向了 ntfs3

删了, 或者写个防更新的hook

/etc/pacman.d/hooks/ntfsprogs-plus-remove-mount-helper.hook
``` ini
[Trigger]
Operation = Install
Operation = Upgrade
Type = Package
Target = ntfsprogs-plus

[Action]
Description = Removing /usr/bin/mount.ntfs*
When = PostTransaction
Exec = /usr/bin/rm -f /usr/bin/mount.ntfs /usr/bin/mount.ntfsplus /usr/bin/mount.ntfs-3g /usr/bin/mount.lowntfs-3g
```

用几天试试..