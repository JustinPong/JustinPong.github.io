import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiPhp,
  SiLaravel,
  SiLaravelnova,
  SiNuxtdotjs,
  SiStrapi,
  SiBootstrap,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import PrimaryTitle from "../../pages/common/primary-title/PrimaryTitle";
import "./AboutSection.css";

const AboutSection = () => {
  const swiperRef = useRef(null);

  const technologies = [
    {
      name: "HTML",
      icon: (
        <SiHtml5 className="tech-icon text-white duration-300 group-hover:text-primary" />
      ),
    },
    {
      name: "CSS",
      icon: (
        <SiCss3 className="tech-icon text-white duration-300 group-hover:text-primary" />
      ),
    },
    {
      name: "JavaScript",
      icon: (
        <SiJavascript className="tech-icon text-white duration-300 group-hover:text-primary" />
      ),
    },
    {
      name: "React",
      icon: (
        <SiReact className="tech-icon text-white duration-300 group-hover:text-primary" />
      ),
    },
    {
      name: "Vue",
      icon: (
        <FaVuejs className="tech-icon text-white duration-300 group-hover:text-primary" />
      ),
    },
    {
      name: "Nuxt",
      icon: (
        <SiNuxtdotjs className="tech-icon text-white duration-300 group-hover:text-primary" />
      ),
    },
    {
      name: "PHP",
      icon: (
        <SiPhp className="tech-icon text-white duration-300 group-hover:text-primary" />
      ),
    },
    {
      name: "Laravel",
      icon: (
        <SiLaravel className="tech-icon text-white duration-300 group-hover:text-primary" />
      ),
    },
    {
      name: "Laravel Nova",
      icon: (
        <SiLaravelnova className="tech-icon text-white duration-300 group-hover:text-primary" />
      ),
    },
    {
      name: "Strapi",
      icon: (
        <SiStrapi className="tech-icon text-white duration-300 group-hover:text-primary" />
      ),
    },
    {
      name: "Bootstrap",
      icon: (
        <SiBootstrap className="tech-icon text-white duration-300 group-hover:text-primary" />
      ),
    },
    {
      name: "Tailwind CSS",
      icon: (
        <SiTailwindcss className="tech-icon text-white duration-300 group-hover:text-primary" />
      ),
    },
    {
      name: "Git",
      icon: (
        <SiGit className="tech-icon text-white duration-300 group-hover:text-primary" />
      ),
    },
  ];

  useEffect(() => {
    const debounce = (func, delay) => {
      let timeout;
      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
      };
    };

    const handleResize = debounce(() => {
      if (swiperRef.current) {
        swiperRef.current.swiper.update();
      }
    }, 300);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="py-14 md:py-20 lg:py-32 flex" id="about">
      <div className="container m-auto px-5 md:px-32 relative">
        <div className="max-w-[900px] m-auto">
          <PrimaryTitle index="01" title="About Me" />
          <div className="font-serif text-lg text-gray">
            Hi, I'm Justin. I love creating things for the web. My journey in
            web development began in 2021 when I built a personal website on{" "}
            <a
              className="underline-link"
              href="https://www.wix.com/"
              target="_blank"
              rel="noreferrer"
            >
              Wix
            </a>
            . This sparked my curiosity to learn how to develop websites
            manually. Although my university major wasn't in computer science,
            my passion led me to join a web development bootcamp, which landed
            me my first job in the field.
            <br />
            <br />
            Fast-forward to today, with several years of experience, I am also
            pursuing a part-time degree in computing to deepen my expertise and
            fuel my passion for programming. I am committed to continuously
            expanding my knowledge in various areas.
            <br />
            <br />
            Here are the technologies I am most familiar with:
          </div>
          <div className="relative mt-10">
            <div className="fade-overlay left-0"></div>
            <Swiper
              ref={swiperRef}
              className="swiper about-swiper"
              slidesPerView="auto"
              modules={[Autoplay]}
              autoplay={{
                delay: 0,
              }}
              touchEventsTarget="container"
              speed={2000}
              loop={true}
              lazy={true}
              loopedSlides={14}
              allowTouchMove={false}
              breakpoints={{
                spaceBetween: 20,
                1024: {
                  spaceBetween: 60,
                },
              }}
            >
              {technologies.map((tech, index) => (
                <SwiperSlide
                  key={index}
                  className="group max-w-min text-center"
                  style={{
                    width: "auto",
                    padding: "10px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {tech.icon}
                  <span className="mt-1 text-xs lg:text-base text-white pointer-events-none duration-300 opacity-100 lg:opacity-0 group-hover:opacity-100">
                    {tech.name}
                  </span>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="fade-overlay right-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
