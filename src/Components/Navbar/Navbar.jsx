import React from "react";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed ml-1.5 lg:ml-8 mt-2 lg:mt-5 p-1 z-10 text-3xl lg:text-4xl">
      {!isOpen && (
        <button
          onClick={toggleMenu}
          className="fade-in hamburger w-full rounded-xl border-2 border-white shadow-md hover:shadow-gray-200 px-1.5 pb-1 -mt-1 h-full text-center bg-white hover:text-black hover:border-2 hover:border-rose-200 hover:shadow-md hover:shadow-rose-100 transition ease-in duration:400 hover:ease-in"
        >
          ☰
        </button>
      )}

      {isOpen && (
        <div className="fade-in text-3xl lg:text-4xl shadow-md rounded-xl menu w-full flex bg-[#FFFFC8]/90 justify-center space-x-1 lg:space-x-6 px-0">
          <button
            onClick={toggleMenu}
            className="hamburger rounded-xl border-2 bg-white px-1.5 pb-1 text-center hover:text-black border-rose-200 hover:border-rose-300 hover:shadow-md hover:shadow-rose-100 transition ease-in duration:400 hover:ease-in"
          >
            ✕
          </button>
          <div className="-mt-1">
            <a
              className="rounded-xl lg:rounded-2xl border-2 border-white bg-white px-1 lg:px-3 mx-1 lg:mx-2 pb-1 mb-2 text-lg lg:text-2xl hover:text-black shadow-md border-[#2181ff]/40 hover:border-[#2181ff]/80 hover:shadow-[#42a2ff]/30 transition ease-in duration:400 hover:ease-in"
              href="#"
            >
              Intro
            </a>
          </div>
          <div className="-mt-1">
            <a
              className="rounded-xl lg:rounded-2xl border-2 border-white bg-white px-1 lg:px-3 mx-1 lg:mx-2 pb-1 mb-2 text-lg lg:text-2xl hover:text-black shadow-md border-[#2181ff]/40 hover:border-[#2181ff]/80 hover:shadow-[#42a2ff]/30 transition ease-in duration:400 hover:ease-in"
              href="#skills"
            >
              Skills
            </a>
          </div>
          <div className="-mt-1">
            <a
              className="rounded-xl lg:rounded-2xl border-2 border-white bg-white px-1 lg:px-3 mx-1 lg:mx-2 pb-1 mb-2 text-lg lg:text-2xl hover:text-black shadow-md border-[#2181ff]/40 hover:border-[#2181ff]/80 hover:shadow-[#42a2ff]/30 transition ease-in duration:400 hover:ease-in"
              href="#experience"
            >
              Experience
            </a>
          </div>
          <div className="-mt-1">
            <a
              className="rounded-xl lg:rounded-2xl border-2 border-white bg-white px-1 lg:px-3 mx-1 lg:mx-2 pb-1 mb-2 text-lg lg:text-2xl hover:text-black shadow-md border-[#2181ff]/40 hover:border-[#2181ff]/80 hover:shadow-[#42a2ff]/30 transition ease-in duration:400 hover:ease-in"
              href="#projects"
            >
              Projects
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
