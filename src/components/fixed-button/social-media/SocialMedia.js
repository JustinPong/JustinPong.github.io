import React from "react";
import "./SocialMedia.css";
import { VscGithubAlt } from "react-icons/vsc";
import { FiLinkedin } from "react-icons/fi";

const SocialMedia = () => {
  const contacts = [
    {
      link: "https://github.com/JustinPong",
      icon: <VscGithubAlt className="icon" size={20} />,
    },
    {
      link: "https://www.linkedin.com/in/justinpong/",
      icon: <FiLinkedin className="icon" size={20} />,
    },
  ];

  return (
    <div className="contact-container">
      <ul className="contact-wrapper">
        {contacts.map((contact, index) => (
          <li key={index} className="contact-item">
            <a href={contact.link} target="_blank" rel="noopener noreferrer">
              {contact.icon}
            </a>
          </li>
        ))}
        <div className="divider-line"></div>
      </ul>
    </div>
  );
};

export default SocialMedia;
