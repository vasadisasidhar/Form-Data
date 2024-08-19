

import React, { useState } from 'react'

const initialDetails = {
      name: "",
      phone: "",
      email: "",
    };

  const Formsubmit = () => {
  const [details, setDetails] = useState(initialDetails);

    const handleChange = (e) => {
        const { name, value } = e.target
        setDetails((prev) => ({
            ...prev,[name]:value 
        }))
    }

    const handleSubmit = () => {
        const { name, phone, email } = details;
        if (name && phone && email){
            const message = `Name: ${name}\n Phone: ${phone}\n email-id: ${email}`;
            alert(message);
        }
        else {
            alert("Please Enter All Fields")
        }
        
    }

    const reset = () => {
    setDetails(initialDetails);
  };

  return (
    <from>
      <lable>Name:</lable> <input type="text" name='name'value={details.name} onChange={handleChange} />
      <lable>Phone:</lable> <input type="text" name='phone'value={details.phone} onChange={handleChange} />
      <lable>Email-id:</lable> <input type="text" name='email'value={details.email} onChange={handleChange} />
      <div className="buttonSpace">
         <div className="container text-center">
              <button type="button" class="btn btn-primary" onClick={handleSubmit}>SUBMIT</button>
              <button type="button" class="btn btn-primary" onClick={reset}>RESET</button>  
         </div>
       </div>
    </from>
  );
}

    export default Formsubmit;
