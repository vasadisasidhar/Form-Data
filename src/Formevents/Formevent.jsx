import React, { useState } from "react";

const Formevent = () => {

  const [userName, setUserName] = useState("");
  
  const getUserName = (event) => {
    setUserName(event.target.value);
  };


  const [newUserName, setNewUserName] = useState("");
  
    const getNewUserName = () => {
    setNewUserName(userName);
  };

  return (
    <section>
      <div>
        <h3>Form Event Listners</h3>
        <h2>Hello, {userName} welcome to React Class</h2>
        <input type="text"onChange={getUserName}placeholder="Enter your name...."></input>
      </div>

      <div>
        <h3>Form Event Listners</h3>
        <h2>Hello, {newUserName} welcome to React Class</h2>
        <input type="text"onChange={getUserName}placeholder="Enter your name...."></input>
        <button onClick={getNewUserName}>Submit</button>
      </div>
    </section>
  );
};

export default Formevent;
