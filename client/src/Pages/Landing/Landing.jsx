import React from "react";
import "./Landing.css";
import {
  useAddress,
  useMetamask,
  useLogin,
  useLogout,
  useUser,
} from "@thirdweb-dev/react";

const Landing = () => {
  const address = useAddress();
  const connect = useMetamask();
  const { login } = useLogin();
  const { logout } = useLogout();
  const { user, isLoggedIn } = useUser();
  return (
    <div className="body">
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
            voting app. <br /> Secure, transparent, and user-friendly, it
            enables efficient elections and public opinions. Shape the world
            with your voice. <br />
            <b>Join VoteVerse today.</b>
          </p>
        </div>
        {isLoggedIn ? (
          <button onClick={() => logout()}>Logout</button>
        ) : address ? (
          <button onClick={() => login()}>Login</button>
        ) : (
          <button onClick={() => connect()}>Connect</button>
        )}
      </div>
      <div className="sidedesign"></div>
    </div>
  );
};

export default Landing;
