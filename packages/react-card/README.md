Card 卡片
===

[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-card/file/README.md)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-card.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-card)
[![npm version](https://img.shields.io/npm/v/@uiw/react-card.svg?label=@uiw/react-card)](https://npmjs.com/@uiw/react-card)

通用卡片容器，将信息聚合在卡片容器中展示，用来显示文字、列表、图文等内容。

```jsx
import { Card } from 'uiw';
// or
import Card from '@uiw/react-card';
```

## 基础用法

包含标题、内容、操作区域。

```jsx mdx:preview&bg=#fff
import React from 'react';
import { Card } from 'uiw';

export default function Demo() {
  return(
    <div>
      <Card title="Card标题" extra={<a href="#">更多</a>} style={{ width: 300 }}>
        卡片内容<br/>
        卡片内容<br/>
        卡片内容<br/>
      </Card>
    </div>
  )
}
```

## 无边框

在灰色背景上使用无边框的卡片。

```jsx mdx:preview
import React from 'react';
import { Card } from 'uiw';

export default function Demo() {
  return(
    <Card title="Card标题" bordered={false} style={{ width: 300 }}>
      卡片内容<br/>
      卡片内容<br/>
      卡片内容<br/>
    </Card>
  )
}
```

## 简洁卡片

只包含内容区域。

```jsx mdx:preview
import React from 'react';
import { Card } from 'uiw';

export default function Demo() {
  return(
    <Card style={{ width: 300 }}>
      卡片内容<br/>
      卡片内容<br/>
      卡片内容<br/>
    </Card>
  )
}
```

## 更灵活的内容展示

可以调整默认边距，设定宽度。

```jsx mdx:preview
import React from 'react';
import { Card } from 'uiw';

let titleStyle = { padding: `10px 16px` };

export default function Demo() {
  return(
    <Card style={{ width: 240 }} bodyStyle={{ padding: 10 }}>
      <div>
        <img alt="example" width="100%" src="https://avatars1.githubusercontent.com/u/1680273?v=4" />
      </div>
      <div style={titleStyle}>
        <h3 style={{margin:0}}>我爱漂亮妹妹</h3>
        <p style={{margin:0}}><a href="https://uiwjs.github.io">https://uiwjs.github.io</a></p>
      </div>
    </Card>
  )
}
```

## 添加页脚

```jsx mdx:preview
import React from 'react';
import { Card, Icon } from 'uiw';

const footer = (
  <a href="https://uiwjs.github.io">
    <Icon type='user' />&nbsp;
    16 Friends
  </a>
)

export default function Demo() {
  return(
    <Card
      title="Card标题"
      footer={footer}
      style={{ width: 240 }} 
      bodyStyle={{ padding: 0 }}
    >
      <div>
        <img alt="example" width="100%" src="https://avatars1.githubusercontent.com/u/1680273?v=4" />
      </div>
      <div style={{ padding: `10px 16px` }}>
        <h3 style={{margin:0}}>我爱漂亮妹妹</h3>
        <p style={{margin:0}}><a href="https://uiwjs.github.io">https://uiwjs.github.io</a></p>
      </div>
    </Card>
  )
}
```

## 激活

设置属性 `active=true` 将激活卡片，默认展示鼠标经过的样式。

```jsx mdx:preview
import React from 'react';
import { Card, Icon } from 'uiw';

const footer = (
  <a href="https://uiwjs.github.io">
    <Icon type='user' />&nbsp;
    16 Friends
  </a>
)

export default function Demo() {
  return(
    <Card
      active
      title="Card标题"
      footer={footer}
      style={{ width: 240 }} 
      bodyStyle={{ padding: 0 }}
    >
      <div>
        <img alt="example" width="100%" src="https://avatars1.githubusercontent.com/u/1680273?v=4" />
      </div>
      <div style={{ padding: `10px 16px` }}>
        <h3 style={{margin:0}}>我爱漂亮妹妹</h3>
        <p style={{margin:0}}><a href="https://uiwjs.github.io">https://uiwjs.github.io</a></p>
      </div>
    </Card>
  );
}
```

## API

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| title | 卡片标题 | String/ReactNode | - |
| footer | 页脚内容的简写 | String/ReactNode | - |
| extra | 卡片右上角的操作区域 | String/ReactNode | - |
| bordered | 是否显示边框 | Boolean | `true` |
| active | 展示鼠标经过的样式。 | Boolean | `false` |
| noHover | 取消鼠标移过时边框阴影 | Boolean | `false` |
| bodyStyle | 设置 `body` 的样式 | Object | - |
| bodyClassName | 设置 `body` 的 `className` | String | - |