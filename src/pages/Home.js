import React from "react";
import "../styles/Home.scss";
import { constants } from "../constants";

function Home() {

  const splitName = (name) => {
    return name.split("").map((letter, index) => (
      <span key={index} className="Letter">
        {letter}
      </span>
    ));
  };
  return (
    <div className="Home">
      <div className="Name-Section">
        <a href="/">
          <h1 className="Name">
            <div className="Word" id="first-name">
              {splitName(constants.name.firstName)}
            </div>
            <div className="Word" id="last-name">
              {splitName(constants.name.lastName)}
            </div>
          </h1>
        </a>
      </div>
      <div className="Page-Section">
        <div className="Link-Container">
          {constants.links.map((link) => (
            <span key={link.href} style={{ "--index": link.index }}>
              <a href={link.href}>{link.href}</a>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
