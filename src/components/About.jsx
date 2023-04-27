import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants/constants";

import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

import { anshul } from "../assets";
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>

      <div
        variants={fadeIn("", "", 0.1, 1)}
        className="flex items-center min-[1000px]:flex-row flex-col-reverse">
        <p className="mt-4 text-secondary text-[17px] min-[1000px]:max-w-lg w-full leading-[30px]">
        I am a skilled programmer with JavaScript, Java, Springboot and Node.js. I possess 
        strong leadership qualities and thrive in collaborative team environments. With a passion 
        for technology and attention to detail, I deliver high-quality results. I am committed to 
        continuous learning and eager to contribute to a dynamic organization.
        </p>

        {/* <div className="xs:w-[350px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card m-auto max-[1000px]:my-14">
          <div className="bg-tertiary rounded-[20px] min-h-[250px] flex justify-evenly items-center flex-col overflow-hidden">
            <img
              src={me}
              alt="MyPhoto"
              className="w-full h-full object-contain"
            />
          </div>
        </div> */}

        <Tilt className="xs:w-[350px] xs:h-[350px] w-full h-full m-auto max-[1000px]:my-14">
          <div className="xs:w-[350px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
            <div className="bg-tertiary rounded-[20px] min-h-[250px] flex justify-evenly items-center flex-col overflow-hidden">
              <img
                src={anshul}
                alt="MyPhoto"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </Tilt>
      </div>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")