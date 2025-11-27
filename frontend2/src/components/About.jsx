import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row" id="about">
            <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 80, damping: 10 }}
                viewport={{ once: true }}
            >
                <img src="/assets/about-me.svg" alt="About Me Illustration" />
            </motion.div>

            <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
                    About <span className="font-extrabold">Me</span>
                </h2>

                <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
                    I'm a dedicated full-stack developer and machine learning enthusiast who loves solving problems and building things that genuinely make an impact. My journey has always been driven by curiosity — especially toward AI, algorithms, and how technology can simplify complex challenges.
                </p>

                <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
                    Competitive programming has played a huge role in shaping the way I think. Over the years, I've solved 1100+ problems, earned titles like <span className="font-semibold">Knight on LeetCode</span> and <span className="font-semibold">Specialist on Codeforces</span>, and achieved global ranks in major contests. These experiences constantly push me to think sharper, faster, and more efficiently.
                </p>

                <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
                    I'm deeply fascinated by AI and machine learning — from understanding how models learn to experimenting with real-world applications. I’ve also explored mobile development through React Native, creating meaningful experiences beyond the web. Outside of coding, I enjoy sharing insights online and staying connected with communities that celebrate innovation and learning.
                </p>

            </motion.div>
        </div>
    );
}