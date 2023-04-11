// ava
const test = require('ava');

// q
const { ping } = require('../index.js');

// test
test('ping', async (t) => {
  const res = await ping('insistime.com');

  t.log(res);
  t.truthy(res);
});
