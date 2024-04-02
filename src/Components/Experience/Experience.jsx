import React from "react";
import Carousel from "react-material-ui-carousel";
import { Card, CardContent, Typography } from "@mui/material";

const Experience = () => {
  const data = [
    {
      position: "Full Stack Software Engineer",
      date: `Jul \'23  -  Nov \'23 
      (4 months)`,
      workplace: "Monash University",
      description: `Used NextJS, React, Tailwind, CSS, PostgreSQL, and AWS to build a concise rental guide for newcomers to secure ideal rental deals in Melbourne. 
       •	Collaborated with business analysts to design website mockup via Figma 
       •	Configured AWS Amplify and RDS to host website and database, with an uptime of 99 %
       •	Developed support for 4 languages across website: English, Mandarin, Hindi, Malay
       •	Followed Agile SCRUM in a team of 5, integrated a CI/CD pipeline into GitHub for code validation
       •	Saved 70 % of housing research time for users`,
    },
    {
      position: "System Support Engineer Level 1 - 2",
      date: `Nov \'20  -  Jul \'22 
      (1 year 8 months)`,
      workplace: "Kookies",
      description: `Provided desktop and production support utilising Trello, GitHub, and DevTools.
    •	Translated discussions between client and developers to rectify production issues
    •	Achieved 64% improvement in website accessibility as per WCAG 2.0 guidelines
    •	Maintained 100+ IAM credentials
    • Provided 25% speedup to organisation\'s workflow`,
    },
    {
      position: "Remote WordPress Developer",
      date: `May \'21  -  Jul \'21 
      (3 months)`,
      workplace: "Self Employed",
      description: `Used HTML, CSS, and WordPress to build a website showcasing the portfolio of an orthopedist in UK.
    •	Website – www.ibmalek.com
    •	Followed client requirements and laid out content across 11 webpages
    •	Contributed to a 16% increase in client\'s revenue
    `,
    },
  ];

  return (
    <div id="experience">
      <div className="w-3/5 lg:w-1/3 border-t-2 border-slate-100 -mt-2 lg:mt-4 lg:pt-2 mx-auto lg:text-6xl text-4xl text-slate-500 font-thin text-center">
        Experience
      </div>
      <div className="bg-[#2181ff]/5 transition duration-400 ease-in hover:ease-in hover:shadow-md hover:shadow-[#2181ff]/30 rounded-lg text-lg lg:text-2xl relative w-9/10 lg:w-3/5 mt-3 lg:mt-7 mb-20 lg:mb-24 mx-4 lg:mx-auto p-2 py-4">
        <Carousel indicatorIconButtonProps={{ style: { display: "none" } }}>
          {data.map((item, index) => {
            return (
              <div className="flex flex-col mx-4 space-y-1">
                <div className="flex items-start justify-between font-semibold text-slate-500 sm:text-2xl lg:text-3xl">
                  <div className="w-1/3 lg:w-3/5">{item.position}</div>
                  <div className="text-right sm:w-3/5 w-2/5">
                    <ul>
                      {item.date.split("\n").map((currentLine) => {
                        return <li>{currentLine}</li>;
                      })}
                    </ul>
                  </div>
                </div>
                <div className="-mt-20 text-left font-semibold text-slate-400 sm:text-2xl lg:text-3xl">
                  {item.workplace === "Kookies" && (
                    <a
                      className="underline underline-offset-4 italic"
                      href="https://www.kookies.io"
                      target="_blank"
                    >
                      {item.workplace}
                    </a>
                  )}
                  {item.workplace === "Monash University" && (
                    <a
                      className="underline underline-offset-4 italic"
                      href="https://main.d2siytxacema5v.amplifyapp.com/"
                      target="_blank"
                    >
                      {item.workplace}
                    </a>
                  )}
                  {item.workplace === "Self Employed" && (
                    <span>{item.workplace}</span>
                  )}
                </div>
                <br></br>
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
