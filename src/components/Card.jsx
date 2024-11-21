import React from "react";
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";
const Card = ({width , start,para, hover=false}) => {
  return (
    <motion.div whileHover={{backgroundColor: hover && "#7542ff", padding: "25px"}} className={`bg-zinc-600 p-5 rounded-xl ${width} min-h-[30rem] flex flex-col justify-between`}>
      <div>
        <div className="w-full flex justify-between items-center">
          <h3>One Heading</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-modium"> What ever</h1>
      </div>
      <div className="down w-full mt-60">
        {
            start === true && (
                <>
                <h1 className="text-5xl font-bold tracking-tighter leading-none">Start a Project</h1>
                <button className="rounded-full py-2 px-5 border-zing-50 border-[1px] mt-5">Contact us</button>
                </>
                
            )
        }
       {
        para &&(
            <p className="text-sm text-zinc-500 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        )
       }
      </div>
    </motion.div>
  );
};

export default Card;
