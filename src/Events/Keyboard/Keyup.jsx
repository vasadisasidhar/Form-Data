import React, { useState } from "react";

const Keyup = () => {
  const [keyPressed, setKeyPressed] = useState("");

  const handleKeyUp = (event) => {
    setKeyPressed(event.key);
  };

  return (
    <div className="borderbox">
      <div
        tabIndex={0}
        onKeyUp={handleKeyUp}
        style={{ outline: "none", textAlign: "center" }}
      >
        <h3>Key up Example</h3>
        <h2>Press any key</h2>
        <p>Last key pressed: {keyPressed}</p>
      </div>
    </div>
  );
};

export default Keyup;
