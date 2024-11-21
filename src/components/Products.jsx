import React, { useState } from "react";
import Product from "./Product";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
const Products = () => {
  const projects = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel's approach and demonstrate how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about AI, industry trends, and design.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards, and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: false,
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
    },
    {
      title: "Rainfall",
      description:
        "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      live: true,
      case: true,
    },
  ];
  const [pos, setPos] = useState(0);
  const mover = (val) => setPos(val * 23);
  return (
    <div className="mt-32 relative">
      {projects.map((elem, index) => (
        <Product key={index} data={elem} mover={mover} count={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          className="window absolute w-[32rem] h-[23rem]  left-[44%] -translate-x-[50%] overflow-hidden"
        >
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
            className="w-full h-full"
          >
            <video
              className="w-full h-full object-cover rounded-2xl"
              autoPlay
              loop
              muted
              playsInline
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/arqitel-43.webm"
            ></video>
          </motion.div>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
            className="w-full h-full "
          >
            <video
              className="w-full h-full object-cover rounded-2xl"
              autoPlay
              loop
              muted
              playsInline
              src="https://i.imgur.com/ItWAopM.mp4"
            ></video>
          </motion.div>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
            className="w-full h-full"
          >
            <video
              className="w-full h-full object-cover rounded-2xl"
              autoPlay
              loop
              muted
              playsInline
              src="https://i.imgur.com/WfiAmyb.mp4"
            ></video>
          </motion.div>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
            className="w-full h-full"
          >
            <video
              className="w-full h-full object-cover rounded-2xl"
              autoPlay
              loop
              muted
              playsInline
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/umault-43.webm"
            ></video>
          </motion.div>
          <motion.div
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            animate={{ y: -pos + `rem` }}
            className="w-full h-full"
          >
            <video
              className="w-full h-full object-cover rounded-2xl"
              autoPlay
              loop
              muted
              playsInline
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/layoutland-43.webm"
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
