import React, { useState } from "react";
import "./App.css";

interface culcSumProps {
  aggrDate: number;
  calcDate: number;
  x: number;
  r: number;
  n: number;
}

const culcSum = ({ aggrDate, calcDate, x, r, n }: culcSumProps): number => {
  const monthProc = Math.pow(1 + r / 100, 1 / 12) - 1;
  const monthQty = Math.floor(
    (calcDate - aggrDate) / (1000 * 60 * 60 * 24) / 30
  );
  const monthAmount =
    (x * Math.pow(monthProc + 1, 12 * n) * monthProc) /
    (Math.pow(monthProc + 1, 12 * n) - 1);

  let procMonthly = 0;
  let remain = x;
  let procTotal = 0;
  for (let i = 1; i <= monthQty; i++) {
    procMonthly = remain * monthProc;
    remain = remain - (monthAmount - procMonthly);
    procTotal = procTotal + procMonthly;
  }
  return Math.round(procTotal * 100) / 100;
};

export default function App() {
  const [aggrDate, setAggrDate] = useState<number>(0);
  const [aggrSeeDate, setAggrSeeDate] = useState<string>("");
  const [calcDate, setCalcDate] = useState<number>(0);
  const [calcSeeDate, setCalcSeeDate] = useState<string>("");
  const [x, setX] = useState<number>(0);
  const [r, setR] = useState<number>(0);
  const [n, setN] = useState<number>(0);
  let [sum, setSum] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const [showSum, setShowSum] = useState<Boolean>(false);

  const onButtonClick = (): void => {
    if (aggrDate && calcDate && x && r && n) {
      setError("");
      let sumProc = culcSum({ aggrDate, calcDate, x, r, n });
      setSum(sumProc);
      setShowSum(true);
    } else {
      setError(
        `${aggrDate ? "" : "Agreement date, "}${x ? "" : "Investment X, "}${
          r ? "" : "Interest rate R %, "
        }${n ? "" : "Investment duration N, "}${
          calcDate ? "" : "Calculation date, "
        }`
      );
    }
  };

  return (
    <div className="App">
      <div className="App_elem">
        Agreement date &nbsp;
        <input
          type="date"
          value={aggrSeeDate}
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
            setAggrDate(event.target.valueAsNumber);
            setAggrSeeDate(event.target.value);
          }}
        />
      </div>
      <br />
      <div className="App_elem">
        Investment X $ &nbsp;
        <input
          type="number"
          value={x}
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
            setX(event.target.valueAsNumber);
          }}
        />
      </div>
      <br />
      <div className="App_elem">
        Interest rate R % &nbsp;
        <input
          type="number"
          value={r}
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
            setR(event.target.valueAsNumber);
          }}
        />
      </div>
      <br />
      <div className="App_elem">
        Investment duration N years &nbsp;
        <input
          type="number"
          value={n}
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
            setN(event.target.valueAsNumber);
          }}
        />
      </div>
      <br />
      <div className="App_elem">
        Calculation date &nbsp;
        <input
          type="date"
          value={calcSeeDate}
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
            setCalcDate(event.target.valueAsNumber);
            setCalcSeeDate(event.target.value);
          }}
        />
      </div>
      <br />
      <button onClick={onButtonClick}>
        Calculate SUM of interest payments
      </button>
      <br />
      {error ? <div className="red">Not specified: {error}</div> : null}
      {showSum ? <b>{sum}</b> : null}
    </div>
  );
}
