import React from "react";
import { useEffect, useState } from "react";


import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { fullStackProjects, reactProjects, javaScriptProjects, uIProjects } from "../constants/constants";



 const  PortfolioList =({ id, title, active, setSelected, index }) => {
    return (
        <motion.div
    variants={fadeIn("", "spring", index* 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
      <li
        className={active ? "portfolioList active" : "portfolioList"}
        onClick={() => setSelected(id)}
      >
        {title}
      </li>
      </motion.div>
    );
  }

 function Portfolio() {
  const [selected, setSelected] = useState("fullstack");
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
        setData(fullStackProjects);
    }
  }, [selected]);

  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>More Projects</p>
          <h2 className={styles.sectionHeadText}>Portfolio</h2>
        </motion.div>
      </div>
      
      <ul className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`} >
        {list.map((item, index) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            index={index}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
      
    
  );
}

export default SectionWrapper(Portfolio, "");