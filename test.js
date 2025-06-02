// converter.test.js

const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app');

test("Converts euros to dollars", () => {
  expect(fromEuroToDollar(1)).toBeCloseTo(1.07);
});

test("Converts dollars to yen", () => {
  expect(fromDollarToYen(1)).toBeCloseTo(146.26); // 1 / 1.07 * 156.5
});

test("Converts yen to pounds", () => {
  expect(fromYenToPound(100)).toBeCloseTo(0.5558); // 100 / 156.5 * 0.87
});