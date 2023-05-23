import React from "react";
import './Nav.css'
import { NavLink } from "react-router-dom";

function Nav () {


  
  return (
    <div className="nav">
      <h1 className="name">Aboubacar</h1>
      <ul className="nav-bar">
        <li>
          <NavLink to="/" activeClassName="active">About me</NavLink>
        </li>
        <li>
          <NavLink to="/projects" activeClassName="active">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/Resume" activeClassName="active">Resume</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
