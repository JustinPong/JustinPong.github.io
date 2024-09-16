import React from "react";
import NavBar from "./NavBar";
const AppHeader = () => {
  return (
    <header className="bg-dark fixed top-0 left-0 w-full z-50">
      <div className="h-[80px] flex justify-between items-center">
        <div className="px-6 lg:px-14 w-full flex justify-between items-center">
          <a
            href="/"
            className="flex gap-1 w-auto transform transition-transform duration-300 hover:scale-105 text-2xl"
          >
            <span className="text-white font-sans font-semibold">
              {"<"}Justin
            </span>
            <span className="text-primary font-sans font-semibold">
              Pong {"/>"}
            </span>
          </a>
          <NavBar />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
