TimePicker 时间选择器
===

[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-time-picker/file/README.md)
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-time-picker.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-time-picker)
[![npm version](https://img.shields.io/npm/v/@uiw/react-time-picker.svg?label=@uiw/react-time-picker)](https://npmjs.com/@uiw/react-time-picker)

当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。

```jsx
import { TimePicker } from 'uiw';
// or
import TimePicker from '@uiw/react-time-picker';
```

## 基础用法

```jsx mdx:preview&bg=#fff
import React from 'react';
import { TimePicker, Row, Col } from 'uiw';

const Demo = () => (
  <Row gutter={10}>
    <Col style={{ width: 200 }} fixed>
      <TimePicker
        onChange={(formatDate, date) => {
          console.log('--->', formatDate, date);
        }}
      />
    </Col>
    <Col style={{ width: 200 }} fixed>
      <TimePicker format="HH:mm" precision="minute" />
    </Col>
    <Col style={{ width: 200 }} fixed>
      <TimePicker format="HH" precision="hour" />
    </Col>
  </Row>
)
export default Demo;
```

## 设置初始值

```jsx mdx:preview&bg=#fff
import React from 'react';
import { TimePicker, Row, Col } from 'uiw';

const Demo = () => {
  const value = new Date(2018, 1, 24, 4,5,35);
  return (
    <Row gutter={10}>
      <Col style={{ width: 200 }} fixed>
        <TimePicker value={value} />
      </Col>
      <Col style={{ width: 200 }} fixed>
        <TimePicker value={value} format="HH:mm" precision="minute" />
      </Col>
      <Col style={{ width: 200 }} fixed>
        <TimePicker value={value} format="HH" precision="hour" />
      </Col>
    </Row>
  )
}
export default Demo;
```

## 设置按钮大小

```jsx mdx:preview&bg=#fff
import React from 'react';
import { TimePicker, Row, Col } from 'uiw';

const Demo = () => {
  const value = new Date(2018, 1, 24, 4,5,35);
  return (
    <Row gutter={10}>
      <Col style={{ width: 200 }} fixed>
        <TimePicker size="small" value={value} />
      </Col>
      <Col style={{ width: 200 }} fixed>
        <TimePicker value={value} format="HH" precision="hour" />
      </Col>
      <Col style={{ width: 200 }} fixed>
        <TimePicker size="large" value={value} format="HH:mm" precision="minute" />
      </Col>
    </Row>
  )
}
export default Demo;
```

## 表单中应用

在表单返回的数据，并没有将 `format` 格式化后的数据返回给你，而是返回的一个 `Date`，你可以通过 [`formatter`](#/components/formatter) 重新格式化。

```jsx mdx:preview&bg=#fff
import React from 'react';
import { TimePicker, Notify, Row, Col, Form, Button } from 'uiw';

const Demo = () => (
  <div>
    <Form
      onSubmit={({initial, current}) => {
        console.log('-->>', initial, current);
        if(current.date) {
          Notify.success({
            title: '提交成功！',
            description: `表单提交时间成功，时间为：${formatter('HH:mm:ss', current.date)}`,
          });
        } else {
          Notify.error({
            title: '提交失败！',
            description: <span>表单提交时间成功，时间为：<b>空</b>，将自动填充初始化值！</span>,
          });
        }
      }}
      fields={{
        date: {
          labelClassName: 'fieldLabel',
          labelFor: 'date-inline',
          children: <TimePicker />
        },
      }}
    >
      {({ fields, state, canSubmit }) => {
        return (
          <Row gutter={10}>
            <Col style={{ width: 200 }} fixed>{fields.date}</Col>
            <Col>
              <Button disabled={!canSubmit()} type="primary" htmlType="submit">提交</Button>
            </Col>
          </Row>
        )
      }}
    </Form>
  </div>
)
export default Demo;
```

## 禁用

可以使用 `disabledHours` `disabledMinutes` `disabledSeconds` 禁用部分时间选择。

```jsx mdx:preview&bg=#fff
import React from 'react';
import { TimePicker, Row, Col } from 'uiw';

const Demo = () => (
  <Row gutter={10} style={{ maxWidth: 360 }}>
      <Col style={{ width: 200 }} fixed>
      <TimePicker
        disabledMinutes={(minute, type) => {
          if (minute % 15 !== 0) {
            return true;
          }
        }}
        disabledHours={(hour, type, date) => {
          // console.log('~~:', hour, type, date);
          if (hour < 3) {
            return true;
          }
        }}
      />
    </Col>
    <Col style={{ width: 200 }} fixed>
      <TimePicker disabled value={new Date(2018, 1, 24, 4,5,35)} />
    </Col>
  </Row>
)
export default Demo;
```

## 不显示禁用

可以使用 `hideDisabled` 将禁用的部分时间隐藏。

```jsx mdx:preview&bg=#fff
import React from 'react';
import { TimePicker, Row, Col } from 'uiw';

const Demo = () => (
  <Row gutter={10} style={{ maxWidth: 360 }}>
    <Col style={{ width: 200 }} fixed>
      <TimePicker
        hideDisabled
        disabledMinutes={(minute, type) => {
          if (minute % 15 !== 0) {
            return true;
          }
        }}
        disabledHours={(hour, type, date) => {
          // console.log('~~:', hour, type, date);
          if (hour < 3) {
            return true;
          }
        }}
      />
    </Col>
  </Row>
)
export default Demo;
```

## 间隔时间

可以使用 `hideDisabled` 将禁用的部分时间隐藏。

```jsx mdx:preview&bg=#fff
import React from 'react';
import { TimePicker, Row, Col } from 'uiw';

const Demo = () => (
  <Row gutter={10} style={{ maxWidth: 360 }}>
    <Col style={{ width: 200 }} fixed>
      <TimePicker
        hideDisabled
        disabledMinutes={(minute, date) => {
          if (minute % 15 !== 0) {
            return true;
          }
        }}
        disabledSeconds={(second, date) => {
          if (second % 15 !== 0) {
            return true;
          }
        }}
      />
    </Col>
  </Row>
)
export default Demo;
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| value | 初始时间值 | Date | - |
| placeholder | 输入框提示文字 | String | - |
| format | 格式化时间，规则查看 [`formatter`](#/components/formatter) 文档 | Function | `HH:mm:ss` |
| precision | 选择时间精确度 | Enum{`hour`, `minute`, `second`} | `false` |
| disabled | 禁用全部操作 | Boolean | `false` |
| disabledHours | 禁止选择部分小时选项 | Function(hour, <br/>type{`Hours`, `Minutes`, `Seconds`}, <br/>selectedDate) | - |
| disabledMinutes | 禁止选择部分分钟选项 | Function(minute, <br/>type{`Hours`, `Minutes`, `Seconds`}, <br/>selectedDate) | - |
| disabledSeconds | 禁止选择部分秒选项 | Function(second, <br/>type{`Hours`, `Minutes`, `Seconds`}, <br/>selectedDate) | - |
| hideDisabled | 不可选择的项隐藏 | Boolean | `false` |
| onChange | 时间选择的回调函数 | Function(formatDate, Date, <br/>type{`Hours`, `Minutes`, `Seconds`}, <br/>, num, disableds) | - |

`uiw@3.3.0+` 组件集成部分 Input，不再通过 inputProps 属性传值，更多属性请参考 [Input](#/components/input)

## ~~Props.inputProps~~

`uiw@3.3.0+` 将不支持此属性

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| ~~inputProps~~ | ~~将参数传递给 [`<Input>`](#/components/input) 组件~~ | `Object` | - |

## Props.popoverProps

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| popoverProps | 将参数传递给 [`<Popover>`](#/components/popover) 组件 | `Object` | - |
