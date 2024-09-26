import React from "react";
import "./ProjectCard.css";
import { VscGithubAlt, VscLinkExternal } from "react-icons/vsc";

const ProjectCard = ({ project }) => (
  <div className="card relative">
    {/* Make the entire card link to the demo */}
    <a
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
      className="block lift-up rounded-lg overflow-hidden bg-light-dark px-5 pt-5 pb-10 transition-all duration-300"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-contain rounded-md mb-4"
      />
      <div className="font-bold text-lg mb-2 text-white">{project.title}</div>
      <p className="font-serif text-gray-400 text-sm mb-4 text-gray">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.skillSets.map((skill, index) => (
          <span
            key={index}
            className="inline-block bg-primary/10 text-[#00ff9d] px-2 py-1 rounded-full text-xs font-semibold"
          >
            #{skill}
          </span>
        ))}
      </div>

      {/* Icons for GitHub and Demo Arrow */}
      <div className="absolute bottom-5 right-5 flex space-x-4">
        {/* GitHub Icon */}
        <a
          title="Source Code on GitHub"
          href={project.sourceCode}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-primary duration-200"
          aria-label="Source Code on GitHub"
          onClick={(e) => e.stopPropagation()} // Prevents the click from triggering the card's link
        >
          <VscGithubAlt size={22} /> {/* GitHub Icon */}
        </a>

        {/* Arrow Icon (for demo link) */}
        <div className="arrow-container" title="External Link">
          <VscLinkExternal
            size={22}
            className="text-white hover:text-primary duration-300"
          />
        </div>
      </div>
    </a>
  </div>
);

export default ProjectCard;
