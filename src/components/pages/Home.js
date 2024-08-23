import React from "react";
import Typed from "typed.js";

const Home = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer", "Software Engineer", "Freelancer"],
      typeSpeed: 75,
      loop: true,
      backSpeed: 75,
      backDelay: 100,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section
      className="min-h-[calc(100vh-80px)] flex"
      data-component="home-page"
      id="home"
    >
      <div class="container m-auto px-5">
        <div className="flex items-center gap-36">
          <div className="w-3/5">
            <h1 className="text-8xl font-bold mt-6 leading-none font-sans">
              Hi, It's <span class="text-primary-green">Justin</span>
            </h1>
            <h3 className="text-animation text-5xl font-bold mt-4 mb-14 font-sans">
              I'm a <span className="text-primary-green" ref={el} />
            </h3>
            <p className="text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do,
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim, ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut
            </p>
          </div>
          <div className="w-2/5">
            <img src="/images/home-logo.png" alt="home-logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
