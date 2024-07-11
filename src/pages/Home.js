import React from "react";
import "./styles/Home.scss";

function Home() {
  const links = [
    { index: 1, href: "about" },
    { index: 2, href: "projects" },
    { index: 3, href: "experience" },
    { index: 4, href: "blog" },
  ];

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
              {splitName("anjali")}
            </div>
            <div className="Word" id="last-name">
              {splitName("roy")}
            </div>
          </h1>
        </a>
      </div>
      <div className="Page-Section">
        <div className="Link-Container">
          {links.map((link) => (
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
