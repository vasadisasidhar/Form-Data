import React, { useState } from "react";

const Mouseenter = () => {
  const [hovered, setHovered] = useState(false);

  const mouseEnter = () => {
    setHovered(true);
  };

  const mouseLeave = () => {
    setHovered(false);
  };

    return (
      <div className="borderbox">
        <div
          className="custom-box"
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >
          <h1>Mouse Enter Event</h1>
          {hovered ? "Mouse is inside" : "Mouse is outside"}
        </div>
      </div>
    );
};

export default Mouseenter;
