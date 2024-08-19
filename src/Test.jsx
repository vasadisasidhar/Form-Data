import React, { useState } from "react";

const Test = () => {
  const [result, setResult] = useState();

  const numadd = () => {
    const a = parseInt(prompt("ENTER VALUE OF A"));
    const b = parseInt(prompt("ENTER VALUE OF B"));
    const add = a + b;
    setResult(add);
    alert(`Adding of two numbers is: ${add}`);
  };

  const numsub = () => {
    const a = parseInt(prompt("ENTER VALUE OF A"));
    const b = parseInt(prompt("ENTER VALUE OF B"));
    const sub = a - b;
    setResult(sub);
    alert(`Adding of two numbers is: ${sub}`);
    console.log(sub);
  };

  return (
    <div>
      <button onClick={numadd}>ADD</button>
      <button onClick={numsub}>SUB</button>
    </div>
  );
};

export default Test;
