import { calcSum } from '../utils/calcSum';
import { culcSumProps } from '../interfaces';

describe('Calc SUM of proc method', () => {
  test('After 1 month, amount 100000, rate 10%, 20 years', () => {
    const props = {
      aggrDate: 1654041600000,
      calcDate: 1656633600000,
      x: 100000,
      r: 10,
      n: 20
    };
    expect(calcSum(props)).toBeCloseTo(797.41);
  });
  test('After 6 month, amount 100000, rate 10%, 20 years', () => {
    const props = {
      aggrDate: 1654041600000,
      calcDate: 1669852800000,
      x: 100000,
      r: 10,
      n: 20
    };
    expect(calcSum(props)).toBeCloseTo(4768,0);
  });
  test('Test with empty props', () => {
    const props = {
      aggrDate: 0,
      calcDate: 0,
      x: 0,
      r: 0,
      n: 0
    };
    expect(calcSum(props)).toBe(0);
  });
 })