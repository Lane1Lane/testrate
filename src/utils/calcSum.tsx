import { culcSumProps } from '../interfaces';
import { diffDate } from './diffDate';
import { calcMonthAmount } from './calcMonthAmount';
import { calcMonthProc } from './calcMonthProc';
import { errorHandler } from '../utils/errorHandler';

export const calcSum = (props: culcSumProps): number => {
  let { aggrDate, calcDate, x, r, n } = props;
  if (!errorHandler(props)) {
    const monthQty = diffDate({ aggrDate, calcDate });

    const monthAmount = calcMonthAmount({ x, r ,n });
    const monthProc = calcMonthProc(r);
    let procMonthly = 0;
    let procTotal = 0;
    for (let i = 1; i <= monthQty; i++) {
      procMonthly = x * monthProc;
      x = x - (monthAmount - procMonthly) < 0 ? 0 : x - (monthAmount - procMonthly);
      procTotal = procTotal + procMonthly;
    }
    return Math.round(procTotal * 100) / 100;
  } else return 0;
};