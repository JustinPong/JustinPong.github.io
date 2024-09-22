import React from "react";
import "./PrimaryButton.css";

const PrimaryButton = ({ className, text = "hi" }) => {
  const baseClasses = "group";
  return (
    <button
      data-component="primary-button"
      className={`primary-button ${baseClasses} ${className}`}
    >
      <div className="lift-up-button">{text}</div>
    </button>
  );
};

export default PrimaryButton;
