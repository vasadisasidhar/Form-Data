import React from "react";
import { userData } from "./data";

const Nestedarray = () => {
  return (
    <div>
      <h3>
        Using Nested Array Methods
        {userData.map((data) => {
          return (
            <div key={data.id} className="nestedarray">
              <div>Id: {data.id}</div>
              <div>Name: {data.name}</div>
              <div>Address: {data.address.street}</div>
              <div>Zipcode: {data.address.zipcode}</div>
              <div>Latitude: {data.address.geo.lat}</div>
              <div>Longitude: {data.address.geo.lng}</div>
              <div>Phone: {data.phone}</div>
              <div>Company : {data.company.name}</div>
            </div>
          );
        })}
      </h3>
    </div>
  );
};

export default Nestedarray;
