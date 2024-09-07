import React from "react";
import MenuItem from "./MenuItem";

const NavBar = () => {
  const menuItems = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 2,
      name: "About",
      url: "/about",
    },
    {
      id: 3,
      name: "Services",
      url: "/services",
    },
    {
      id: 4,
      name: "Contact",
      url: "/contact",
    },
  ];

  return (
    <nav className="flex">
      {menuItems.map((item) => (
        <MenuItem key={item.id} name={item.name} url={item.url} />
      ))}
    </nav>
  );
};

export default NavBar;
