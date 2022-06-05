import { errorHandler } from './errorHandler';

describe('Catch errors', () => {
  test('After 1 month, amount 100000, rate 10%, 20 years', () => {
    const props = {
      aggrDate: 1654041600000,
      calcDate: 1656633600000,
      x: 100000,
      r: 10,
      n: 20
    };
    expect(errorHandler(props)).toBe('');
  });
  test('Test with empty props', () => {
    const props = {
      aggrDate: 0,
      calcDate: 0,
      x: 0,
      r: 0,
      n: 0
    };
    expect(errorHandler(props)).toMatch(/Not specified:/);
  });
 })