import React from "react";
import "./MobileMenu.css";

const MobileMenu = ({ isActive, closeMenu }) => {
  return (
    <div className={`mobile-menu md:hidden ${isActive ? "active" : ""}`}>
      <div>
        <a href="#about" className="font-mono" onClick={closeMenu}>
          <span className="text-primary">01.</span> About
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
