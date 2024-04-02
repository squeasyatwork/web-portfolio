import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

const Projects = () => {
  const data = [
    {
      title: "Jotjoy – Journaling Web App",
      date: `Mar \'24  -  Present 
          (1 month)`,
      description: `All-in-one journaling web application for users to aid their journaling. Made with C#, Redis, React, Redux.
          •	Made a rich text editor with Quill to input journal entries (writings)
          •	Configured a database with C#/Redis to store writings
          •	Search for their writings based on topics they have written about
          •	In-built music player with relaxing sounds
          •	Modern UI`,
    },
  ];
  return (
    <div className="bg-[#edb611]/5 transition duration-400 ease-in hover:ease-in hover:shadow-md hover:shadow-[#edb611]/30 rounded-lg text-lg lg:text-2xl relative w-9/10 lg:w-3/5 mb-20 lg:mb-24 mt-12 lg:mt-36 mx-4 lg:mx-auto p-2 py-4 overflow-auto">
      <ul>
        {data.map((project) => {
          return (
            <div className="relative flex flex-col mx-4 space-y-1">
              <div className="flex items-start justify-between font-semibold text-slate-500 sm:text-2xl lg:text-3xl">
                <div className="w-1/3 lg:w-3/5">
                  {project.title}{" "}
                  <a
                    className="absolute lg:ml-4 ml-7 lg:-mt-1 -mt-7"
                    href="https://github.com/squeasyatwork/jotjoy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon
                      className="rounded-md hover:shadow-md hover:shadow-[#429feb66]"
                      fontSize="xl"
                    />
                  </a>
                </div>
                <div className="text-right sm:w-3/5 w-2/5">
                  <ul>
                    {project.date.split("\n").map((currentDate) => {
                      return <li>{currentDate}</li>;
                    })}
                  </ul>
                </div>
              </div>
              <br></br>
              <div className="text-left">
                <ul>
                  {project.description.split("\n").map((currentLine) => {
                    return <li>{currentLine}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Projects;
