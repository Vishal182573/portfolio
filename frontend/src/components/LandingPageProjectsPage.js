import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Doctor.AI",
    description:
      "A platform for diagnosing patient diseases using machine learning models.",
    imgSrc: "doctor.ai_logo.jpeg",
    link: "/doctor-ai",
  },
  {
    name: "Chat-App",
    description:
      "A real-time chat application built with Socket.io for seamless communication.",
    imgSrc: "chat-app.jpg",
    link: "/chat-app",
  },
  {
    name: "Chess.com Clone",
    description:
      "A clone of Chess.com featuring real-time chess board state management with Socket.io.",
    imgSrc: "chess_logo.png",
    link: "/chess-clone",
  },
];

export default function LandingPageProjectsPage() {
  return (
    <div
      className="border-t-[1px] border-[#c4c4f5] mx-6 px-6 mb-6 py-4 lg:px-6"
      id="Projects"
    >
      <div className="project-container h-10 flex justify-start items-center text-2xl font-bold font-[Poppins] mt-4 border-b-2 border-[#c4c4f8]">
        <span className="bg-white border-2 w-4 h-4 rounded-full mx-2"></span>
        Projects
      </div>
      <div className="projects-container-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 my-4">
        {projects.map((project) => (
          <motion.div
            key={project.name}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            className="projects-container-card bg-[#2c2c2c]  rounded-xl overflow-hidden flex flex-col items-center transition-transform duration-300 p-4"
          >
            <div className="card-img mb-3 flex justify-center">
              <a href={project.link}>
                <img
                  src={project.imgSrc}
                  alt={project.name}
                  className="h-[18vh] object-cover"
                />
              </a>
            </div>
            <div className="card-content flex justify-center font-bold font-[Poppins] text-center text-white py-2">
              {project.name}
            </div>
            <div className="card-description text-center text-white px-4">
              {project.description}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
