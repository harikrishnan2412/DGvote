import React from "react";


function Complainbox(props)
{
    return (
        <div className="main-body">
            <div className="img-complain">
                <img src={props.img} alt="" />
            </div>
            <div className="complain-content">
                <div className="title-complain"><h2>{props.title}</h2></div>
                <div className="location-complain"><p>{props.location}</p></div>
                <div className="desc-complain"> <article>{props.desc}</article></div>
            </div>
        </div>
    )
}

export default Complainbox