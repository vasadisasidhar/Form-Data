import React, { useState } from "react";

const Formtest = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const fullName = firstName + " " + lastName;

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }
  return (
    <div>
      <div className="formSection">
        <h2>Let's check you in</h2>

        <label>
          First Name:{" "}
          <input value={firstName} onChange={handleFirstNameChange} />
        </label>

        <label>
          Last Name:{"  "}
          <input value={lastName} onChange={handleLastNameChange} />
        </label>

        <p>Your ticket will be issued to:{fullName}</p>
      </div>
    </div>
  );
};

export default Formtest;
