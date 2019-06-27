import React from "react";
import "./NavBar.css"
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    toggle = () => {
        let x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
  render() {
 
    return (
      <div className="topnav" id="myTopnav">
        <Link href="#home" className="active">
          Home
        </Link>
        <Link to="/profile">Profile</Link>
        <Link to="/signout">Sign out</Link>
        <Link to="#about">About</Link>
        <a href="javascript:void(0);" className="icon" onClick={() => this.toggle()}>
          <i className="fa fa-bars" />
        </a>
      </div>
    );
  }
}

export default NavBar;
