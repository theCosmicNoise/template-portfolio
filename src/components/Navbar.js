import React from "react";
import "../styles/Navbar.scss";
import { constants } from "../constants";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Logo">
        <h1 className="Initials">
          <a href="/">
            <i>{constants.name.firstName[0]}</i>
            {constants.name.lastName[0]}
          </a>
        </h1>
      </div>
      <div className="Link-Section">
        <div className="Link-Container">
          {constants.links.map((link) => (
            <span key={link.index}>
              <a href={`/${link.href}`}>{link.href}</a>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
