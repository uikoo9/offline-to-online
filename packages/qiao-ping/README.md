## qiao-ping

[![npm version](https://img.shields.io/npm/v/qiao-ping.svg?style=flat-square)](https://www.npmjs.org/package/qiao-ping)
[![npm downloads](https://img.shields.io/npm/dm/qiao-ping.svg?style=flat-square)](https://npm-stat.com/charts.html?package=qiao-ping)

nodejs 下 ping 能力

- [一篇文章判断用户是否在线](https://blog.insistime.com/is-online)

## install

安装

```shell
npm i qiao-ping
```

## use

使用

```javascript
// cjs
const { ping } = require('qiao-ping');

// mjs
import { ping } from 'qiao-ping';
```

## api

### ping

ping 域名

- host
  - 类型: string
  - 说明: 域名
- return
  - 类型: object
  - 说明: 结果
  - ```javascript
    {
      inputHost: 'insistime.com',
      host: 'insistime.com',
      alive: true,
      output: '',
      time: 10.636,
      times: [ 10.636 ],
      min: '10.636',
      max: '10.636',
      avg: '10.636',
      stddev: '0.000',
      packetLoss: '0.000',
      numeric_host: '101.42.166.209'
    }
    ```

```javascript
await ping(host);
```
