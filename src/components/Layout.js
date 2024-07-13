import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contact from "./Contact";
import "../styles/Layout.scss";
import { motion } from "framer-motion";

function Layout({ children }) {
  const animations = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
  };

  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.7 }}
      className="motion-wrapper"
    >
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
    </motion.div>
  );
}

export default Layout;
