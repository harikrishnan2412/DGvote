import React from "react";
import "./Complainbox.css";
function Complainbox(props) {
  return (
    <div className="complaint-card">
      <div className="img-complain">
        <img src={props.img} alt="" loading="lazy" />
        <h2>{props.title}</h2>
        <p>{props.location}</p>
      </div>
    </div>
  );
}

export default Complainbox;
