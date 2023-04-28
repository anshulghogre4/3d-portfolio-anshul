import React,{useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { myBlogs } from '../constants/constants';
import { Autoplay, Pagination, Navigation } from "swiper";

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
      <div className=''>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper   w-[50rem] h-[20rem] "
      >
        {myBlogs.map((myBlog, index) => (
  <SwiperSlide key={index} >
    <div  className='cursor-pointer  h-[25rem]' onClick={() => window.open(myBlog.source_code_link, "_blank")} >
      <img   src={myBlog.image} alt="images" />
      </div>
  </SwiperSlide>
))}
      </Swiper>
      </div>
  
    </div>
  )
}

export default SectionWrapper(Blogging, "blogs");