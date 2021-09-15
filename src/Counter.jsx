import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [disable, setDisable] = useState(false);

  function handleDisable() {
    if (counter <= 1) return true;
  }

  return (
    <div>
      <h1>This is a counter app</h1>
      <div id="counter-value">{counter}</div>
      <button
        id="increment-btn"
        onClick={() => {
          setCounter(counter + 1);
          setDisable(false);
        }}
      >
        +
      </button>
      <button
        disabled={disable}
        id="decrement-btn"
        onClick={() => {
          counter > 0 && setCounter(counter - 1);
          setDisable(handleDisable);
        }}
      >
        -
      </button>
      <button
        id="reset-btn"
        onClick={() => {
          setCounter(0);
          setDisable(true);
        }}
      >
        Reset
      </button>
    </div>
  );
}
