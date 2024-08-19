import React, { useState } from "react";

const Employeedataform = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const empDetails = { name, role, email, phone };

  const empHandler = (e) => {
    e.preventDefault();
    console.log(empDetails);
  };

  return (
    <div>
      <div className="empForm">
        <div className="section">
          <form onSubmit={empHandler}>
            <lable>Employee Name:</lable>
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
            ></input>
            <lable>Role</lable>
            <input
              type="text"
              name="role"
              onChange={(e) => setRole(e.target.value)}
            ></input>
            <lable>Email</lable>
            <input
              type="email"
              name="email"
              onChane={(e) => setEmail(e.target.value)}
            ></input>
            <lable>Phone Number</lable>
            <input
              type="tel"
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
            ></input>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Employeedataform;
