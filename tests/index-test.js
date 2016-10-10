/* eslint-env qunit */

test('work with assert.ok and truthy values', (assert) => {
  const x = 20;

  assert.ok(x);
  assert.ok(1);
  assert.ok('Javascript');
  assert.ok(true);
  assert.ok(() => {});
  assert.ok([]);
  assert.ok({});
});

test('work with assert.equal', (assert) => {
  const x = 10 + 4;

  assert.equal(x, 14);
});


// function add(num1, num2) {
//   return num1 + num2;
// }
import add from '../app/add';

test('students know how to make functions', (assert) => {
  assert.equal(add(1, 3), 4);
  assert.equal(add(10, 5), 15);
  assert.equal(add(100, 25), 125);
});
