import React from "react";
import "./Email.css";

const Email = () => {
  return (
    <div className="email-container">
      <div className="email-link-wrapper">
        <a
          href="mailto:justinpong0416@gmail.com"
          className="email-link font-mono"
        >
          justinpong0416@gmail.com
        </a>
        <div className="divider-line"></div>
      </div>
    </div>
  );
};

export default Email;
