import React, { useEffect } from "react";
import "../styles/Contact.scss";
import { constants } from "../constants";

function Contact() {
  useEffect(() => {
    const icons = document.querySelectorAll(".icons");
    icons.forEach((icon) => {
      for (let i = 0; i <= 9; i++) {
        const tx = Math.floor(Math.random() * 10) - 5;
        const ty = Math.floor(Math.random() * 10) - 5;
        icon.style.setProperty(`--tx${i}`, `${tx}px`);
        icon.style.setProperty(`--ty${i}`, `${ty}px`);
      }
    });
  }, []);

  return (
    <div className="Contact">
      {constants.contactArray.map((icon, index) => (
        <span
          key={icon.key}
          className={index % 2 === 0 ? "leftIcons" : "rightIcons"}
        >
          <a href={icon.href}>
            <img className="icons" src={icon.imgPath} alt={icon.imgAlt} />
          </a>
        </span>
      ))}
    </div>
  );
}

export default Contact;
