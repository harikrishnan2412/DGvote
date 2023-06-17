import React from "react";
import Complainbox from "../../components/Complainbox/Complainbox.jsx";
import "./Complain.css";

const Complain = () => {
  return (
    <div className="complainbody">
      <div className="complaint-holder">
        <Complainbox
          desc="joel is from kundara"
          location="Kannur"
          title="Poor Roads"
          img="https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <Complainbox
          desc="kmgvkjsnfojknbjosdnbosfjnbopsf"
          location="Kannur"
          title="Poor Roads"
          img="https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <Complainbox
          desc="mvgosdmvosngbsofjnbosfnoadn"
          location="Kannur"
          title="Poor Roads"
          img="https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      </div>
    </div>
  );
};

export default Complain;
