import React from "react";

const MenuItem = ({ name, link, index }) => {
  return (
    <a href={`${link}`} className=" font-mono group">
      <span className="text-xs mr-1 text-primary">0{index}.</span>
      <span className="text-sm group-hover:text-primary duration-300">
        {name}
      </span>
    </a>
  );
};

export default MenuItem;
