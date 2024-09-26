import React from "react";
import LandingSection from "../../sections/landing/LandingSection";
import AboutSection from "../../sections/about/AboutSection";
import ExperienceSection from "../../sections/experience/ExperienceSection";
import ProjectSection from "../../sections/project/ProjectSection";

const Homepage = () => {
  return (
    <div>
      <LandingSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection/>
    </div>
  );
};

export default Homepage;
