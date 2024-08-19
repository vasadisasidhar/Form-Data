import React, { useState } from "react";

const Click = () => {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number + 1);
  };

  const decerement = () => {
    if (number > 1) {
      setNumber(number - 1);
    } else {
      alert("Number Will not Decresed After");
    }
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decerement}>Decrement</button>
    </div>
  );
};

export default Click;
