---
title: arch-audio
date: 2026-05-09 21:29:35
tags:
---

``` conf
exec-once = pactl load-module module-null-sink media.class=Audio/Sink sink_name=Virtual-Sink
exec-once = pactl load-module module-null-sink media.class=Audio/Source/Virtual sink_name=Virtual-Mic

exec-once = sleep 2 && pw-link OBS-Monitor:output_FL Virtual-Sink:playback_FL
exec-once = sleep 2 && pw-link OBS-Monitor:output_FR Virtual-Sink:playback_FR

exec-once = sleep 2 && pw-link Virtual-Sink:monitor_FL Virtual-Mic:input_FL
exec-once = sleep 2 && pw-link Virtual-Sink:monitor_FR Virtual-Mic:input_FR
```

``` bash
pw-link -l | awk '/^OBS-Monitor/ {src=$1; p=1; next} /^[^ ]/ {p=0} p && /|->/ {print src, $2}' | xargs -n 2 pw-link -d
```