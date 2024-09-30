![](https://cdn.dooring.cn/FsWxPE7xtNMxky68Y_asibdaEIKu)

# sdk使用指南

## 使用方式

1. 引入sdk

```js
<script src="http://cdn.turntip.vip/sdk/flowmix-doc.umd.js"></script>
```

2. 在项目中使用

```js
  const sdk = new FlowmixDocx({
      hold: '#root',
      toolBars: ["aiText"]
  })
```

一个完整的案例:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="http://cdn.turntip.vip/sdk/flowmix-doc.umd.js"></script>
</head>
<body>
    <div id="root" style="height:100vh"></div>
    <script>
        const sdk = new FlowmixDocx({
            hold: '#root',
            toolBars: ["aiText"]
        })
    </script>
</body>
</html>
```

## demo案例展示

<iframe src="/docz/demo.html" style="border:none;width:100%;height:500px"></iframe>



## API文档

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| `hold` | 挂载的元素 | `string` | - | - |
| `toolBars` | 配置隐藏工具栏展示的工具项 | string[] | - | - |
| `theme` | 编辑器默认主题 | `'light' \| 'dark'` | - | `light` |
| `outline` | 是否展示文档大纲，默认展示 | `boolean` | - | `true` |
| `token` | 配置请求的 token 参数 | `string` | - | - |
| `baseurl` | 配置请求的基础url路径 | `string` | - | - |
| `getDocApi` | 文档数据获取接口，GET | `string` | - | - |
| `saveDocApi` | 文档数据保存/更新接口，PUT | `string` | - | - |
| `uploadApi` | 文件/资源上传接口，POST | `string` | - | - |
| `ai2TextApi` | ai 文生文接口 | `string` | - | - |
| `getBoardApi` | 获取在线白板数据接口 | `string` | - | - |
| `saveBoardApi` | 在线白板数据保存接口 | `string` | - | - |
| `parseDocApi` | doc 解析接口 | `string` | - | - |
| `ocrApi` | 图片 ocr 识别接口 | `string` | - | - |
| `sdkPath` | sdk 地址，默认不对外暴露 | `string` | - | - |




当然整套设计机制包括文档数据流转模式都在源码中体现, 私有化后会统一提供技术培训服务.

- 编辑器版本体验地址: [flowmix/docx | 立即体验](http://flowmix.turntip.cn/docx)

- Vue版编辑器地址: [flowmix/docx-vue | 立即体验](http://flowmix.turntip.cn/docx-vue)

- Pro版文档知识引擎地址: [Nocode/wep | 立即体验](http://doc.dooring.vip)
