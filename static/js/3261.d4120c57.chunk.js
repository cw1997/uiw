"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3261],{83261:function(r,e,n){n.r(e),e.default='Breadcrumb \u9762\u5305\u5c51\n===\n\n[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-breadcrumb/file/README.md)\n[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-breadcrumb.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-breadcrumb)\n[![npm version](https://img.shields.io/npm/v/@uiw/react-breadcrumb.svg?label=@uiw/react-breadcrumb)](https://npmjs.com/@uiw/react-breadcrumb)\n\n\u663e\u793a\u5f53\u524d\u9875\u9762\u7684\u8def\u5f84\uff0c\u5feb\u901f\u8fd4\u56de\u4e4b\u524d\u7684\u4efb\u610f\u9875\u9762\u3002\n\n```jsx\nimport { Breadcrumb } from \'uiw\';\n// or\nimport Breadcrumb from \'@uiw/react-breadcrumb\';\n```\n\n### \u57fa\u7840\u7528\u6cd5\n\n\u9002\u7528\u5e7f\u6cdb\u7684\u57fa\u7840\u7528\u6cd5\uff0c\u5728 `Breadcrumb` \u4e2d\u4f7f\u7528 `Breadcrumb.Item` \u6807\u7b7e\u8868\u793a\u4ece\u9996\u9875\u5f00\u59cb\u7684\u6bcf\u4e00\u7ea7\u3002\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e \n```jsx\nimport { Breadcrumb } from \'uiw\';\n\nReactDOM.render(\n  <Breadcrumb>\n    <Breadcrumb.Item>\u9996\u9875</Breadcrumb.Item>\n    <Breadcrumb.Item separator=">">\u6d3b\u52a8\u7ba1\u7406</Breadcrumb.Item>\n    <Breadcrumb.Item>\u6d3b\u52a8\u5217\u8868</Breadcrumb.Item>\n    <Breadcrumb.Item active>\u6d3b\u52a8\u8be6\u60c5</Breadcrumb.Item>\n  </Breadcrumb>,\n  _mount_\n);\n```\n\n### \u81ea\u5b9a\u4e49\u5206\u9694\u7b26\n\n\u4f7f\u7528 `separator=">"` \u53ef\u4ee5\u81ea\u5b9a\u4e49\u5206\u9694\u7b26\uff0c\u5206\u9694\u7b26\u4e5f\u53ef\u4ee5\u662f\u56fe\u6807\u3002\n\n\x3c!--rehype:codeSandbox=true&codePen=true--\x3e \n```jsx\nimport ReactDOM from \'react-dom\';\nimport { Breadcrumb, Divider } from \'uiw\';\n\nReactDOM.render(\n  <div>\n    <Breadcrumb>\n      <Breadcrumb.Item><a href="#">Home</a></Breadcrumb.Item>\n      <Breadcrumb.Item separator=">"><a href="#">Library</a></Breadcrumb.Item>\n      <Breadcrumb.Item active>Data</Breadcrumb.Item>\n    </Breadcrumb>\n    <Divider />\n    <Breadcrumb separator="#">\n      <Breadcrumb.Item><a href="#">Home</a></Breadcrumb.Item>\n      <Breadcrumb.Item separator={<span>+</span>}><a href="#">Home</a></Breadcrumb.Item>\n      <Breadcrumb.Item separator={<Icon type="home" verticalAlign="baseline" />}><a href="#">Icon</a></Breadcrumb.Item>\n      <Breadcrumb.Item separator=">"><a href="#">Library</a></Breadcrumb.Item>\n      <Breadcrumb.Item active>Data</Breadcrumb.Item>\n    </Breadcrumb>\n  </div>,\n  _mount_\n);\n```\n\n### \u5e26\u6709\u56fe\u6807\u548c\u8fde\u63a5\u7684\n\n\u56fe\u6807\u653e\u5728\u6587\u5b57\u524d\u9762\u3002\u6ce8\u610f\u6587\u5b57\u8981\u4f7f\u7528 `span` \u5305\u88f9\u8d77\u6765\uff0c\u56fe\u6807 `<Icon />` \u9700\u8981\u8ddf `span` \u540c\u7ea7\u3002`Breadcrumb.Item` \u5b9a\u4e49 `href` \u53c2\u6570\u7684\u8bdd\uff0c`Item` \u4e0a\u7684\u53c2\u6570\u5c31\u5168\u90e8\u662f\u8d85\u94fe\u539f\u59cb\u5c5e\u6027\u3002\n\n\x3c!--rehype:codeSandbox=true&codePen=true--\x3e \n```jsx\nimport ReactDOM from \'react-dom\';\nimport { Breadcrumb } from \'uiw\';\n\nconst stylIcon = { marginRight: 3, top: 2, display: \'inline-flex\' }\n\nReactDOM.render(\n  <div>\n    <Breadcrumb>\n      <Breadcrumb.Item>\n        <a href="#"><Icon style={stylIcon} type="home"/></a>\n      </Breadcrumb.Item>\n      <Breadcrumb.Item separator=">">\n        <a href="#"><Icon style={stylIcon} type="apple"/>Library</a>\n      </Breadcrumb.Item>\n      <Breadcrumb.Item separator=">">\n        <a href="#"><Icon style={stylIcon} type="pie-chart"/>Chart</a>\n      </Breadcrumb.Item>\n      <Breadcrumb.Item separator="">\n        <a href="#"><Icon style={{...stylIcon, marginRight: 0}} type="star-on"/> Chart</a>\n      </Breadcrumb.Item>\n      <Breadcrumb.Item separator="" active>Data</Breadcrumb.Item>\n    </Breadcrumb>\n  </div>,\n  _mount_\n);\n```\n\n## Breadcrumb\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| style | \u6837\u5f0f | String | - |\n| className | \u6837\u5f0f\u540d\u79f0 | String | `w-breadcrumb` |\n| tagName | \u8bbe\u7f6e\u5b50\u8282\u70b9\u6807\u7b7e\u540d\uff0c\u9ed8\u8ba4 `<a />` \u6807\u7b7e\uff0c\u4e5f\u53ef\u4ee5\u6307\u5b9a\u8def\u7531 [`<Link />`](https://reacttraining.com/react-router/web/api/Link) | String | `a` |\n| separator | \u5206\u9694\u7b26\u81ea\u5b9a\u4e49\uff0c\u5b9a\u4e49\u6240\u6709\u5b50\u7ec4\u4ef6\u7684\u5206\u9694\u7b26\u3002 | String | `/` |\n\n\u5176\u5b83\u53c2\u6570\u53ef\u6839\u636e `tagName` \u6765\u8bbe\u7f6e\uff0c\u9ed8\u8ba4 `<a />` \u6807\u7b7e\u65f6\uff0c\u53ef\u8bbe\u7f6e `href="https://wwww.google.com"` \u6216\u8005 `target="_blank"` \u7b49\u53c2\u6570\uff0c\u4f60\u53ef\u4ee5\u8bbe\u7f6e [react-router-dom](https://github.com/ReactTraining/react-router) \u8def\u7531 [`<Link />`](https://reacttraining.com/react-router/web/api/Link)\uff0c\u4f8b\u5982\uff1a\n\n```jsx\nimport { Breadcrumb } from \'uiw\';\nimport { Link } from \'react-router-dom\';\n\nconst Demo = () => {\n  return (\n    <Breadcrumb>\n      <Breadcrumb.Item tagName={Link} to="/home">\n        <Icon type="apple"/> Home\n      </Breadcrumb.Item>\n    </Breadcrumb>\n  )\n}\n```\n\n## Breadcrumb.Item\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| className | \u6837\u5f0f\u540d\u79f0 | String | `w-breadcrumb-itme` |\n| separator | \u5206\u9694\u7b26\u81ea\u5b9a\u4e49\uff0c\u5b50\u7ec4\u4ef6\u53ef\u4ee5\u5355\u72ec\u5b9a\u4e49\u4e0d\u540c\u7684\u5206\u9694\u7b26\u3002 | String | - |\n| active | \u6fc0\u6d3b\u3002 | String | - |\n\n'}}]);
//# sourceMappingURL=3261.d4120c57.chunk.js.map