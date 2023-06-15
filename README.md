## quark-timer 
基于 Quarkc 实现复杂的 js 动画


## 如何安装

```bash
npm install quark-timer
```


### 使用

无论是`Vue`，`React`，`Angular`还是`Jq`项目，该组件都可以被使用。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link
      rel="icon"
      type="image/svg+xml"
      href="https://m.hellobike.com/resource/helloyun/12395/0USLE_quark.png?x-oss-process=image/quality,q_80"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello Quark</title>
    <script type="module" src="https://unpkg.com/quark-timer"></script>
    <style>
      body {
        margin: 0;
        display: grid;
        justify-content: center;
      }
      p {
        text-align: center;
      }
      quark-timer {
        position: absolute; 
        left: 50%; 
        top: 50%;
        transform: translate(-50%, -50%); 
      }
    </style>
  </head>
  <body>
    <!-- This is your component (custom element). -->
    <quark-timer>
  </body>
</html>

```
