import React, { useState } from "react";
import MenuItem from "./MenuItem";
import MobileMenu from "./MobileMenu";
import "./NavBar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { id: 1, name: "About", link: "#about" },
    { id: 2, name: "Experience", link: "#experience" },
    { id: 3, name: "Project", link: "#project" },
    { id: 4, name: "Contact", link: "#contact" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className={`hidden md:flex gap-6 ${menuOpen ? "block" : "hidden"}`}>
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            index={item.id}
            name={item.name}
            link={item.link}
          />
        ))}
      </nav>

      <div
        className={`hamburger-menu md:hidden ${menuOpen ? "change" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <MobileMenu isActive={menuOpen} />
    </div>
  );
};

export default NavBar;
