import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Vs = () => {

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const notify = () => toast("Data is Reseted...");


  const getName = (n) => {
    setName(n.target.value)
  }
  const getPhone = (p) => {
    setPhone(p.target.value)
  }
  const getMail = (e) => {
    setEmail(e.target.value)
  }


  const handleSubmit = () => {
    if (name && phone && email)
    {
    const message = `Name: ${name}\n Phone: ${phone}\n email-id: ${email}`
    alert(message)
      setName(""); setPhone(""); setEmail("")
      setShowAlert(false);
    }
    else {
      setShowAlert(true);
      }
    
  }

  const reset = () => {
    setName(""); setPhone(""); setEmail("");
    notify();
  }

  return (
    <div>

      <lable>Name:<input type="text" placeholder="Enter your name.." value={name} onChange={getName}></input>
      </lable>

      <lable>Phone:<input type="text" placeholder="Enter your number.." value={phone} onChange={getPhone}></input>
      </lable>

      <lable>Mail-id:<input type="text" placeholder="Enter your emailid.."value={email} onChange={getMail}></input>
      </lable>


      <div className="buttonSpace">
         <div className="container text-center">
              <button type="button" class="btn btn-primary" onClick={handleSubmit}>SUBMIT</button>
              <button type="button" class="btn btn-primary" onClick={reset}>RESET</button>  
              <ToastContainer />
        </div>
      </div>
      
{showAlert && (
        <div className="alert alert-info" role="alert">
          Please enter data in all fields.
        </div>
      )}

    </div>
  );
};

export default Vs;
