import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header-body">
      <div className="content-header">
        <div className="navlinks">
          <div className="navlink1">
            <Link className="links-head" to={props.path1}>
              {props.navlink1}
            </Link>
          </div>
          <div className="navlink1">
            <Link className="links-head" to={props.path2}>
              {props.navlink2}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
