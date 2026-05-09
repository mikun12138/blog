---
title: arch-audio
date: 2026-05-09 21:29:35
tags:
---

``` bash
pw-link -l | awk '/^OBS-Monitor/ {src=$1; p=1; next} /^[^ ]/ {p=0} p && /|->/ {print src, $2}' | xargs -n 2 pw-link -d
```