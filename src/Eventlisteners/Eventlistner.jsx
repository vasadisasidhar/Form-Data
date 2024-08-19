import React, { useState } from "react";

const Eventlistner = () => {
    const [inputValue, setInputValue] = useState("");

    const handleClick = () => {
        alert("Button clicked!...");
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

  

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <br></br>
      <br></br>
      <h3>Hello,{ inputValue}</h3>
      <input
        type="text"value={inputValue}onChange={handleChange}placeholder="Enter something...."></input>

      
    </div>
  );
};

export default Eventlistner;
