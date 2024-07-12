import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contact from "./Contact";
import "../styles/Layout.scss";

function Layout({ children }) {
  return (
    <>
      <div className="content-container">
        <div className="content-layout">
          <div className="content-body">
            <div className="nav-main-content">
              <Navbar />
              <main>{children}</main>
            </div>
            <div className="contact-content">
              <Contact />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
