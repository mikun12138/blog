---
title: awesome_memo
date: 2026-10-06 03:38:05
tags:
---

``` bash
mkdir -p "$HOME/.local/share/Steam/steamapps/compatdata/250900/pfx/drive_c/users/steamuser/Documents/My Games"
ln -s "/mnt/windows/game/.game/Binding of Isaac Repentance/saves" "$HOME/.local/share/Steam/steamapps/compatdata/250900/pfx/drive_c/users/steamuser/Documents/My Games/Binding of Isaac Repentance"
rm "$HOME/.local/share/osu-wine/osu!/Skins" -r
ln -s "/mnt/windows/game/rhythm_game/osu/stb/Skins" "$HOME/.local/share/osu-wine/osu!/Skins"
rm "$HOME/.local/share/osu-wine/osu!/Songs" -r
ln -s "/mnt/windows/game/rhythm_game/osu/stb/Songs" "$HOME/.local/share/osu-wine/osu!/Songs"
```