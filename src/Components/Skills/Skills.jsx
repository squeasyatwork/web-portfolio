import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const webDevSkills = ["Tailwind", "Node", "React", "Angular", "REST API"];
  const enggSkills = ["SOLID", "AWS", "Java"];
  const baSkills = ["Agile", "JIRA", "Power BI", "SQL", "ETL"];

  return (
    <div
      id="skills"
      className="flex flex-col items-start text-lg lg:text-2xl relative w-screen lg:w-3/5 mt-16 lg:mt-28 mb-12 lg:mb-16 lg:mx-auto p-2 py-4"
    >
      <div className="w-full lg:w-1/3 border-t-2 border-slate-100 -mt-2 lg:mt-4 lg:pt-3 mx-auto lg:text-6xl text-4xl text-slate-500 font-thin text-center">
        Skills
      </div>
      <div className="-mt-6 lg:-mt-4 relative w-full flex flex-wrap items-center justify-center lg:justify-center space-x-1 lg:space-x-4 space-y-4 lg:space-y-6 p-4">
        <motion.div
          initial={{ rotate: 0 }}
          whileHover={{ rotate: -1 }}
          className="-mb-4 lg:-mb-6 border-2 border-[#73C2FB]/70 rounded-lg lg:rounded-xl px-2 lg:px-4 py-1 lg:py-2 hover:border-[#73C2FB]/100 hover:shadow-sm hover:shadow-[#73C2FB]/30 transition duration-400 ease-out hover:ease-out"
        >
          .Net Core
        </motion.div>
        {enggSkills.map((skill, index) => (
          <motion.div
            initial={{ rotate: 0 }}
            whileHover={{ rotate: index % 2 == 0 ? 1 : -1 }}
            className="border-2 border-[#73C2FB]/70 rounded-lg lg:rounded-xl px-2 lg:px-4 py-1 lg:py-2 hover:border-[#73C2FB]/100 hover:shadow-sm hover:shadow-[#73C2FB]/30 transition duration-400 ease-out hover:ease-out"
          >
            {skill}
          </motion.div>
        ))}

        {baSkills.map((skill, index) => {
          return (
            <motion.div
              initial={{ rotate: 0 }}
              whileHover={{ rotate: index % 2 == 0 ? -1 : 1 }}
              className="border-2 border-[#bd1929]/50 rounded-lg lg:rounded-xl px-2 lg:px-4 py-1 lg:py-2 hover:border-[#bd1929]/80 hover:shadow-sm hover:shadow-[#bd1929]/30 transition duration-400 ease-out hover:ease-out"
            >
              {skill}
            </motion.div>
          );
        })}
        {webDevSkills.map((skill, index) => {
          return (
            <motion.div
              initial={{ rotate: 0 }}
              whileHover={{ rotate: index % 2 == 0 ? 1 : -1 }}
              className="border-2 border-[#edb611]/50 rounded-lg lg:rounded-xl px-2 lg:px-4 py-1 lg:py-2 hover:border-[#edb611]/80 hover:shadow-sm hover:shadow-[#edb611]/30 transition duration-400 ease-out hover:ease-out"
            >
              {skill}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
