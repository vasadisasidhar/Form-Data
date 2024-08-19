import React, { useState } from "react";

const Test2 = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");

  const numadd = () => {
    const num1 = parseInt(a);
    const num2 = parseInt(b);
    if (!isNaN(num1) && !isNaN(num2)) {
      const add = num1 + num2;
      setResult(add);
      alert(`Sum of A & B is: ${add}`);
    } else {
      alert("Please enter valid numbers for A and B.");
    }
  };

  const numsub = () => {
    const num1 = parseInt(a);
    const num2 = parseInt(b);
    if (!isNaN(num1) && !isNaN(num2)) {
      const sub = num1 - num2;
      setResult(sub);
      alert(`Differenece of A & B is: ${sub}`);
    } else {
      alert("Please enter valid numbers for A and B.");
    }
  };

  const nummul = () => {
    const num1 = parseInt(a);
    const num2 = parseInt(b);
    if (!isNaN(num1) && !isNaN(num2)) {
      const mul = num1 * num2;
      setResult(mul);
      alert(`Product of A & B is: ${mul}`);
    } else {
      alert("Please enter valid numbers for A and B.");
    }
  };

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  return (
    <div>
      <label>Enter Value of A:</label>
      <input
        type="text"
        value={a}
        onChange={(e) => handleInputChange(e, setA)}
      />
      <br />
      <label>Enter Value of B:</label>
      <input
        type="text"
        value={b}
        onChange={(e) => handleInputChange(e, setB)}
      />
      <br />
      <button onClick={numadd}>ADD</button>
      <button onClick={numsub}>SUB</button>
      <button onClick={nummul}>MUL</button>
    </div>
  );
};

export default Test2;
