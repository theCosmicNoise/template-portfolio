import React from "react";
import "./styles/Home.scss";

function Home() {
  const links = [
    { index: 1, href: "about" },
    { index: 2, href: "projects" },
    { index: 3, href: "experience" },
    { index: 4, href: "blog" },
  ];
  return (
    <div className="Home">
      <div className="Name-Section">
        <h1 className="Name">
          shreyash pandey
        </h1>
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
