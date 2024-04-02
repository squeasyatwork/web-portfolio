import React from "react";

const Skills = () => {
  const webDevSkills = ["Tailwind CSS", "JavaScript", "React Redux"];
  const enggSkills = ["Redis", "C# .NET", "AWS/Azure", "Python/Java", "SQL"];

  return (
    <div className="flex flex-col items-start text-lg lg:text-2xl relative w-9/10 lg:w-3/5 mt-16 lg:mt-28 mb-12 lg:mb-16 mx-4 lg:mx-auto p-2 py-4">
      <div className="w-3/5 lg:w-1/3 border-t-2 border-slate-100 -mt-2 lg:mt-4 lg:pt-3 mx-auto lg:text-6xl text-4xl text-slate-500 font-thin text-center">
        Skills
      </div>
      <div className="-mt-6 lg:-mt-4 relative w-full flex flex-wrap items-center justify-center lg:justify-start space-x-4 space-y-4 lg:space-y-6 p-4">
        <div className="-mb-4 lg:-mb-6 border-2 border-[#2181ff]/50 rounded-2xl lg:rounded-3xl p-2 lg:p-4 hover:border-[#2181ff]/80 hover:shadow-sm hover:shadow-[#2181ff]/30 transition duration-400 ease-out hover:ease-out">
          Agile SCRUM
        </div>
        {enggSkills.map((skill) => {
          return (
            <div className="border-2 border-[#2181ff]/50 rounded-2xl lg:rounded-3xl p-2 lg:p-4 hover:border-[#2181ff]/80 hover:shadow-sm hover:shadow-[#2181ff]/30 transition duration-400 ease-out hover:ease-out">
              {skill}
            </div>
          );
        })}
        {webDevSkills.map((skill) => {
          return (
            <div className="border-2 border-[#edb611]/50 rounded-2xl lg:rounded-3xl p-2 lg:p-4 hover:border-[#edb611]/80 hover:shadow-sm hover:shadow-[#edb611]/30 transition duration-400 ease-out hover:ease-out">
              {skill}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
