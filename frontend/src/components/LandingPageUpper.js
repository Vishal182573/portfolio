import React from "react";
import TypingAnimation from "./TypingAnimation";
import { motion } from "framer-motion";

export default function LandingPageUpper() {
  return (
    <div id="Home" className="min-h-screen flex items-center ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 mb-12 lg:mb-0 flex flex-col justify-center items-start"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              Hi, I'm{" "}
              <span className="text-[#98FF98]">Vishal Sharma</span>
            </h1>
            <p className="text-2xl lg:text-3xl text-gray-300 mb-4">
              and I am a passionate
            </p>
            <div className="text-xl lg:text-4xl text-[#c6a1e8] font-semibold">
              <TypingAnimation />
            </div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-[#aaaaf4] text-black font-semibold py-3 px-6 rounded-full hover:bg-[#8888f0] transition-colors"
              href="https://www.linkedin.com/in/vishal-sharma-368513258"
            >
              Let's Connect
            </motion.a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <img
              src="soft-dev-img.png"
              alt="Developer"
              className="w-full max-w-md mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}