import React, { useState } from "react";

const Keydown = () => {
  const [keyPressed, setKeyPressed] = useState("");

  const handleKeyDown = (event) => {
    setKeyPressed(event.key);
  };

  return (
    <div className="borderbox">
      <div
        tabIndex={0}
        onKeyDown={handleKeyDown}
        style={{ outline: "none", textAlign: "center" }}
      >
        <h3>Key down Example</h3>
        <h2>Press any key</h2>
        <p>Last key pressed: {keyPressed}</p>
      </div>
    </div>
  );
};

export default Keydown;
