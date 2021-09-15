import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [disable, setDisable] = useState(true);
  const [bgColor, setBgColor] = useState("red");

  function handleDisable() {
    if (counter <= 1) return true;
  }

  return (
    <div className="counterContainer" style={{ backgroundColor: bgColor }}>
      <h1 className="title">This is a counter app</h1>
      <div className="counter-body">
        <button
          id="increment-btn"
          onClick={() => {
            setCounter(counter + 1);
            setDisable(false);
          }}
        >
          +
        </button>
        <div id="counter-value">{counter}</div>
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
      </div>
      <button
        id="reset-btn"
        onClick={() => {
          setCounter(0);
          setDisable(true);
        }}
      >
        Reset
      </button>
      <h3>Change color to:</h3>
      <div className="color-changer">
        <button id="red" onClick={() => setBgColor("red")}>
          Red
        </button>
        <button id="aqua" onClick={() => setBgColor("aqua")}>
          Aqua
        </button>
        <button id="orange" onClick={() => setBgColor("orange")}>
          Orange
        </button>
      </div>
    </div>
  );
}
