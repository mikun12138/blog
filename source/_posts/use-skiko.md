---
title: use-skiko
date: 2025-06-14 01:24:32
tags:
---

``` kotlin

val skiaLayer = SkiaLayer()
skiaLayer.renderDelegate = SkiaLayerRenderDelegate(skiaLayer, object : SkikoRenderDelegate {
    override fun onRender(canvas: Canvas, width: Int, height: Int, nanoTime: Long) {
        // 绘制逻辑
        
    }
}

// jwt
SwingUtilities.invokeLater {
    val window = JFrame("Hello Skiko! ").apply {
        defaultCloseOperation = WindowConstants.EXIT_ON_CLOSE
        preferredSize = Dimension(1920, 1080)
    }
    skiaLayer.attachTo(window.contentPane)
    skiaLayer.needRedraw()
    window.pack()
    window.isVisible = true
}

```

Paint
``` kotlin 

```

基本绘制
``` kotlin

canvas.drawRect() // 矩形
canvas.drawCircle() // 圆形
canvas.drawString() // 文字

canvas.drawImage() // 图片
canvas.drawPath() // 路径

```