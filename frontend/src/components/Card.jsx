import React, { useState } from "react";
import "./card.css";

const Card = ({
  id,
  avatar,
  first_name,
  last_name,
  email,
  gender,
  domain,
  available,
}) => {
  const availabilityClass = available ? "available" : "not-available";

  return (
    <div id="card">
      <img src={avatar} alt="avatar" />
      <div>
        <h4>
          Name: {first_name} {last_name}
        </h4>
        <h5>Email: {email}</h5>
        <h5>Gender: {gender}</h5>
        <h5>Domain: {domain}</h5>
        <h4 className={availabilityClass}>
          {available ? "Available" : "Not available"}
        </h4>
      </div>
    </div>
  );
};

export default Card;
