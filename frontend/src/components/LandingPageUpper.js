import React from "react";
import TypingAnimation from "./TypingAnimation";
import { motion } from "framer-motion";
export default function LandingPageUpper() {
  return (
    <div id="Home">
      <div className="flex-row-edited my-7 flex justify-between items-center px-24 lg:my-0 py-8 flex-col space-y-14 lg:space-y-0 ">
        <div className="land-page-about text-lg lg:text-3xl font-semibold text-center flex justify-between items-center ">
          <div className="inner-land-page-about-forFlex flex-col w-[35rem]">
            <div className="overflow-hidden">
              <motion.div
               initial={{scale:0.5}}
                animate={{
                  x: 0,
                  y: 0,
                  scale: 1,
                  rotate: 0,
                }}
                className={`w-[auto] lg:py-2 lower-animation translate-y-[100%] ease-in-out duration-700`}
              >
                {/*w-[35rem] gives error due to size*/}
                Hii, My name is
                <span className="text-[#98FF98]"> Vishal Sharma</span>
              </motion.div>
            </div>
            <div className="lg:py-2 overflow-hidden">
              <motion.div
                initial={{scale:0.5}}
                animate={{
                  x: 0,
                  y: 0,
                  scale: 1,
                  rotate: 0,
                }}
                className={`translate-y-[100%] ease-in-out duration-700`}
              >
                and I am a passionate
              </motion.div>
            </div>
            <motion.div 
            initial={{scale:0.5}}
                animate={{
                  x: 0,
                  y: 0,
                  scale: 1,
                  rotate: 0,
                }}
            className="text-[#c6a1e8] lg:py-2 translate-y-[100%] ease-in-out duration-700">
              <TypingAnimation />
            </motion.div>
          </div>
        </div>
        <div className="land-page-image lg:block overflow-hidden">
          <motion.div
           initial={{scale:0.5}}
            animate={{
              x: 0,
              y: 0,
              scale: 1,
            }}
            className="translate-y-[-100%] duration-700 ease-in-out"
          >
            <img src={`soft-dev-img.png`} alt="" className={`w-[30rem]`} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
