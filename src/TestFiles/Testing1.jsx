import React, { useState } from "react";

const Testing1 = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");

  const number1Change = (event) => {
    setNumber1(Number(event.target.value));
  };

  const number2Change = (event) => {
    setNumber2(Number(event.target.value));
  };

  const sum = number1 + number2;

  return (
    <div>
      <input type="number" value={number1} onChange={number1Change} />
      <input type="number" value={number2} onChange={number2Change} />
      <p>
        {sum > 10 ? (
          <span>{sum} is greater than 10.</span>
        ) : (
          <span>{sum} is less than or equal to 10.</span>
        )}
      </p>
    </div>
  );
};

export default Testing1;
