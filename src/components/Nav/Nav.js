import React from "react";
import './Nav.css'
import { NavLink } from "react-router-dom";

function Nav () {


  
  return (
    <div className="nav">
      <h1 className="name">Aboubacar</h1>
      <ul className="nav-bar">
        <li>
          <NavLink to="/react-porofolio/" activeClassName="active">About me</NavLink>
        </li>
        <li>
          <NavLink to="/react-porofolio/projects" activeClassName="active">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/react-porofolio/contact" activeClassName="active">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/react-porofolio/Resume" activeClassName="active">Resume</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
