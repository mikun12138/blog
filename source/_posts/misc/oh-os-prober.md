---
title: oh-os-prober
date: 2026-05-05 02:36:27
tags:
---

在虚拟机试装nixos+arch 共用/boot分区

分区如下
``` bash
/dev/sda
 - /dev/sda1 boot
 - /dev/sda2 nixos
 - /dev/sda3 nixos-swap
 - /dev/sda4 archlinux
 - /dev/sda5 archlinux-swap

```

在nixos上使用os-prober找不到arch

手动挂载再次查找 得到的结果是

``` conf
	set root='hd0,gpt4'
	if [ x$feature_platform_search_hint = xy ]; then
	  search --no-floppy --fs-uuid --set=root --hint-ieee1275='ieee1275//sas/disk@0,gpt4' --hint-bios=hd0,gpt4 --hint-efi=hd0,gpt4 --hint-baremetal=ahci0,gpt4  bd8dacc1-f2f2-463a-b466-0a2308b564b6
	else
	  search --no-floppy --fs-uuid --set=root bd8dacc1-f2f2-463a-b466-0a2308b564b6
	fi

	linux /root/vmlinuz-linux root=/dev/sda4 
	initrd /root/initramfs-linux.img
```

vmlinuz-linux initramfs-linux.img 被错误地归在了/dev/sda4 (archlinux盘)下

``` conf
search --set=drive1 --fs-uuid D8DB-DA5B
    ......
    
-	linux ($drive1)/vmlinuz-linux root=/dev/sda4 
-	initrd ($drive1)/initramfs-linux.img
+	linux /root/vmlinuz-linux root=/dev/sda4 
+	initrd /root/initramfs-linux.img
```

btrfs的子卷没有正确被识别
``` conf
-	linux ($drive1)/vmlinuz-linux root=/dev/sda4 
+	linux ($drive1)/vmlinuz-linux root=UUID=bd8dacc1-f2f2-463a-b466-0a2308b564b6 rootflags=subvol=@
```
root改为uuid更稳 (所以为什么不自己写x

成功进入系统w...
menuentry 'Arch Linux (on /dev/sda4)' --class arch --class gnu-linux --class gnu --class os $menuentry_id_option 'osprober-gnulinux-simple-bd8dacc1-f2f2-463a-b466-0a2308b564b6' {
search --set=drive1 --fs-uuid D8DB-DA5B
	insmod part_gpt
	insmod btrfs
	set root='hd0,gpt4'
	if [ x$feature_platform_search_hint = xy ]; then
	  search --no-floppy --fs-uuid --set=root --hint-ieee1275='ieee1275//sas/disk@0,gpt4' --hint-bios=hd0,gpt4 --hint-efi=hd0,gpt4 --hint-baremetal=ahci0,gpt4  bd8dacc1-f2f2-463a-b466-0a2308b564b6
	else
	  search --no-floppy --fs-uuid --set=root bd8dacc1-f2f2-463a-b466-0a2308b564b6
	fi
	linux ($drive1)/vmlinuz-linux root=/dev/sda4 rw rootflags=subvol=@  loglevel=5 nowatchdog
	initrd ($drive1)/initramfs-linux.img
}
submenu 'Advanced options for Arch Linux (on /dev/sda4)' $menuentry_id_option 'osprober-gnulinux-advanced-bd8dacc1-f2f2-463a-b466-0a2308b564b6' {
search --set=drive1 --fs-uuid D8DB-DA5B
	menuentry 'Arch Linux (on /dev/sda4)' --class gnu-linux --class gnu --class os $menuentry_id_option 'osprober-gnulinux-/boot/vmlinuz-linux--bd8dacc1-f2f2-463a-b466-0a2308b564b6' {
		insmod part_gpt
		insmod btrfs
		set root='hd0,gpt4'
		if [ x$feature_platform_search_hint = xy ]; then
		  search --no-floppy --fs-uuid --set=root --hint-ieee1275='ieee1275//sas/disk@0,gpt4' --hint-bios=hd0,gpt4 --hint-efi=hd0,gpt4 --hint-baremetal=ahci0,gpt4  bd8dacc1-f2f2-463a-b466-0a2308b564b6
		else
		  search --no-floppy --fs-uuid --set=root bd8dacc1-f2f2-463a-b466-0a2308b564b6
		fi
		linux ($drive1)/vmlinuz-linux root=/dev/sda4 rw rootflags=subvol=@  loglevel=5 nowatchdog
		initrd ($drive1)/initramfs-linux.img
	}
}
