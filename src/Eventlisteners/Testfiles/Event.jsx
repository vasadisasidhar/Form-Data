

import React,{useState} from 'react'

const Event = () => {

    const [inputValue, setInputValue] = useState("");


    const handleClick=()=>{
        alert("Hello, Sasidhar You Clicked Me")
    }


    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = () => {
        alert(`Form submitted with value: ${inputValue}`);
        
    }
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <br></br>
      <br></br>

      <input
        type="text"value={inputValue}onChange={handleChange}placeholder="Enter something"/>

      <section className="buttonSpace">
        <button onClick={handleSubmit}>submit</button>
        <button >Reset</button>
      </section>
    </div>
  );
}

export default Event
