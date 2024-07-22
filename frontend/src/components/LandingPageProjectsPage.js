import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Doctor.AI",
    description:
      "A platform for diagnosing patient diseases using machine learning models.",
    imgSrc: "doctor.ai_logo.jpeg",
    link: "https://doctor-ai-opal.vercel.app",
  },
  {
    name: "Chat-App",
    description:
      "A real-time chat application built with Socket.io for seamless communication.",
    imgSrc: "chat-app.jpg",
    link: "https://chat-app-pi-steel.vercel.app",
  },
  {
    name: "Chess.com Clone",
    description:
      "A clone of Chess.com featuring real-time chess board state management with Socket.io.",
    imgSrc: "chess_logo.png",
    link: "/",
  },
];

export default function LandingPageProjectsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-8 pb-8"
      id="Projects"
    >
      <div className="container mx-auto px-4">
      <motion.h2 
        className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-200 to-gray-200"
      >
        Projects
      </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={project.imgSrc}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <a href={project.link}
                  className="inline-block bg-[#aaaaf4] text-black font-semibold py-2 px-4 rounded hover:bg-[#8888f0] transition-colors"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}