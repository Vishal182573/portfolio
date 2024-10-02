import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { motion } from 'framer-motion';

export default function Footer() {
  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/Vishal182573", label: "GitHub" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/vishal-sharma-368513258/", label: "LinkedIn" },
    { icon: SiLeetcode, url: "https://leetcode.com/u/vishal3838sharma/", label: "LeetCode" },
    { icon: SiGeeksforgeeks, url: "https://www.geeksforgeeks.org/user/vishal3838sharma/", label: "GeeksforGeeks" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl lg:text-3xl font-bold font-[Poppins] mb-2">
            Let's Create Something Awesome Together
          </h2>
          <p className="text-gray-400">Thanks for visiting my portfolio!</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center space-x-6 mb-8"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-3xl lg:text-4xl hover:text-blue-400 transition-colors duration-300"
              aria-label={link.label}
            >
              <link.icon />
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col lg:flex-row justify-between items-center text-sm lg:text-base"
        >
          <div className="mb-4 lg:mb-0 text-center lg:text-left">
            <h3 className="font-semibold mb-2">Contact Information</h3>
            <p className="flex items-center justify-center lg:justify-start mb-1">
              <FaEnvelope className="mr-2" /> sharmavs9205@gmail.com
            </p>
          </div>
          <div className="text-center lg:text-right">
            <p>&copy; 2024 Vishal-Sharma_Portfolio</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}