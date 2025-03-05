import React, { useRef } from "react";
import Carousel from "react-material-ui-carousel";
import { motion } from "framer-motion";
import SvgExternalLinkIcon from "../Svg/SvgExternalLinkIcon";

const Projects = () => {
  const data = [
    {
      title: "Cloud Snap",
      link: "https://github.com/squeasyatwork/cloud-snap",
      // logo: <GitHubIcon fontSize="xl"></GitHubIcon>,   // logo has been removed from website
      date: `Jun '23`,
      description: `Cloud application to upload/store/delete images with AWS and detect objects in them.
    • Cut down operation costs by 70% by going serverless using Python scripts and AWS Lambda
• Made development 2x faster, maintainable, and testable by using AWS API Gateway to design API
• Achieved blazing fast object detection using YOLO (You Only Look Once) technology
• Implemented end-to-end security using industry standard OAuth 2.0
    `,
    },
    {
      title: "Make It",
      link: "https://www.figma.com/proto/chnYWErBRMpDonzbFeazhj/5152-a3-prototype?node-id=35%3A124&scaling=scale-down&page-id=0%3A1&starting-point-node-id=35%3A124",
      // logo: figma_logo_svg,   // logo has been removed from website
      date: `Jan '23`,
      description: `Mobile app to host, book, and watch workshops on everything DIY.
• Offered client an interactable mockup made with Figma
• Achieved industry-grade user interface by applying UI/UX principles
• Performed iterative product design: requirements analysis → design artifacts → feedback
• Artifacts made: questionnaire, storyboard, user personas, hand-sketches
`,
    },
  ];
  return (
    <div id="projects">
      <div className="w-3/5 lg:w-1/3 border-t-2 border-slate-100 -mt-2 lg:mt-4 lg:pt-2 mx-auto lg:text-6xl text-4xl text-slate-500 font-thin text-center">
        Projects
      </div>
      <div className="bg-[#FFFFC8]/80 transition duration-400 ease-in hover:ease-in hover:shadow-md hover:shadow-gray-100 rounded-lg text-lg lg:text-2xl relative w-9/10 lg:w-3/5 mt-3 lg:mt-7 mb-20 lg:mb-24 mx-4 lg:mx-auto p-2 py-4">
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
          {data.map((project) => {
            return (
              <div className="relative flex flex-col mx-4 space-y-1">
                <div className="flex items-start justify-between font-semibold text-slate-500 sm:text-2xl lg:text-3xl">
                  <div className="w-2/3 lg:w-3/5">
                    <motion.a
                      whileHover="hover"
                      transition={{ duration: 200 }}
                      className="flex justify-center items-center px-3 py-2 w-fit rounded-2xl hover:text-slate-600 shadow-md hover:shadow-lg hover:shadow-[#edb611]/30 transition duration-400 ease-in hover:ease-in"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                      <motion.div
                        className="inline-block"
                        initial={{ opacity: 0.8, scale: 1 }}
                        variants={{
                          hover: { opacity: 1, scale: 1.05 },
                        }}
                      >
                        <SvgExternalLinkIcon />
                      </motion.div>
                    </motion.a>
                  </div>
                  <div className="flex items-center justify-end text-right sm:w-3/5 w-2/5 px-3 py-2">
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
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
