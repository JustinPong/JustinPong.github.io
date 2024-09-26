import React from "react";
import "./MobileMenu.css";

import { VscGithubAlt } from "react-icons/vsc";
import { FiLinkedin } from "react-icons/fi";

const MobileMenu = ({ isActive, closeMenu }) => {
  return (
    <div className={`mobile-menu md:hidden ${isActive ? "active" : ""}`}>
      <div className="flex flex-col gap-6">
        <a href="#about" className="font-mono" onClick={closeMenu}>
          <span className="text-primary">01.</span> About
        </a>
        <a href="#experience" className="font-mono" onClick={closeMenu}>
          <span className="text-primary">02.</span> Experience
        </a>
        <a href="#project" className="font-mono" onClick={closeMenu}>
          <span className="text-primary">03.</span> Project
        </a>
        <a href="#contact" className="font-mono" onClick={closeMenu}>
          <span className="text-primary">04.</span> Contact
        </a>
      </div>
      <div className="flex gap-6 mt-10">
        <a
          href="https://github.com/JustinPong"
          target="_blank"
          rel="noopener noreferrer"
        >
          <VscGithubAlt size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/justinpong/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiLinkedin size={22} />
        </a>
      </div>
      <div className="mt-4">
        <a href="mailto:justinpong0416@gmail.com" className="text-sm font-mono">
          justinpong0416@gmail.com
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
