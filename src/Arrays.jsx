import React from "react";

let sampleArray = ["Vasadi", "Sasidhar", 1992, { city: "Vizianagaram" }];

const Arrays = () => {
  return (
    <div>
      <h2>
        Using Arrays
        <ul>
          <li>Suname:{sampleArray[0]}</li>
          <li>Name:{sampleArray[1]}</li>
          <li>DOB:{sampleArray[2]}</li>
          <li>POB:{sampleArray[3].city}</li>
        </ul>
      </h2>
    </div>
  );
};

export default Arrays;
