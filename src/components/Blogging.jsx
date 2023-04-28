import React,{useState, useEffect, useRef} from 'react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { myBlogs } from '../constants/constants';
import { hashnode } from '../assets';
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";


let count = 0;
let slideInterval;


function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % myBlogs.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = myBlogs.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div ref={slideRef} className="w-full select-none relative mt-[2rem]">
      <div className="aspect-w-16 aspect-h-9">
        <img  className='rounded-lg cursor-pointer'  onClick={() => window.open(myBlogs[currentIndex].source_code_link, "_blank")}  src={myBlogs[currentIndex].image} alt="blog image" />
        <div className=' ml-[2rem] py-[1rem] flex xs:flex-row justify-start  items-center  lg:space-x-4 '>
          <h2 className=' font-bold lg:text-[2rem] xs:text-[1.5rem]'>{myBlogs[currentIndex].title}</h2>
          <a href={myBlogs[currentIndex].source_code_link}><img className='w-8 xs:mr-[3rem]' src={hashnode} alt="hasnode logo" /></a>
        </div>
      </div>
 
      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnPrevClick}
        >
          <AiOutlineVerticalRight size={30} />
        </button>
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnNextClick}
        >
          <AiOutlineVerticalLeft size={30} />
        </button>
      </div>
    </div>
  );
}




const Blogging = () => {
  
  
  return (
    <div className={`mt-12 green-pink-gradient rounded-[20px]`}>
      <div
        className={`bg-tertiary py-[2rem] rounded-2xl ${styles.padding} min-h-[150px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I write</p>
          <h2 className={styles.sectionHeadText}>Blogging</h2>
        </motion.div>
      </div>
      

        <Slider/>
      
      
  
    </div>
  )
}

export default SectionWrapper(Blogging, "blogs");