import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  
  {
    name: "Vivah.com",
    description: "A matrimonial platform designed to connect individuals based on preferences, offering advanced filtering options, a clean UI, and secure profiles for users looking to find suitable matches.",
    imgSrc: "vivah.png",
    link: "https://vivah-com.vercel.app/",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL","Fuzzy Sort Library","Payment Apis","AWS S3"]
  },
  {
    name: "Super3 Wallet (In Progress)",
    description: "A blockchain-based wallet service built using Web3 and Solidity, designed to offer secure, decentralized, and seamless transactions. Super3 aims to be a one-stop solution for all cryptocurrency wallet needs.",
    imgSrc: "super3.png",
    link: "/",
    technologies: ["Web3.js", "Solidity", "Next.js", "Ethereum","Pinata","hardhat","Payment Apis"]
  },
  {
    name: "Ground Control Station (Confidential)",
    description: "A real-time monitoring and control system for drones using Electron.js and MAVSDK. This platform enables smooth coordination and management of drones through a gRPC-based Node.js server, with SITL software integration for testing. It features a user-friendly interface built using Shadcn components, ensuring optimal performance and reliability for mission-critical operations.",
    imgSrc: "drone.png",
    link:"/",
    technologies: ["Electron.js", "Shadcn/UI", "MAVSDK", "SITL", "gRPC", "Node.js", "TypeScript"]
  },  
  {
    name: "Probe Stem (In Progress)",
    description: "A scientific research platform aimed at connecting researchers and encouraging collaboration on STEM-based projects. It allows users to showcase their work, connect with peers, and explore groundbreaking research.",
    imgSrc: "probe_stemm.png",
    link: "https://probe-stemm.vercel.app/",
    technologies: ["React", "Node.js", "MongoDB", "Cloudinary"]
  },
  {
    name: "Avati Platform",
    description:
      "A full-fledged platform for booking cabs, managing drivers, and tracking rides in real-time. Built using WebSockets for real-time communication, Avati enables smooth coordination between passengers and drivers, including payment integration, ride history, and geo-location tracking.",
    imgSrc: "avati.png",
    link: "https://github.com/Vishal182573/AVATII-new",
    technologies: ["Flutter", "Node.js", "Socket.io","Google Maps Api"]
  },
  {
    name: "KC Global School Website",
    description:
      "An interactive website for KC Global School, featuring sections like a photo gallery, upcoming events, and an online application portal. The platform includes an admin panel for managing updates and content.",
    imgSrc: "kcglobal.png",
    link: "https://www.kcglobalschool.in/",
    status: "Completed",
    technologies: ["Next.js", "Shadcn/Ui", "Prisma", "PostgreSQL"]
  },
  {
    name: "V-Chat",
    description: "A real-time chat application built with Socket.io and Next.js that offers instant communication, profile customization, and real-time indicators such as typing status.",
    imgSrc: "chat-app.jpg",
    link: "https://chat-app-pi-steel.vercel.app/",
    technologies: ["Next.js", "Socket.io", "Framer Motion", "MongoDB"]
  },
  {
    name: "Doctor.AI (In Progress)",
    description: "A machine learning-based platform for diagnosing diseases and scheduling appointments with doctors. Doctor.AI leverages AI models to analyze symptoms and recommend potential treatments.",
    imgSrc: "doctor.ai_logo.jpeg",
    link: "https://doctor-ai-opal.vercel.app",
    technologies: ["Python", "TensorFlow","ChatGpt Api","Prisma", "FastAPI","PostgreSQL"]
  },
  {
    name: "Fashion World",
    description:
      "A platform for aspiring fashion designers offering online courses, blogs, and fashion tips. Fashion World provides a comprehensive education portal for users to explore various aspects of fashion design.",
    imgSrc: "fashion.png",
    link: "https://fashion-world-tau.vercel.app/",
    technologies: ["Next.js","Shadcn/Ui", "Node.js", "MongoDB",]
  },
  {
    name: "Travel Ease",
    description:
    "A comprehensive travel booking platform that integrates multiple services like cab bookings, hotel reservations, and car inquiries. The platform is powered by third-party API integrations, offering real-time updates and availability.",
    imgSrc: "travelease.png",
    link: "https://booking-system-amber.vercel.app/",
    technologies: ["Next.js","Framer Motion", "Node.js", "MongoDB",]
  },
  {
    name: "BuildIt",
    description: "A comprehensive real estate platform that lists properties with detailed descriptions, high-quality images, and contact information for potential buyers. Features include property search, user authentication, and a responsive design.",
    imgSrc: "buildit.png",
    link: "https://builditwebsite.vercel.app/",
    technologies: ["NextAuth", "Next.js", "Tailwind CSS", "MongoDB","AWS S3"]
  },
  {
    name: "ShopMe",
    description:
      "An e-commerce platform backend that supports features like trending posts, product listings, and requirement-based recommendations. The system also handles user authentication and a shopping cart for seamless purchases.",
    imgSrc: "shopme.png",
    link: "https://github.com/Vishal182573/shopeMEApp-backend",
    technologies: ["Node.js","Cloudinary", "MongoDB", "Flutter"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4
    }
  }
};

export default function ProjectsGrid() {
  return (
    <div className="min-h-screen  py-20" id="Projects">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Featured Projects
          </h2>
          <p className="mt-4 text-gray-400 text-lg">Exploring innovation through code</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <a href={project.link} >
            <motion.div
              key={project.name}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 backdrop-blur-sm"
            >
              <div className="relative group h-48 overflow-hidden">
                <motion.img
                  src={project.imgSrc}
                  alt={project.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-purple-600 p-3 rounded-full text-white"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                    {project.link.includes('github') && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-gray-700 p-3 rounded-full text-white"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.name}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 text-xs rounded-full bg-gray-700/50 text-gray-300 border border-gray-600/50"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}