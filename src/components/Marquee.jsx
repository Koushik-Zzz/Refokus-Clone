import React from 'react';
import { motion } from "framer-motion";
const Marquee = ({ index, image, direction }) => {
  return (
    <div className='flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden'>
      <motion.div className='flex flex-shrink-0 gap-40 py-10 pr-40'
      initial={{x: direction === "left" ? "0" : "-100%"}}
      animate= {{x: direction === "left" ? "-100%" : "0"}}
      transition={{ease: "linear", duration: 15, repeat : Infinity}}
      >
      {image.map((url, index) => (
        <img key={index} src={url} alt={index} className='' />
      ))}
      </motion.div>
      <motion.div className='flex flex-shrink-0 gap-40 py-10 pr-40'
      initial={{x: direction === "left" ? "0" : "-100%"}}
      animate= {{x: direction === "left" ? "-100%" : "0"}}
      transition={{ease: "linear", duration: 15, repeat : Infinity}}
      >
      {image.map((url, index) => (
        <img key={index} src={url} alt={index} className='' />
      ))}
      </motion.div>

    </div>
  );
};

export default Marquee;