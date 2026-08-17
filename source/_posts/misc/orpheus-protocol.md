---
title: orpheus-protocol
date: 2026-08-17 17:12:56
tags:
---

~~简称op~~

``` bash
orpheus://{content}
```
content为base64

``` json
{
  "type": "song",
  "id": 434323,
  "cmd": "play"
}
{
  "type": "playlist",
  "id": 6697480619
}
{
  "type": "album",
  "id": 174150517
}
...
```

e.g. 播放 id 为 434323 的曲目
``` bash
# 这里是压缩后的 具体看你客户端认不认
xdg-open "orpheus://eyJ0eXBlIjogInNvbmciLCJpZCI6IDQzNDMyMywiY21kIjogInBsYXkifQo="
```
