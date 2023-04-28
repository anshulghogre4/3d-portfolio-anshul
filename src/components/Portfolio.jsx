import React from "react";
import { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { github,livelink } from "../assets";
import { motion } from "framer-motion";
import {  textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fullStackProjects, reactProjects, javaScriptProjects, uIProjects } from "../constants/constants";



 const  PortfolioList =({ id, title, active, setSelected, index }) => {
    return (
        <motion.div
        
  >
      <li
        className={`active ? "portfolioList active" : "portfolioList" bg-indigo-950 block active:bg-indigo-700 px-[1.5rem] lg:py-[0.5rem] mr-[1rem]  rounded-2xl   cursor-pointer`}
        onClick={() => setSelected(id)}
      >
        {title}
      </li>
      </motion.div>
    );
  }

 function Portfolio() {
  const [selected, setSelected] = useState("javascript");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "fullstack",
      title: "Full Stack",
    },
    {
      id: "react",
      title: "ReactJS ",
    },
    {
      id: "javascript",
      title: "JavaScript ",
    },
    {
      id: "ui",
      title: "UIs",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "fullstack":
        setData(fullStackProjects);
        break;
      case "react":
        setData(reactProjects);
        break;
      case "javascript":
        setData(javaScriptProjects);
        break;
      case "ui":
        setData(uIProjects);
        break;
      
      default:
        setData(javaScriptProjects);
    }
  }, [selected]);

  return (
    <div className={`mt-4 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} h-[13rem]`}
      >
        <motion.div variants={textVariant()} >
        <p className={`${styles.sectionSubText} `}>More Projects</p>
        <h2 className={`${styles.sectionHeadText}`}>Portfolio.</h2>
        </motion.div>
      </div>
      
      <ul className={` my-5 xs:mb-[5rem] h-[5rem]   ${styles.paddingX}  flex flex-row flex-wrap justify-center items-center  lg:gap-[5rem]  `} >
        { list && list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>


      <motion.div > 
      <div className="container  flex flex-row justify-center items-center flex-wrap w-full">
        {data.map((d,index) => (
          <Tilt key={index}
          options={{
            max: 45,
            scale: 1,
            speed: 750,
          }} className="item green-pink-gradient shadow-card transition-all duration-500 ease-in-out flex flex-col w-[220px] h-[16rem] justify-start items-center relative mx-[1rem] mb-[2rem] rounded-3xl">
            <img className="w-full h-[150px] object-cover z-index-1 rounded-2xl "
              src={d.img}
              alt=""
            />
            <h3 className=" my-2">{d.title}</h3>

            <div className="flex flex-row justify-center items-center space-x-4">
              <a className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"  href={d.live_link} target="_blank" >
                <img className='w-full object-contain' src={livelink} alt="livelink" />
              </a>
              <a className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer" href={d.source_code_link} target="_blank"><img className='w-1/2 h-1/2 object-contain' src={github} alt="github" /></a>
            </div>


            </Tilt>
        ))}
      </div>
      </motion.div>
    </div>
      
    
  );
}

export default SectionWrapper(Portfolio, "");
