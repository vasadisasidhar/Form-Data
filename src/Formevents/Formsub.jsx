import React,{useState} from "react";

const Formsub = () => {

    const [name, setName] = useState("")
    const [phone,setPhone] = useState("")
    const [email,setEmail] =useState("")


    const getName = (n) => {
        setName(n.target.value)
    }
    const getPhone = (p) => {
      setPhone(p.target.value);
    }
    const getEmail = (e) => {
      setEmail(e.target.value);
      
    }


    const submitHandler = () => {
        if (name && phone && email)
        {
            const message = `Name: ${name}\n Phone: ${phone}\n email-id: ${email}`
            alert(message)
             setName("");
             setPhone("");
             setEmail("");
        }
        else {
            alert("Please Enter all the input Fields")
        }
    }

    const reset = () => {
        setName("");
        setPhone("");
        setEmail("");
    }

  return (
      <div>
          
      <div>
        <h1>Welcome to the React Class...</h1>
          </div>
          <lable>Name: <input type="text" placeholder="Enter Your Name.." value={name} onChange={getName}></input>
          </lable>
          <lable>Phone: <input type="text" placeholder="Enter Your Number.." value={phone} onChange={getPhone}></input>
          </lable>
          <lable>Email-id: <input type="text" placeholder="Enter Your Email-id.." value={email} onChange={getEmail}></input>
          </lable>

        <div className="buttonSpace">
            <div className="container text-center">
                <button type="button" class="btn btn-primary" onClick={submitHandler}>SUBMIT</button>
                <button type="button" class="btn btn-primary" onClick={reset}>RESET</button>  
            </div>
        </div>
    </div>
  );
};

export default Formsub;
