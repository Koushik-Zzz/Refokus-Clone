import React from "react";
import Button from "./Button";
const Nav = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-3  items-center flex justify-between border-b-[1px] border-zinc-700">
      <div className="nleft flex item-center">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt="logo"
        ></img>
        <div className="links flex gap-10 ml-20">
          {["Home", "Worker", "culture", "", "news"].map((elem, index) =>
            elem.length === 0 ? (
              <span key={index} className="w-[2px] h-7 bg-zinc-700"></span>
            ) : (
              <a key={index} className="text-sm ml-10 flex items-center gap-1" href="#">
                {index === 1 ? (
                  <span
                    key={index}
                    style={{ boxShadow: "rgb(0, 255, 25) 0px 0px 0.55em" }}
                    className="inline-block w-1 h-1 bg-green-500 rounded-full"
                  ></span>
                ) : null}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button></Button>
    </div>
  );
};

export default Nav;
