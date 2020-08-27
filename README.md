image-cycle-resizer
===========

Cross-platform image decoder(png/jpeg/gif) and encoder(png/jpeg) for Node.js  
Node.js轻量级跨平台图像编解码库（自动缩小图片到指定大小）

``` javascript
var ImageCycleResizer = require("image-cycle-resizer");

let ICR = new ImageCycleResizer("in/1.jpg");

ICR.setStep("/2")
    .setLimit(300*1024)
    .save( "out/1.jpg", 100 );
```

## Support 支持情况

if node >= 10.x, please install images@latest

| Platform | Architecture | Node Version |
|:------|:-------------|:------------|
| Windows | x64 |8, 9, 10, 11, 12|
| OSX | X64 | 8, 9, 10, 11, 12|
| Linux* | x64 |8, 9, 10, 11, 12|

- The 32-bit system is not supported for the time being.


if  node <= 9.x, please install images@3.1.1

| Platform | Architecture | Node Version |
|:------|:-------------|:------------|
| Windows | x86 & x64 | 0.9.11, 0.10, 0.12, 1, 2, 3, 4, 5, 6, 8, 10|
| OSX | X64| 0.9.11, 0.10, 0.12, 1, 2, 3, 4, 5, 6, 8, 9, 10|
| Linux* | x86 & x64 | 0.9.11, 0.10, 0.12, 1, 2, 3, 4, 5, 6, 8, 10|

## Features 功能特性

* Lightweight: no need to install any image processing library.
* 轻量级：无需安装任何图像处理库。
* Cross-platform: Released a compiled .node file on windows, just download and start.
* 跨平台：Windows下发布了编译好的.node文件,下载就能用。
* Easy-to-use: Provide jQuery-like chaining API. Simple and reliable!
* 方便用：jQuery风格的API，简单可依赖。

## Installation 安装
	$ npm install image-cycle-resizer

## API 接口

image-cycle-resizer provide jQuery-like Chaining API,You can start the chain like this:  
image-cycle-resizer 提供了类似jQuery的链式调用API,您可以这样开始:

### constructor([obj[,step=100[, limit=2*1024*1024]]])
obj: [Buffer|WrappedImage|filePath]

Load and decode image from obj

从指定文件加载并解码图像

### .setStep( step )

Set the reduction step size, which can be a number, "/N"

设置缩小步长，可以为数字，“/N”



### .setLimit(limit)

Set the maximum file size

设置最大文件大小



### .setQuality( quality )

Set the default generated image quality

设置默认生成图片质量



### .getBuff(tpye[, quality])

Get the file buffer

获得文件的buffer



### .reduceWidth([step])

Zoom out the picture

缩小图片



### .save(output[, quality])

Save the reduced picture

保存缩小后的图片



### .start(output[quality])
Get the reduced picture

获得缩小后的图片



## 属性

### image

Picture object

图片对象



### limit

最大文件限制



### step

Maximum file limit

缩小步长



### quality

Default generated image quality

默认生成图片质量



## NOTICE

This project is based on [node-images](https://github.com/zhangyuanwei/node-images) and follows the [MIT](./LICENSE)