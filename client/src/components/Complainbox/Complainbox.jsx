import React from "react";
import "./Complainbox.css";
import { useState } from "react";
function Complainbox(props) {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal);
    };
  return (
    <>
     {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-box">
            <div className="modal-content"></div>
                {props.desc}
            </div>
            </div>
            )}



    <div onClick={toggleModal} className="complaint-card">
      <div className="img-complain">
        <img src={props.img} alt="" loading="lazy" />
        <h2>{props.title}</h2>
        <p>{props.location}</p>
      </div>
    </div>
    </>

  );
}

export default Complainbox;
