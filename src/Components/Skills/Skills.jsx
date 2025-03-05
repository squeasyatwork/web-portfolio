import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const webDevSkills = ["Tailwind CSS", "JavaScript", "React Redux"];
  const enggSkills = ["Redis", "C# .NET", "AWS/Azure", "Python/Java", "SQL"];

  return (
    <div
      id="skills"
      className="flex flex-col items-start text-lg lg:text-2xl relative w-screen lg:w-3/5 mt-16 lg:mt-28 mb-12 lg:mb-16 lg:mx-auto p-2 py-4"
    >
      <div className="w-full lg:w-1/3 border-t-2 border-slate-100 -mt-2 lg:mt-4 lg:pt-3 mx-auto lg:text-6xl text-4xl text-slate-500 font-thin text-center">
        Skills
      </div>
      <div className="-mt-6 lg:-mt-4 relative w-full flex flex-wrap items-center justify-center lg:justify-start space-x-1 lg:space-x-4 space-y-4 lg:space-y-6 p-4">
        <motion.div
          initial={{ rotate: 0 }}
          whileHover={{ rotate: -1 }}
          className="-mb-4 lg:-mb-6 border-2 border-[#73C2FB]/70 rounded-2xl lg:rounded-3xl p-2 lg:p-4 hover:border-[#73C2FB]/100 hover:shadow-sm hover:shadow-[#73C2FB]/30 transition duration-400 ease-out hover:ease-out"
        >
          Agile SCRUM
        </motion.div>
        {enggSkills.map((skill, index) => {
          return (
            <motion.div
              initial={{ rotate: 0 }}
              whileHover={{ rotate: index % 2 == 0 ? 1 : -1 }}
              className="border-2 border-[#73C2FB]/70 rounded-2xl lg:rounded-3xl p-2 lg:p-4 hover:border-[#73C2FB]/100 hover:shadow-sm hover:shadow-[#73C2FB]/30 transition duration-400 ease-out hover:ease-out"
            >
              {skill}
            </motion.div>
          );
        })}
        {webDevSkills.map((skill, index) => {
          return (
            <motion.div
              initial={{ rotate: 0 }}
              whileHover={{ rotate: index % 2 == 0 ? -1 : 1 }}
              className="border-2 border-[#edb611]/50 rounded-2xl lg:rounded-3xl p-2 lg:p-4 hover:border-[#edb611]/80 hover:shadow-sm hover:shadow-[#edb611]/30 transition duration-400 ease-out hover:ease-out"
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
