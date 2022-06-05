import { diffDate } from './diffDate';

describe('Calc of date difference in month', () => {
  test('After 1 month', () => {
    const props = {
      aggrDate: 1654041600000,
      calcDate: 1656633600000
    };
    expect(diffDate(props)).toBe(1);
  });
  test('After 6 month', () => {
    const props = {
      aggrDate: 1654041600000,
      calcDate: 1669852800000
    };
    expect(diffDate(props)).toBe(6);
  });
 })