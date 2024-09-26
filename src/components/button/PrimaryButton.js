import React from "react";
import "./PrimaryButton.css";

const PrimaryButton = ({ className, href, text }) => {
  const baseClasses = "group";
  return (
    <button className={`primary-button ${baseClasses} ${className}`}>
      <a href={href} data-component="primary-button">
        <div className="lift-up-button">{text}</div>
      </a>
    </button>
  );
};

export default PrimaryButton;
