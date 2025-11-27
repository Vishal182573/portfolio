import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
    return (
        <div className="mt-20" id="home">
            <div className="flex justify-between py-10 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse">

                <motion.div
                    className="lg:w-[45%]"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >

                    <motion.div
                        className="text-2xl lg:text-5xl flex flex-col mt-8 lg:mt-0 gap-2 lg:gap-5 text-nowrap"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { staggerChildren: 0.2, ease: "easeInOut" },
                            },
                        }}
                    >
                        <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                            <TypeAnimation
                                sequence={[
                                    'Hello, I am Vishal Sharma',
                                    1000,
                                    'I like Problem Solving',
                                    1000,
                                    'I am a Machine Learning Enthusiast',
                                    1000,
                                    'I am a Competitive Programmer',
                                    1000,
                                    'I explore React Native as well',
                                    1000,
                                ]}
                                speed={10}
                                style={{ fontWeight: 600 }}
                                repeat={Infinity}
                            />
                        </motion.h2>

                        {/* Your styled text stays – but now it's your TITLE, not repeated */}
                        <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                            <span className="font-extrabold">Software</span>{" "}
                            <span
                                className="text-white font-extrabold"
                                style={{ WebkitTextStroke: "1px black" }}
                            >
                                Engineer
                            </span>
                        </motion.h2>

                        <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                            Based In <span className="font-extrabold">India.</span>
                        </motion.h2>
                    </motion.div>


                    <motion.p
                        className="text-[#71717A] text-sm lg:text-base mt-5"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        Passionate about problem-solving and technology, I work as a full-stack developer with a deep interest in AI and machine learning. I love exploring new ideas, improving my logical thinking through competitive programming, and building projects that blend creativity with real impact. My goal is to keep growing, experimenting, and contributing to meaningful innovations in tech.
                    </motion.p>

                    <motion.div
                        className="flex items-center gap-x-5 mt-10 lg:mt-14"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 1 }}
                    >

                        <motion.a
                            href="mailto:sharmavs9205@gmail.com"
                            className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                            whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <BiLogoGmail className="w-4 h-4 lg:w-5 lg:h-5" />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/vishal-sharma-368513258"
                            className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                            whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <IoLogoLinkedin className="w-4 h-4 lg:w-5 lg:h-5" />
                        </motion.a>
                        <motion.a
                            href="https://x.com/Ded_Coderx"
                            className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                            whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <IoLogoTwitter className="w-4 h-4 lg:w-5 lg:h-5" />
                        </motion.a>
                        <motion.a
                            href="https://github.com/Vishal182573"
                            className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                            whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <BsGithub className="w-4 h-4 lg:w-5 lg:h-5" />
                        </motion.a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="lg:w-[55%] w-full"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    <img className="h-full w-full" src="/assets/hero-vector.svg" alt="Hero Vector" />
                </motion.div>
            </div>
        </div>
    );
}