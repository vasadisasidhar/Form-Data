import React, { useState } from "react";

const Mouseover = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseOut = () => {
    setHovered(false);
  };

  return (
    <div className="borderbox">
      <h2>Mouse Over and Out Example</h2>
      <div
        className={hovered ? "box hovered" : "box"}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {hovered ? <h3>Mouse Over!</h3> : <h3>Click me!</h3>}
      </div>
    </div>
  );
};

export default Mouseover;
