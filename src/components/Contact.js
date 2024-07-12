import React from "react";
import "../styles/Contact.scss";
import { constants } from "../constants";

function Contact() {
  return (
    <div className="Contact">
      {constants.contactArray.map((icon, index) => (
        <span key={icon.key} className={index % 2 === 0 ? 'leftIcons' : 'rightIcons'}>
          <a href={icon.href}>
            <img className="icons" src={icon.imgPath} alt={icon.imgAlt} />
          </a>
        </span>
      ))}
    </div>
  );
}

export default Contact;
