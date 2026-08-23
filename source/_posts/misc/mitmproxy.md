---
title: mitmproxy
date: 2026-08-24 00:29:55
tags:
---

某站做了浏览器层的 anti-debugging 无法正常使用开发者工具调试 遂找到了这个软件对策

官方 package 内有收录 有保证这一块
``` bash
sudo pacman -S mitmproxy
```

1. 二选一
``` bash
# tui
mitmproxy

# webui 默认端口8081
mitmweb
```

2. 代理挂到 mitmproxy 上 (默认端口8080), 访问 http://mitm.it, 下载对应证书

3. 加入证书

``` bash
sudo trust anchor mitmproxy-ca-cert.pem
sudo update-ca-trust
``` 

然后就和正常的抓包差不多了...