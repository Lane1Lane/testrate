import { monthAmountProps } from '../interfaces';
import { calcMonthProc } from './calcMonthProc';

export const calcMonthAmount = ({ x, r ,n } : monthAmountProps): number => {
  const monthProc = calcMonthProc(r) + 1;
  console.log((x * Math.pow(monthProc, 12 * n) * (monthProc - 1)) / (Math.pow(monthProc, 12 * n) - 1))
  return (x * Math.pow(monthProc, 12 * n) * (monthProc - 1)) / (Math.pow(monthProc, 12 * n) - 1);
};
