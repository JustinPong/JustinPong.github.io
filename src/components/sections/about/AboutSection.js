import React from "react";
import PrimaryTitle from "../../pages/common/primary-title/PrimaryTitle";

const AboutSection = () => {
  return (
    <section className="min-h-screen flex" id="about">
      <div className="container m-auto px-5 md:px-32">
        <div class="max-w-[900px] m-auto">
          <PrimaryTitle index="01" title="About Me" />
          <div className="font-sans text-gray">
            I'm a Front-End Developer located in Hong Kong. I have a serious
            passion for web developing, designing and programming. Also hungry
            for challenges and yearning to put my brains to the test. I am
            ethusiastic in the entire frontend spectrum and working on ambitious
            projects with other frontend lovers. Are you ready to working on
            something awesome together?
            <br />
            <br />
            Here are the technologies I am most familiar with:
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
