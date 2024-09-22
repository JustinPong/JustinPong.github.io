import React from "react";
import "./ExperienceSection.css";
import PrimaryTitle from "../../pages/common/primary-title/PrimaryTitle";
import JobItem from "./job-item/JobItem";

const ExperienceSection = () => {
  const jobs = [
    {
      title: "Web Developer",
      company: "Onebox Creative Limited",
      date: "September 2022 - Present",
      link: "https://onepage.com.hk/en/main",
      details: [
        "Highly skilled in front-end development with expertise in creating visually engaging websites with dynamic animations and effects",
        "Experienced in developing back-end websites with CMS integration, utilizing technologies like MySQL, PHP, Laravel, Laravel Nova, and Strapi",
        "led a large-scale project as a project lead abd proven ability to guide and mentor junior developers",
        "Experience in building APIs using Node.js, PHP, or Express.js.",
      ],
      skillSets: [
        "JavaScript",
        "TypeScript",
        "Vue",
        "Nuxt",
        "Jest",
        "PHP",
        "Laravel",
        "Laravel Nova",
      ],
    },
  ];

  return (
    <section className="py-14 md:py-20 lg:py-32 flex" id="experience">
      <div className="container m-auto px-5 md:px-32 relative">
        <div className="max-w-[1000px] m-auto">
          <PrimaryTitle index="02" title="Where I’ve Worked" />

          {jobs.map((job, index) => (
            <JobItem key={index} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
