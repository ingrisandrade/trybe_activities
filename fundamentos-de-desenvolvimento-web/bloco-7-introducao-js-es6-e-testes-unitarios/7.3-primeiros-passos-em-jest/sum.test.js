/* const sum = (a, b) => a + b;

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
}); */

const sum = require('./sum'); // required é utilizado para importar a função do arquivo .js

test('sums two values', () => {
  expect(sum(2, 3)).toBe(5);
});