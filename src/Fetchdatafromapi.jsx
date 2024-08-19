import React, { useState, useEffect } from "react";

const userData = "https://jsonplaceholder.typicode.com/posts";

const Fetchdatafromapi = () => {
  const [user, setUser] = useState([]);

  const userHandler = async () => {
    const response = await fetch(userData);
    const newData = await response.json();
    setUser(newData);
  };

  useEffect(() => {
    console.log(userHandler());
  }, []);

  return (
    <div>
      {user.map((item) => {
        return <div className="userSection">{item.title}</div>;
      })}
    </div>
  );
};

export default Fetchdatafromapi;
