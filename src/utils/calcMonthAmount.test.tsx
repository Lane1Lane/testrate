import { calcMonthAmount } from '../utils/calcMonthAmount';

describe('Calc month amount', () => {
  test('Amount 100000, rate 10%, 20 years', () => {
    const props = {
      x: 100000,
      r: 10,
      n: 20
    };
    expect(calcMonthAmount(props)).toBeCloseTo(936.6395);
  });
  test('Amount 500000, rate 20%, 10 years', () => {
    const props = {
      x: 500000,
      r: 20,
      n: 10
    };
    expect(calcMonthAmount(props)).toBeCloseTo(9129.1427);
  });
 })