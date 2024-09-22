import React from "react";
import "./PrimaryTitle.css";

const PrimaryTitle = ({ index, title }) => {
  return (
    <div className="primary-title">
      <div className="number">{index}.</div>
      <div className="heading">{title}</div>
      <div className="title-divider-line"></div>
    </div>
  );
};

export default PrimaryTitle;
