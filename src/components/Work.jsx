import React, { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

const Work = () => {
  const [images, setImages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "60%",
      left: "50%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  // Function to update the active images
  const updateActiveImages = (activeIndices) => {
    setImages((prevImages) =>
      prevImages.map((image, index) => ({
        ...image,
        isActive: activeIndices.includes(index),
      }))
    );
  };

  // Subscribe to scroll progress changes
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const scrollPercent = Math.floor(progress * 100); // Convert to a percentage

    switch (scrollPercent) {
      case 0:
        updateActiveImages([]);
        break;
      case 1:
        updateActiveImages([0]);
        break;
      case 2:
        updateActiveImages([0, 1]);
        break;
      case 3:
        updateActiveImages([0, 1, 2]);
        break;
      case 4:
        updateActiveImages([0, 1, 2, 3]);
        break;
      case 6:
        updateActiveImages([0, 1, 2, 3, 4]);
        break;
      default:
        updateActiveImages([]);
        break;
    }
  });

  return (
    <div className="w-full">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[30vw] leading-none font-medium select-none tracking-tight">
          work
        </h1>
        <div className="absolute w-full h-full top-0">
          {images.map(
            (image, index) =>
              image.isActive && (
                <img
                  key={index}
                  src={image.url}
                  alt={`Image ${index}`}
                  className="absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                  style={{
                    top: image.top,
                    left: image.left,
                  }}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
