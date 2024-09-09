import React from "react";
import MenuItem from "./MenuItem";

const NavBar = () => {
  const menuItems = [
    {
      id: 1,
      name: "Home",
      link: "#home",
    },
    {
      id: 2,
      name: "About",
      link: "#about",
    },
    {
      id: 3,
      name: "Services",
      link: "#services",
    },
    {
      id: 4,
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <nav className="flex gap-6">
      {menuItems.map((item) => (
        <MenuItem index={item.id} name={item.name} link={item.link} />
      ))}
    </nav>
  );
};

export default NavBar;
