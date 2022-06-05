import { culcSumProps } from "../interfaces";
import { diffDate } from './diffDate';

export const errorHandler = ({ aggrDate, calcDate, x, r, n }: culcSumProps): string => {
  if (aggrDate && calcDate && x && r && n && (aggrDate <= calcDate)) {
    return '' 
  } else { 
    return `Not specified: ${aggrDate ? "" : "Agreement date, "}${x ? "" : "Investment X, "}${r ? "" : "Interest rate R %, "}
    ${n ? "" : "Investment duration N, "}${calcDate ? "" : "Calculation date, "}${(aggrDate <= calcDate) ? "" : "Calculation date must be >= Agreement date"}`
  };
};