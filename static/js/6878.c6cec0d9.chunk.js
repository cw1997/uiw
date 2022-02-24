"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6878],{36878:function(e,n,a){a.r(n),n.default="Calendar \u65e5\u5386\n===\n\n[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-calendar/file/README.md)\n[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-calendar.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-calendar)\n[![npm version](https://img.shields.io/npm/v/@uiw/react-calendar.svg?label=@uiw/react-calendar)](https://npmjs.com/@uiw/react-calendar)\n\n\u6309\u7167\u65e5\u5386\u5f62\u5f0f\u5c55\u793a\u6570\u636e\u7684\u5bb9\u5668\u3002\n\n```jsx\nimport { Calendar } from 'uiw';\n// or\nimport Calendar from '@uiw/react-calendar';\n```\n\n### \u57fa\u7840\u7528\u6cd5\n\n\u4e0b\u9762\u662f\u57fa\u7840\u4f7f\u7528\u65b9\u6cd5\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u65e5\u5386\u901a\u77e5\u4e8b\u9879\uff0c\u5728\u65e5\u5386\u6e32\u67d3\u5355\u5143\u683c\u65f6\uff0c\u4f1a\u6839\u636e data \u5185\u5bb9\u6765\u6e32\u67d3\u5355\u5143\u683c\u901a\u77e5\u4e8b\u9879\u3002\n\n\x3c!--rehype:bgWhite=true&noScroll=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { Calendar, Badge } from 'uiw';\n\nconst data = [\n  { type: 'default', date: '8', label: '\u4e2d\u56fd\u7535\u52a8\u8f66\u521d\u521b\u516c\u53f8\u851a\u6765\u636e\u79f0\u8003\u8651\u660e\u5e74\u8d74\u7f8e\u4e0a\u5e02\u3002' },\n  { type: 'success', date: '8', label: '\u82f9\u679c\u6536\u8d2d\u4e00\u6279\u65b0\u4e13\u5229 \u6216\u7528\u4e8eiPhone 3D\u6444\u50cf\u5934' },\n  { type: 'default', date: '8', label: '\u9ad8\u901a\u518d\u8bc9iPhone\u4fb5\u72af\u4e13\u5229 \u82f9\u679c\u6b63\u9762\u53cd\u9a73' },\n  { type: 'error', date: '8', label: '\u8c37\u6b4c\u5b89\u5168\u56e2\u961f\u62a5\u544amacOS\u6587\u4ef6\u7cfb\u7edf\u9ad8\u5371\u6f0f\u6d1e' },\n  { type: 'default', date: '8', label: 'iPhone\u9500\u91cf\u4e0b\u6ed1\u4f7f\u5bcc\u58eb\u5eb7\u5de5\u4eba\u5f85\u9047\u964d\u4f4e' },\n  { type: 'default', date: '8', label: 'Flutter 1.0\u91cd\u78c5\u53d1\u5e03\uff0c\u5b83\u8fd8\u60f3\u505a\u684c\u9762\u548cWeb\u5f00\u53d1' },\n  { type: 'warning', date: '15', label: '\u6708\u5706\u7684\u65e5\u5b50?', style: { color: 'red' } },\n  { type: 'success', date: '1/1', label: '\u5143\u65e6\u8282' },\n  { type: 'error', date: '3/12', label: '\u690d\u6811\u8282' },\n  { type: 'info', date: '3/5', label: '\u5b66\u96f7\u950b\u65e5' },\n  { type: 'default', date: '3/8', label: '\u5987\u5973\u8282' },\n  { type: 'success', date: '2019/3/8', label: '2019\u690d\u6811\u8282' },\n  { type: 'warning', date: '5/1', label: '\u52b3\u52a8\u8282' },\n  { type: 'default', date: '5/4', label: '\u9752\u5e74\u8282' },\n  { type: 'success', date: '6/1', label: '\u513f\u7ae5\u8282' },\n  { type: 'warning', date: '7/1', label: '\u5efa\u515a\u8282' },\n  { type: 'success', date: '8/1', label: '\u5efa\u519b\u8282' },\n  { type: 'warning', date: '9/10', label: '\u6559\u5e08\u8282' },\n  { type: 'default', date: '10/1', label: '\u56fd\u5e86\u8282' },\n]\nfunction filterData(dt) {\n  return dt.map((item) => {\n    let color = '';\n    switch (item.type) {\n      case 'success': color = '#28a745'; break;\n      case 'error': color = '#dc3545'; break;\n      case 'warning': color = '#F95C2B'; break;\n      case 'default': color = '#393E48'; break;\n      case 'info': color = '#008EF0'; break;\n    }\n    item.label = <Badge color={color}>{item.label}</Badge>;\n    return item;\n  });\n}\n\nReactDOM.render(\n  <div>\n    <Calendar\n      onSelectDay={(date, dateSource) => {\n        console.log('date:', date, dateSource);\n      }}\n      data={filterData(data)}\n    />\n  </div>,\n  _mount_\n);\n```\n\n\n### \u7981\u7528\u65e5\u5386\n\n\u5728\u65e5\u5386\u9762\u677f\u4e0a\u9762\u6dfb\u52a0\u901a\u77e5\u4e8b\u4ef6\uff0c\u8fd8\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e `disabledDate` \u6765\u7981\u6b62\u90e8\u5206\u65e5\u671f\u70b9\u51fb\uff0c\u5982\u4e0b\u5b9e\u4f8b\u6bcf\u670812\u53f7\u4e0d\u80fd\u70b9\u51fb\u3002\n\n\x3c!--rehype:bgWhite=true&noScroll=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { Calendar, Badge } from 'uiw';\n\nconst data = [\n  { type: 'default', date: '8', label: '\u4e2d\u56fd\u7535\u52a8\u8f66\u521d\u521b\u516c\u53f8\u851a\u6765\u636e\u79f0\u8003\u8651\u660e\u5e74\u8d74\u7f8e\u4e0a\u5e02\u3002' },\n  { type: 'success', date: '8', label: '\u82f9\u679c\u6536\u8d2d\u4e00\u6279\u65b0\u4e13\u5229 \u6216\u7528\u4e8eiPhone 3D\u6444\u50cf\u5934' },\n  { type: 'default', date: '8', label: '\u9ad8\u901a\u518d\u8bc9iPhone\u4fb5\u72af\u4e13\u5229 \u82f9\u679c\u6b63\u9762\u53cd\u9a73' },\n  { type: 'error', date: '8', label: '\u8c37\u6b4c\u5b89\u5168\u56e2\u961f\u62a5\u544amacOS\u6587\u4ef6\u7cfb\u7edf\u9ad8\u5371\u6f0f\u6d1e' },\n  { type: 'default', date: '8', label: 'iPhone\u9500\u91cf\u4e0b\u6ed1\u4f7f\u5bcc\u58eb\u5eb7\u5de5\u4eba\u5f85\u9047\u964d\u4f4e' },\n  { type: 'default', date: '8', label: 'Flutter 1.0\u91cd\u78c5\u53d1\u5e03\uff0c\u5b83\u8fd8\u60f3\u505a\u684c\u9762\u548cWeb\u5f00\u53d1' },\n  { type: 'warning', date: '15', label: '\u6708\u5706\u7684\u65e5\u5b50?', style: { color: 'red' } },\n  { type: 'success', date: '1/1', label: '\u5143\u65e6\u8282' },\n  { type: 'error', date: '3/12', label: '\u690d\u6811\u8282' },\n  { type: 'info', date: '3/5', label: '\u5b66\u96f7\u950b\u65e5' },\n  { type: 'default', date: '3/8', label: '\u5987\u5973\u8282' },\n  { type: 'success', date: '2019/3/8', label: '2019\u690d\u6811\u8282' },\n  { type: 'warning', date: '5/1', label: '\u52b3\u52a8\u8282' },\n  { type: 'default', date: '5/4', label: '\u9752\u5e74\u8282' },\n  { type: 'success', date: '6/1', label: '\u513f\u7ae5\u8282' },\n  { type: 'warning', date: '7/1', label: '\u5efa\u515a\u8282' },\n  { type: 'success', date: '8/1', label: '\u5efa\u519b\u8282' },\n  { type: 'warning', date: '9/10', label: '\u6559\u5e08\u8282' },\n  { type: 'default', date: '10/1', label: '\u56fd\u5e86\u8282' },\n]\nfunction filterData(dt) {\n  return dt.map((item) => {\n    let color = '';\n    switch (item.type) {\n      case 'success': color = '#28a745'; break;\n      case 'error': color = '#dc3545'; break;\n      case 'warning': color = '#F95C2B'; break;\n      case 'default': color = '#393E48'; break;\n      case 'info': color = '#008EF0'; break;\n      default: color = '#008EF0'; break;\n    }\n    item.label = <Badge color={color}>{item.label}</Badge>;\n    return item;\n  });\n}\nfunction disabledDate(currentDate, props) {\n  const day = currentDate.getDay();\n  // \u7981\u7528\u5468\u672b\uff0c\u53ea\u80fd\u70b9\u51fb\u5f53\u6708\u5de5\u4f5c\u65e5\n  if (day === 6 || day === 0 || props.next || props.prev) {\n    return true;\n  }\n  // \u4eca\u5929\u548c\u4eca\u5929\u4e4b\u524d\u4e0d\u80fd\u9009\u62e9\n  // return currentDate && currentDate.valueOf() < Date.now();\n}\n\nReactDOM.render(\n  <div>\n    <Calendar\n      onSelectDay={(date, dateSource) => {\n        console.log('date:', date, dateSource);\n      }}\n      disabledDate={disabledDate}\n      data={filterData(data)}\n    />\n  </div>,\n  _mount_\n);\n```\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| data | \u5728\u65e5\u5386\u9762\u677f\u4e0a\u9762\u6dfb\u52a0\u901a\u77e5\uff0c\u6570\u7ec4\u4e2d\u7684\u5bf9\u8c61\u53ef\u4ee5\u8bbe\u7f6e ElementProps\uff0c\u5982\uff1a`style`, `onClick` \u7b49\u5c5e\u6027\u3002 | `Array[{ date: YYYY/MM/DD, label: String/ReactNode }]` | - |\n| date[`<DatePicker>`](#/components/date-picker) | \u9009\u4e2d\u7684\u65e5\u671f | Date | - |\n| titleFormat | \u8bbe\u7f6e\u65e5\u5386\u9762\u677f\u4e0a\u9762\u7684\u65e5\u671f\u6807\u9898\u3002 | String | `YYYY\u5e74MM\u6708` |\n| today[`<DatePicker>`](#/components/date-picker) | \u9ed8\u8ba4\u9ad8\u4eae\u5f53\u5929\u65e5\u671f | Function(currentDate) | - |\n| todayLabel | \u201c\u4eca\u5929\u201d\u6309\u94ae\u7684\u6587\u672c\u8bbe\u7f6e | String | - |\n| panelDate[`<DatePicker>`](#/components/date-picker) | \u65e5\u5386\u9762\u677f\u9ed8\u8ba4\u5c55\u793a\u54ea\u4e00\u9875 | Date | `new Date` |\n| disabledDate[`<DatePicker>`](#/components/date-picker) | \u4e0d\u53ef\u9009\u62e9\u7684\u65e5\u671f\uff0c\u51fd\u6570\u8fd4\u56de `true` \u5f53\u524d\u65e5\u671f\u88ab\u7981\u7528\u65e0\u6cd5\u9009\u62e9\u3002`end`: \u5468\u672b\uff0c`prev`: \u4e0a\u4e2a\u6708\uff0c`next`\uff1a\u4e0b\u4e2a\u6708 | Function(currentDate, { end: bool, prev: bool, next: bool }) | - |\n| weekTitle[`<DatePicker>`](#/components/date-picker) | \u661f\u671f\u663e\u793a\u6587\u672c\u63d0\u793a | Array | \\[`\u661f\u671f\u5929`, `\u661f\u671f\u4e00`, `\u661f\u671f\u4e8c`, `\u661f\u671f\u4e09`, `\u661f\u671f\u56db`, `\u661f\u671f\u4e94`, `\u661f\u671f\u516d`\\] |\n| weekday[`<DatePicker>`](#/components/date-picker) | \u661f\u671f\u663e\u793a\u6587\u672c | Array | \\[`\u65e5`, `\u4e00`, `\u4e8c`, `\u4e09`, `\u56db`, `\u4e94`, `\u516d`\\] |\n| onSelectDay `@3.0.0+` | \u70b9\u51fb\u9009\u62e9\u65e5\u671f\u56de\u8c03 | Function | function(date?: Date, dateSource: { day?: number, month?: number, year?: number }) |\n| monthLabel[`<DatePicker>`](#/components/date-picker) | \u6708\u4efd\u663e\u793a\u6587\u672c | Array | \\[`\u4e00\u6708`, `\u4e8c\u6708`, `\u4e09\u6708`, `\u56db\u6708`, `\u4e94\u6708`, `\u516d\u6708`, `\u4e03\u6708`, `\u516b\u6708`, `\u4e5d\u6708`, `\u5341\u6708`, `\u5341\u4e00\u6708`, `\u5341\u4e8c\u6708`\\] |\n| onPaging | \u7ffb\u9875\u89e6\u53d1\u4e8b\u4ef6 | `Function(type: 'prev' \\| 'next' \\| 'today', month: number, date?: Date)` | - |"}}]);
//# sourceMappingURL=6878.c6cec0d9.chunk.js.map