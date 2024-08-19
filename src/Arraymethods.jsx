import React from "react";

let states = [
  {
    vizianagaram: "Andhra Pradesh",
    Hyderabad: "Telangana",
    chennai: "Tamil Nadu",
    mumbai: "Maharashtra",
  },
];

const Arraymethods = () => {
  return (
    <div>
      {states.map((city) => {
        return (
          <div>
            <h2>
              Using Array Methods
              <ul>
                <li>{city.vizianagaram}</li>
                <li>{city.Hyderabad}</li>
                <li>{city.chennai}</li>
                <li>{city.mumbai}</li>
              </ul>
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default Arraymethods;


