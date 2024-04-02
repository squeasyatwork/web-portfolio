import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="w-screen mb-2 lg:mx-0 mt-10 lg:mt-20 text-3xl text-center lg:text-5xl">
      <div className="w-3/5 lg:w-1/4 border-t-2 border-slate-100 lg:mt-4 -mt-2 mx-auto  text-slate-500 ">
        Get in touch
      </div>
      <div className="w-screen flex justify-center space-x-4">
        <a
          href="https://github.com/squeasyatwork"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon
            className="rounded-md hover:shadow-md hover:shadow-[#429feb66]"
            fontSize="xl"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/abdullahmalek99/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon
            className="rounded-md hover:shadow-md hover:shadow-[#429feb66]"
            fontSize="xl"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
