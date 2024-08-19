import React, { useState } from "react";

const Clickeventt = () => {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    if (number > 0) {
      setNumber(number - 1);
    } else {
      alert("Number will not decrease when it equals to 0");
    }
  };

  const reset = () => {
    setNumber(0);
  };

  return (
    <div className="borderbox">
      <h1>Mouse Click Events</h1>
      <h1>{number}</h1>
      <section className="buttonSpace">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </div>
  );
};

export default Clickeventt;
