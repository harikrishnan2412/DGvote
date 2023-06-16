import React from "react";
import "./Landing.css"

const Landing = () => {
  return (
    <div className="body">
      <div className="nav">
        <div className="nav-links">
          <a href="#">Features</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <div className="content">
        <div className="title">
          <h3>VoteVerse</h3>
        </div>
        <div className="sub-title">
          <h1>Empowering Decentralized Democracy</h1>
        </div>
        <div className="description">
          <p>
            Revolutionize democracy with VoteVerse—an innovative centralized
            voting app. <br /> Secure, transparent, and user-friendly, it enables
            efficient elections and public opinions. Shape the world with your
            voice. <br />
            <b>Join VoteVerse today.</b>
          </p>
        </div>
        <button>
          <img src="" alt="" />
          <h3>Sign In</h3>
        </button>
      </div>
    </div>
  );
};

export default Landing;
