import React from "react";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("Hi" + isMenuOpen);
  };
  return (
    <div>
      <button
        className="ml-3 lg:ml-10 mt-6 lg:mt-10"
        onClick={(e) => {
          toggleMenu();
        }}
      >
        <input className="rounded-xl" type="checkbox" id="toggle" />
        <label className="rounded-xl" for="toggle"></label>
      </button>
      <div
        className={`w-1/2 bg-gray-500 ml-0 flex flex-col ${
          isMenuOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="text-6xl">Skills</div>
        <div>Experience</div>
      </div>
    </div>
  );
};

export default Navbar;
