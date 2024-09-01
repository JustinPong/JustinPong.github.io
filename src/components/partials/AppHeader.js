import React from "react";

const AppHeader = () => {
  return (
    <header className="bg-[#060606]">
      <div className="h-[80px] flex justify-between items-center">
        <div className="px-14 w-full flex justify-between items-center">
          <a
            href="/"
            className="flex gap-1 w-auto transform transition-transform duration-300 hover:scale-105"
          >
            <span className="text-white font-sans text-2xl font-semibold">
              Justin
            </span>
            <span className="text-primary font-sans text-2xl font-semibold">
              Pong
            </span>
          </a>

          <nav>Menus</nav>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
