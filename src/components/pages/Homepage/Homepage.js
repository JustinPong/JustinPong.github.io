import React from "react";
import LandingSection from "../../sections/landing/LandingSection";
import AboutSection from "../../sections/about/AboutSection";
import ExperienceSection from "../../sections/experience/ExperienceSection";
import ProjectSection from "../../sections/project/ProjectSection";
import ContactSection from "../../sections/contact/ContactSection";

const Homepage = () => {
  return (
    <div>
      <LandingSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
};

export default Homepage;
