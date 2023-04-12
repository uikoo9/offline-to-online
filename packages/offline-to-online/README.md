## offline-to-online

[![npm version](https://img.shields.io/npm/v/offline-to-online.svg?style=flat-square)](https://www.npmjs.org/package/offline-to-online)
[![npm downloads](https://img.shields.io/npm/dm/offline-to-online.svg?style=flat-square)](https://npm-stat.com/charts.html?package=offline-to-online)

浏览器和 nodejs 下检测用户从离线到在线

- [一篇文章判断用户是否在线](https://blog.insistime.com/is-online)

## install

安装

```shell
-- on nodejs
npm install qiao-is-online

-- on browser
npm install qiao-is-online-broswer
```

## use

使用

```javascript
// nodejs
const { offlineToOnline } = require('qiao-is-online');
import { offlineToOnline } from 'qiao-is-online';

// browser
const { offlineToOnline } = require('qiao-is-online-browser');
import { offlineToOnline } from 'qiao-is-online-browser';
```

## api

### offline to online on nodejs

从离线到在线

- callback
  - 类型: function
  - 说明: 从离线到在线的回调函数
- intervalTime
  - 类型: number
  - 说明: 检测在线状态的间隔时间，单位 ms，默认为 3000ms

```javascript
offlineToOnline(callback, intervalTime);
```

### offline to online on browser

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

1. add jsdoc

### 0.0.2.20200908

1. is online img src on browser

### 0.0.1.20200821

1. init project
2. on browser ok
3. string offline online
4. fix
