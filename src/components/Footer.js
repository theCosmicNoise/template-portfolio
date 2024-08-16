import React from "react";
import "../styles/Footer.scss";
import { ReactComponent as Heart } from "../assets/heart.svg";
import { constants } from "../constants";

function Footer() {
  // const currentYear = new Date().getFullYear();

  return (
    <div className="Footer">
      {/* <code className="copyright-text">
        © {constants.name.firstName} {constants.name.lastName}, {currentYear}
      </code> */}
      <p><a href={constants.my_link}>
        Made with{" "}
        <span>
          <Heart alt="Heart Icon" />
        </span>{" "}
        by Anjali Roy
      </a></p>
    </div>
  );
}

export default Footer;
