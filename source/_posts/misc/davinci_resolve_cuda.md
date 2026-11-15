---
title: davinci_resolve_cuda
date: 2026-11-16 07:00:38
tags:
---

笔者的 archlinux(wayland) 在 nvidia optimus 和 intel opencl 的加持下 davinci_resolve 识别不到cuda 且即便使用 opencl-nvidia 也频频报错

![](davinci_resolve_cuda/0.png)

卸载intel的opencl后解决
```
sudo pacman -Rns intel-compute-runtime
```
![](davinci_resolve_cuda/1.png)

![](davinci_resolve_cuda/2.png)