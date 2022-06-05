import { diffDateProps } from '../interfaces';

export const diffDate = ({ aggrDate, calcDate} : diffDateProps): number => {
  return Math.floor(
    (calcDate - aggrDate) / (1000 * 60 * 60 * 24 * 30) // finding difference between Agreement date and Calculation date in milliseconds and converting to difference in months
  );
}