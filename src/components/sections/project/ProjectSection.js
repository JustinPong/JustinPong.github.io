import React from "react";
import PrimaryTitle from "../../pages/common/primary-title/PrimaryTitle";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  const projects = [
    {
      title: "Jammming",
      description:
        "A React.js app that allows users to search songs and create playlists, saving them to Spotify using the Spotify API.",
      image: "/images/project/jammming.png",
      sourceCode: "https://github.com/JustinPong/Jammming",
      demo: "https://justinpong.github.io/Jammming/",
      skillSets: ["React", "JavaScript", "Spotify API"],
    },
    {
      title: "To Do List",
      description:
        "A React web application for managing tasks with a sleek user interface. It uses the localstorage-react-hook to save tasks locally, ensuring persistence across sessions when the server is running.",
      image: "/images/project/todo-list.png",
      sourceCode: "https://github.com/JustinPong/react-todo-list",
      demo: "https://justinpong.github.io/react-todo-list/",
      skillSets: ["HTML", "CSS", "JavaScript", "React", "Local Storage"],
    },
    {
      title: "Find Your Hat",
      description:
        "A grid-based game where players navigate to find a hidden hat while avoiding holes. Built with JavaScript and OOP principles, the game includes difficulty levels and dynamic map generation.",
      image: "/images/project/find-your-hat.png",
      sourceCode: "https://github.com/JustinPong/find-your-hat",
      demo: "https://justinpong.github.io/find-your-hat/",
      skillSets: ["HTML", "CSS", "JavaScript", "OOP"],
    },
    {
      title: "Wordle Clone",
      description:
        "An endless version of the word-guessing game, offering six attempts per round with instant feedback. Enjoy an interactive on-screen keyboard.",
      image: "/images/project/wordle.png",
      sourceCode: "https://github.com/JustinPong/Wordle-Clone",
      demo: "https://justinpong.github.io/Wordle-Clone/",
      skillSets: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <section className="py-14 md:py-20 lg:py-32 flex" id="project">
      <div className="container m-auto px-5 md:px-32 relative">
        <div className="max-w-[1000px] m-auto">
          <PrimaryTitle index="03" title="Some Things I’ve Built" />
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
