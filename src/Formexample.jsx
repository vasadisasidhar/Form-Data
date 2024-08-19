import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Formexample = () => {
  const [userName, setUserName] = useState("");
  const [newUserDetails, setNewUserDetails] = useState();
  const notify = () => toast("DATA SUBMITED");

  const getUserName = (event) => {
    setUserName(event.target.value);
  };

  const userDetails = (a) => {
    a.preventDefault();
    setNewUserDetails(userName);
    notify();
  };

  return (
    <section className="formsection">
      <h1>Hello, {newUserDetails}</h1>
      <ToastContainer />
      <div className="inputssection">
        <form onSubmit={userDetails}>
          <input
            type="text"
            placeholder="Enter Your Name"
            onChange={getUserName}
          ></input>
          <br></br>
          <button className="buttonsection" type="submit">
            Submit{" "}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Formexample;
