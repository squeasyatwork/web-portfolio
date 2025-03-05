import React from "react";
import { motion } from "framer-motion";
import Carousel from "react-material-ui-carousel";
import SvgExternalLinkIcon from "../Svg/SvgExternalLinkIcon";

const Experience = () => {
  const data = [
    {
      position: "Software Engineer - Web",
      date: `Jan '25  -  Feb '25`,
      workplace: "Datex Svcs.",
      link: "https://main.d14o5fofnki7iu.amplifyapp.com/",
      description: `Developed a portfolio website for a Data Engineering company, using React, Tailwind CSS 4, Vite, Framer Motion, Figma, and AWS. 
      • Designed mockups for desktop and mobile views using Figma.
      • Added website content based on analysis of client's business.
       • Added smooth animations across the application using Framer Motion.
       • Deployed application using AWS Amplify.
       • Configured CI/CD pipeline for automatic deployment.
       • Followed mobile-first approach to achieve responsive design.`,
    },
    {
      position: "Full Stack Software Engineer",
      date: `Jul '23  -  Nov '23 
      (4 months)`,
      workplace: "My Rental Compass",
      link: "https://main.d2siytxacema5v.amplifyapp.com/",

      description: `Used Next JS, React, Tailwind, CSS, PostgreSQL, and AWS to build a concise rental guide for newcomers to secure ideal rental deals in Melbourne.
• Collaborated with BAs to design product mockup in Figma for transparent client communication
• Designed cloud architecture with AWS Amplify and Amazon RDS to achieve website uptime of >99%
• Integrated language support in website for all target users: English, Mandarin, Hindi, Malay
• Followed Agile SCRUM in a team of 5, integrated a CI/CD pipeline into GitHub for code validation
• Saved ~70% of housing research time for users`,
    },

    {
      position: "Remote WordPress Developer",
      date: `May '21  -  Jul '21 
      (3 months)`,
      workplace: "IB Malek",
      link: "https://www.ibmalek.com/",

      description: `Used HTML, CSS, PHP, and WordPress to build a website showing services of an NHS orthopedist in UK.
• Split content across 11 pages for cohesive information layout
• Boosted client revenue by 16%`,
    },
    {
      position: "Teaching Assistant - Backend Development",
      date: `Jul '24  -  Nov '24 
      (4 months)`,
      workplace: "Monash University",
      link: "https://handbook.monash.edu/2024/units/FIT2104?year=2024",
      description: `Taught modern web development to 100+ clients with a team of 7 facilitators.
• Technology used: PHP 8, MySQL, CakePHP 5, Bootstrap 5
• Developed a highly scalable enterprise information system using CakePHP MVC framework
• Secured database manipulation using authorisation, sessions, and cookies
• Elicited feedback to optimise performance`,
    },
    {
      position: "Secretary",
      date: `Aug '23  -  Present`,
      workplace: "Monash Data Science Society",
      link: "https://www.instagram.com/monashdata/",

      description: `• Collaborated with industry leaders and hosted 4 events with ~500 people in 1 month 
• Monitor progress of 30 team members across 7 divisions: HR, Events, IT, Sponsorship, etc. 
• Manage internal platforms: Notion, Slack, Canva, Gmail, Drive 
• Automated hiring/onboarding communication process using online tools such as Notion, AirTable 
• Rebranding the society to consolidate with AI interest groups`,
    },
  ];

  return (
    <div id="experience">
      <div className="w-3/5 lg:w-1/3 border-t-2 border-slate-100 -mt-2 lg:mt-4 lg:pt-2 mx-auto lg:text-6xl text-4xl text-slate-500 font-thin text-center">
        Experience
      </div>
      {/* Tile element  */}
      <div className="bg-[#73C2FB]/30 transition duration-400 ease-in hover:ease-in hover:shadow-md shadow-gray-100  rounded-lg text-lg lg:text-2xl relative w-9/10 lg:w-3/5 mt-3 lg:mt-7 mb-20 lg:mb-24 mx-4 lg:mx-auto p-2 py-4">
        <Carousel
          autoPlay={false}
          navButtonsAlwaysVisible={true}
          navButtonsProps={{
            // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
            style: {
              width: "2rem",
              height: "2rem",
              opacity: 0.2,
            },
          }}
          indicatorIconButtonProps={{
            // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
            style: {
              opacity: 0.5,
            },
          }}
        >
          {data.map((item, index) => {
            return (
              // Content Container
              <div className="flex flex-col mx-4 space-y-1">
                {/* Role and DateTime element */}
                <div className="flex items-start justify-between font-semibold text-slate-500 sm:text-2xl lg:text-3xl">
                  <div className="w-2/3 lg:w-2/5">{item.position}</div>
                  <div className="text-right sm:w-3/5 w-3/5">
                    <ul>
                      {item.date.split("\n").map((currentLine) => {
                        return <li>{currentLine}</li>;
                      })}
                    </ul>
                  </div>
                </div>

                {/* Workplace element */}
                <motion.div
                  whileHover="hover"
                  className="-mt-20 text-left font-semibold text-slate-400 sm:text-2xl lg:text-3xl"
                >
                  <a
                    className="flex justify-center items-center rounded-2xl p-2 hover:text-slate-600 shadow-md hover:shadow-lg hover:shadow-[#73C2FB]/60 transition duration-400 ease-in hover:ease-in"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.workplace}
                    <motion.div
                      className="inline-block"
                      initial={{ opacity: 0.5, scale: 1 }}
                      variants={{
                        hover: { opacity: 1, scale: 1.05 },
                      }}
                    >
                      <SvgExternalLinkIcon />
                    </motion.div>
                  </a>
                </motion.div>
                <br></br>

                {/* Role Highlights element */}
                <div className="text-left">
                  <ul>
                    {item.description.split("\n").map((currentLine) => {
                      return <li>{currentLine}</li>;
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Experience;
