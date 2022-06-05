import React, { useState, useEffect } from "react";
import { calcSum } from '../utils/calcSum';
import { errorHandler } from '../utils/errorHandler';
import { culcSumProps } from '../interfaces';

export const InputForm = () => {
  const [aggrDate, setAggrDate] = useState<number>(0);
  const [aggrSeeDate, setAggrSeeDate] = useState<string>("");
  const [calcDate, setCalcDate] = useState<number>(0);
  const [calcSeeDate, setCalcSeeDate] = useState<string>("");
  const [x, setX] = useState<number>(0);
  const [r, setR] = useState<number>(0);
  const [n, setN] = useState<number>(0);
  const [sum, setSum] = useState<number | null>(null);
  const [error, setError] = useState<string>("");

  const onButtonClick = (): void => {
    let culcProps: culcSumProps = { aggrDate, calcDate, x, r, n };
    setError(errorHandler(culcProps));
    setSum(calcSum(culcProps));
  };

  useEffect(() => {

    }, [error]);
    
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
      {error ? <div className="red">{error}</div> : <b>{sum}</b>}
    </div>
  )
}