<style scoped>
    .example{
        border: 1px solid #f5f5f5;
        border-radius: 5px;
        padding:20px
    }
    .vx-button {
        margin:10px 5px !important
    }
    
    details > summary:first-of-type {
        font-size: 10px;
        padding: 8px 0;
        cursor: pointer;
        color: #1989fa;
    }
    a {
      all: initial
    }
    a:hover {
      all: initial
    }
</style>

# vx-button 按钮

## 基础用法

使用 type、plain、round 和 circle 来定义按钮的样式。

<div class="example">
    <div>
        <vx-button>默认按钮</vx-button>
        <vx-button icon="edit" type="primary">主要按钮</vx-button>
        <vx-button type="success">成功按钮</vx-button>
        <vx-button type="info">信息按钮</vx-button>
        <vx-button type="warning">警告按钮</vx-button>
        <vx-button type="danger">危险按钮</vx-button>
        <vx-button type="text">文字按钮</vx-button>
        <br>
        <br>
        <vx-button plain>朴素按钮</vx-button>
        <vx-button type="primary" plain>主要按钮</vx-button>
        <vx-button type="success" plain>成功按钮</vx-button>
        <vx-button type="info" plain>信息按钮</vx-button>
        <vx-button type="warning" plain>警告按钮</vx-button>
        <vx-button type="danger" plain>危险按钮</vx-button>
        <br>
        <br>
        <vx-button round>圆角按钮</vx-button>
        <vx-button type="primary" round>主要按钮</vx-button>
        <vx-button type="success" round>成功按钮</vx-button>
        <vx-button type="info" round>信息按钮</vx-button>
        <vx-button type="warning" round>警告按钮</vx-button>
        <vx-button type="danger" round>危险按钮</vx-button>
    </div>

</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <vx-button>默认按钮</vx-button>
    <vx-button type="primary">主要按钮</vx-button>
    <vx-button type="success">成功按钮</vx-button>
    <vx-button type="info">信息按钮</vx-button>
    <vx-button type="warning">警告按钮</vx-button>
    <vx-button type="danger">危险按钮</vx-button>
    <vx-button type="text">文字按钮</vx-button>
    <br />
    <br />
    <vx-button plain>朴素按钮</vx-button>
    <vx-button type="primary" plain>主要按钮</vx-button>
    <vx-button type="success" plain>成功按钮</vx-button>
    <vx-button type="info" plain>信息按钮</vx-button>
    <vx-button type="warning" plain>警告按钮</vx-button>
    <vx-button type="danger" plain>危险按钮</vx-button>
    <br />
    <br />
    <vx-button round>圆角按钮</vx-button>
    <vx-button type="primary" round>主要按钮</vx-button>
    <vx-button type="success" round>成功按钮</vx-button>
    <vx-button type="info" round>信息按钮</vx-button>
    <vx-button type="warning" round>警告按钮</vx-button>
    <vx-button type="danger" round>危险按钮</vx-button>
  </div>
</template>
<script lang="ts" setup>
import { Button } from "vxx-ui";
</script>
<style>
.vx-vx-button {
  margin-right: 10px;
}
</style>
```

</details>

## 禁用状态

<div class="example">
    <div>
        <vx-button disabled>禁用按钮</vx-button>
        <vx-button type="primary" disabled>主要按钮</vx-button>
        <vx-button type="success" disabled>成功按钮</vx-button>
        <vx-button type="info" disabled>信息按钮</vx-button>
        <vx-button type="warning" disabled>警告按钮</vx-button>
        <vx-button type="danger" disabled>危险按钮</vx-button>
        <br>
        <br>
        <vx-button disabled>禁用按钮</vx-button>
        <vx-button type="primary" disabled plain>主要按钮</vx-button>
        <vx-button type="success" disabled plain>成功按钮</vx-button>
        <vx-button type="info" disabled plain>信息按钮</vx-button>
        <vx-button type="warning" disabled plain>警告按钮</vx-button>
        <vx-button type="danger" disabled plain>危险按钮</vx-button>
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <vx-button disabled>禁用按钮</vx-button>
    <vx-button type="primary" disabled>主要按钮</vx-button>
    <vx-button type="success" disabled>成功按钮</vx-button>
    <vx-button type="info" disabled>信息按钮</vx-button>
    <vx-button type="warning" disabled>警告按钮</vx-button>
    <vx-button type="danger" disabled>危险按钮</vx-button>
    <br />
    <br />
    <vx-button disabled>禁用按钮</vx-button>
    <vx-button type="primary" disabled plain>主要按钮</vx-button>
    <vx-button type="success" disabled plain>成功按钮</vx-button>
    <vx-button type="info" disabled plain>信息按钮</vx-button>
    <vx-button type="warning" disabled plain>警告按钮</vx-button>
    <vx-button type="danger" disabled plain>危险按钮</vx-button>
  </div>
</template>
<script lang="ts" setup>
import { Button } from "vxx-ui";
</script>
<style>
.vx-vx-button {
  margin-right: 10px;
}
</style>
```

</details>

## 调整尺寸

<div class="example">
    <div>
        <vx-button>默认按钮</vx-button>
        <vx-button size="medium">中等按钮</vx-button>
        <vx-button size="small">小型按钮</vx-button>
        <vx-button size="mini">超小按钮</vx-button>
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <vx-button>默认按钮</vx-button>
    <vx-button size="medium">中等按钮</vx-button>
    <vx-button size="small">小型按钮</vx-button>
    <vx-button size="mini">超小按钮</vx-button>
  </div>
</template>
<script lang="ts" setup>
import { Button } from "vxx-ui";
</script>
<style>
.vx-vx-button {
  margin-right: 10px;
}
</style>
```

</details>
