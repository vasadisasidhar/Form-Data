import React, { useState } from "react";

const Doubleclick = () => {
  const [number, setNumber] = useState(0);

  const increase1 = () => {
    setNumber(number + 1);
  };
  const increase2 = () => {
    setNumber(number + 2);
  };
  const reset = () => {
    setNumber(0);
  };

  return (
    <div className="borderbox">
      <h1>Mouse Double Click Event</h1>
      <h1>{number}</h1>
      <p>Note: Double click on +2 for increase the count</p>
      <section className="buttonSpace">
        <button onClick={increase1}>+1</button>
        <button onDoubleClick={increase2}>+2</button>
        <button onClick={reset}>Reset</button>
      </section>
    </div>
  );
};

export default Doubleclick;
