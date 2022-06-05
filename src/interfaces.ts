import React from "react";

export interface diffDateProps {
  aggrDate: number;
  calcDate: number;
};

export interface monthAmountProps {
  x: number;
  r: number;
  n: number;
};

export interface culcSumProps extends diffDateProps, monthAmountProps {

};