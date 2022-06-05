export const calcMonthProc = (r: number): number => {
  return Math.pow(1 + r / 100, 1 / 12)-1;
};