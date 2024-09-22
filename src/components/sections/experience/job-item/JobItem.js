import React from "react";
import "./JobItem.css";

const JobItem = ({ job }) => {
  return (
    <div className="flex flex-col lg:flex-row mb-6">
      <div className="lg:w-1/4 mt-1 hidden lg:block">
        <p className="text-light-gray text-sm font-mono">{job.date}</p>
      </div>
      <div className="lg:w-3/4">
        <h3 className="text-lg font-sans font-semibold">
          {job.title}{" "}
          <span className="text-primary">
            {" "}
            @{" "}
            <a
              className="underline-link"
              href={job.link}
              target="_blank"
              rel="noreferrer"
            >
              {job.company}
            </a>
          </span>
        </h3>
        <p className="text-light-gray text-sm font-mono mt-1 block lg:hidden">
          {job.date}
        </p>
        <ul className="mt-3 text-gray">
          {job.details.map((detail, index) => (
            <li key={index} className="job-detail-item font-serif">
              {detail}
            </li>
          ))}
        </ul>
        <div className="flex gap-2 flex-wrap mt-4">
          {job.skillSets.map((skill, index) => (
            <span
              key={index}
              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary  font-mono"
            >
              #{skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobItem;
