---
title: asm
date: 2025-05-16 17:37:29
tags:
---

## 类型描述符
``` kotlin 
// 原始类型
Byte - B
Boolean - Z
Short - S
Int - I
Float - F
Long - L
Double - D
Char - C
Unit - V

// 类
ciallo.mikun.Nya - Lciallo/mikun/Nya

// 列表
ciallo.mikun.Nya[][] - [[Lciallo/mikun/Nya
```

## 方法描述符
``` kotlin
fun click(Short, Int, Long): ciallo.mikun.Nya
    - (SIL)Lciallo/mikun/Nya

fun release(ciallo.mikun.Nya): Unit
    - (Lciallo/mikun/Nya;)V
```

## ClassReader
``` java

class ClassReader {
    ...

    public void accept(ClassVisitor classVisitor, int parsingOptions)
    public void accept(ClassVisitor classVisitor, Attribute[] attributePrototypes, int parsingOptions)
    
}

```

### parsingOptions为读取模式
    SKIP_CODE - 跳过代码属性
    SKIP_DEBUG - 跳过源文件、局部变量表、局部变量类型表、方法参数列表、行号
    SKIP_FRAME - 跳过visitFrame
    EXPANDS_FRAMES - 跳过堆栈映射帧


# 示例
``` kotlin 

class Mygo {

}

```


