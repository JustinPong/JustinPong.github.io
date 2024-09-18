import React from "react";
import "./MobileMenu.css";

const MobileMenu = ({ isActive }) => {
  return <div className={`mobile-menu ${isActive ? "active" : ""}`}>Menu</div>;
};

export default MobileMenu;
