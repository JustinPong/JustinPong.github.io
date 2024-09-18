import React from "react";
import Typed from "typed.js";
import PrimaryButton from "../button/PrimaryButton";
import "./LandingSection.css";

const LandingSection = () => {
  const el = React.useRef(null);

  const initTyped = () => {
    const options = {
      strings: ["Web Developer", "JavaScript Enthusiast", "Freelancer"],
      typeSpeed: 75,
      loop: true,
      backSpeed: 75,
      backDelay: 100,
    };

    const typed = new Typed(el.current, options);

    return () => {
      typed.destroy();
    };
  };

  const initSwiper = () => {
    // Initialize Swiper here
    // Return a cleanup function if necessary
  };

  const initScrollTrigger = () => {
    // Initialize ScrollTrigger here
    // Return a cleanup function if necessary
  };

  const initTimeline = () => {
    // Initialize Timeline here
    // Return a cleanup function if necessary
  };

  React.useEffect(() => {
    const cleanups = [
      initTyped(),
      initSwiper(),
      initScrollTrigger(),
      initTimeline(),
    ];

    return () => {
      cleanups.forEach((cleanup) => cleanup && cleanup());
    };
  }, []);

  return (
    <section
      className="min-h-[100vh] flex"
      data-component="home-page"
      id="home"
    >
      <div className="container m-auto px-5 md:px-16 lg:px-32">
        <div className="flex flex-col-reverse lg:flex-row gap-10 2xl:gap-36">
          <div className="w-full md:max-w-[1000px] m-auto">
            <div className="text-primary font-mono">Hi, my name is</div>
            {/* text-4xl xl:text-7xl */}
            <h1 className="big-heading font-bold mt-4 xl:mt-6 leading-none font-sans text-white">
              Justin Pong.
            </h1>
            <h3 className="text-xl lg:text-4xl font-bold mt-4 mb-6 xl:mb-10 font-sans">
              I'm a <span className="text-primary" ref={el} />
            </h3>
            <p className="text-base xl:text-lg max-w-[560px] text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do,
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim, ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut
            </p>
            <PrimaryButton text="Get In Touch!" className="mt-[50px]" />
          </div>
          {/* <div className="w-full max-w-[600px] lg:w-2/5">
            <img src="/images/home-logo.png" alt="Home Logo" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
