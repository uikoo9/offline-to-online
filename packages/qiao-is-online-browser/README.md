## qiao-is-online-browser

[![npm version](https://img.shields.io/npm/v/qiao-is-online-browser.svg?style=flat-square)](https://www.npmjs.org/package/qiao-is-online-browser)
[![npm downloads](https://img.shields.io/npm/dm/qiao-is-online-browser.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao-is-online-browser)

浏览器检测用户是否在线

- [一篇文章判断用户是否在线](https://blog.insistime.com/is-online)

## install

安装

```shell
npm i qiao-is-online-browser
```

## use

使用

```javascript
// cjs
const { isOnline } = require('qiao-is-online-browser');

// mjs
import { isOnline } from 'qiao-is-online-browser';
```

## api

### isOnline

是否在线

- imgSrc
  - 类型: string
  - 说明: 图片地址
- return
  - 类型: string
  - 说明: 是否在线, 'online', 'offline'

```javascript
await isOnline('your online img src');
```

### offlineToOnline

从离线到在线

- imgSrc
  - 类型: string
  - 说明: 图片地址
- callback
  - 类型: function
  - 说明: 从离线到在线的回调函数
- intervalTime
  - 类型: number
  - 说明: 检测在线状态的间隔时间，单位 ms，默认为 3000ms

```javascript
offlineToOnline(imgSrc, callback, intervalTime);
```

## version

### 0.0.6.20230411

1. 3.0.0

### 0.0.5.20221025

1. 1.0.0

### 0.0.4.20220512

1. lerna

### 0.0.3.20210220

1. ncu
2. add jsdoc

### 0.0.2.20200908

1. is online with img src

### 0.0.1.20200821

1. init project
2. is online
3. offline to online
