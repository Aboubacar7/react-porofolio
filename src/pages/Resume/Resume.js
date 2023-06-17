import React from "react";
import { Link } from "react-router-dom";
import "./Resume.css";

function Resume() {
  return (
    <div className="content">
      <h1>Resume</h1>
      <br></br>
      <p>
        Download my
        <Link to="https://docs.google.com/document/d/1VeFtus45do1Tnr1qrAskTr9WDinsgKqCWHKSi-qylwQ/edit">
          resume
        </Link>
      </p>
      <br></br>
      <div>
        <h2>Front-end Proficiencies</h2>
        <br></br>
        <ul className="list-1">
          <li> HTML</li>
          <li> CSS</li>
          <li> JavaScript</li>
          <li> jQuery</li>
          <li> responsive design React</li>
          <li> React</li>
          <li> Bootstrap</li>
        </ul>
      </div>
      <div>
        <br></br>
        <h2>Front-end Proficiencies</h2>
        <br></br>
        <ul className="list-2">
          <li> APIs</li>
          <li> Node</li>
          <li> Express</li>
          <li> MySQL, Sequelize</li>
          <li> MongoDB, Mongoose</li>
          <li> REST</li>
          <li> GraphoL</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
