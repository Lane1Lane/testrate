import { calcMonthProc } from '../utils/calcMonthProc';

describe('Calc interest rate R pro month', () => {
  test('Rate 10%', () => {
    const r = 10;
    expect(calcMonthProc(r)).toBeCloseTo(0.0079);
  });
  test('Rate 50%', () => {
    const r = 50;
    expect(calcMonthProc(r)).toBeCloseTo(0.0343);
  });
  test('0', () => {
    const r = 0;
    expect(calcMonthProc(r)).toBe(0);
  });
 })