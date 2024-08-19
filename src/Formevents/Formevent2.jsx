

import React, { useState } from 'react'

const Formevent2 = () => {

    const [userName, setUserName] = useState("")
    const getUserName = (event) => {
    setUserName(event.target.value)
    }


    const [newUserName, setNewUserName] = useState("")
    const getNewUserName = () => {
    setNewUserName(userName);
    }

    return (
      <section>
            <div>
                <h3>Form Events Listner</h3>
                <h1>Hello {userName}, Welcome to the India</h1>
                <input type="text" onChange={getUserName}  placeholder='Enter Your Name....'></input>
            </div>
                
            <div>
                <h3>Form Events Listner</h3>
                <h1>Hello {newUserName}, Welcome to the India</h1>
                <input type="text" onChange={ getUserName} placeholder='Enter Your Name....'></input>
                <button onClick={getNewUserName}>Submit</button>
            </div>
      </section>
  )
}

export default Formevent2
