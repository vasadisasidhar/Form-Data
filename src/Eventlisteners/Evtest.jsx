import React, { useState } from "react";

const Evtest = () => {
  // State to hold input field value
  const [inputValue, setInputValue] = useState("");

  // Event handler for button click
  const handleClick = () => {
    alert("Button clicked!");
  };

  // Event handler for input change
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted with value: ${inputValue}`);
  };

  return (
    <div>
      <h2>Event Listeners in React Example</h2>

      {/* Button with click event */}
      <button onClick={handleClick}>Click me</button>

      <br />
      <br />

      {/* Input field with change event */}
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
      />

      <br />
      <br />

      {/* Form with submit event */}
      <form onSubmit={handleSubmit}>
        <label>
          Enter something:
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Evtest;
