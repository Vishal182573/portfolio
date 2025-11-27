import React from 'react';
import { TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: "Onebox - AI-Powered Email Aggregator",
        description: "Designed a distributed system with real-time IMAP synchronization supporting multiple accounts with 30-day sync. Implemented Elasticsearch indexing and REST API architecture with Docker containerization. Built RAG model to generate email responses with dynamic inputs and webhook integration.",
        image: "/assets/onebox.png",
        link: "https://github.com/Vishal182573/onebox",
        technologies: ["Node.js", "TypeScript", "Next.js", "Elasticsearch", "Docker"]
    },
    {
        id: 2,
        title: "Probestemm - STEM Platform",
        description: "Architected multi-tiered system connecting 500+ students, teachers, companies. Built discussion forum and chat interface with relational database enabling expertise-based Q&A. Implemented webinar management and job portal features for internships with application tracking system.",
        image: "/assets/probe_stemm.png",
        link: "https://github.com/Probestem/probestemm",
        technologies: ["Next.js", "Node.js", "PostgreSQL", "REST APIs"]
    },
    {
      id: 3,
      title: "Pneumonia Detection CNN Model",
      description: "Trained CNN classification model on 5,856 chest X-ray images with 3.74M parameters achieving 94% training accuracy and 84% test accuracy. Implemented data augmentation pipeline with horizontal flip and rotation for improved generalization using TensorFlow and Keras.",
      image: "/assets/pneumonia.png",
      link: "https://colab.research.google.com/drive/1kQql-NfgKw3iJx81Y8geuJZ6aqK3N-_J",
      technologies: ["TensorFlow", "Keras", "Python", "CNN", "Supervised Learning"]
    },
    {
      id: 4,
      title: "Three60x.Ai - Player Re-Identification System",
      description: "Built ML-based tracking system processing 6,000+ player detections across multiple cameras. Deployed YOLO detection with ResNet-50 feature extraction achieving 90%+ identification accuracy. Optimized 2048-dimensional feature vectors supporting real-time tracking of 22 unique player IDs.",
      image: "/assets/player-reid.png",
      link: "https://github.com/Vishal182573/three60x.Ai",
      technologies: ["Python", "YOLO", "ResNet-50", "Computer Vision", "Machine Learning"]
    },
    {
        id: 5,
        title: "KC Global School Website",
        description: "An interactive website for KC Global School, featuring sections like a photo gallery, upcoming events, and an online application portal. Includes an admin panel for managing updates and content.",
        image: "/assets/kcglobal.png",
        link: "https://www.kcglobalschool.in/",
        technologies: ["Next.js", "Shadcn/UI", "Prisma", "PostgreSQL"]
    },
    {
        id: 6,
        title: "V-Chat",
        description: "A real-time chat application built with Socket.io and Next.js that offers instant communication, profile customization, and real-time indicators such as typing status.",
        image: "/assets/chat-app.jpg",
        link: "https://chat-app-pi-steel.vercel.app/",
        technologies: ["Next.js", "Socket.io", "Framer Motion", "MongoDB"]
    },
    {
        id: 7,
        title: "Avati Platform",
    description:
      "A full-fledged platform for booking cabs, managing drivers, and tracking rides in real-time. Built using WebSockets for real-time communication, Avati enables smooth coordination between passengers and drivers, including payment integration, ride history, and geo-location tracking.",
    image: "/assets/avati.png",
    link: "https://play.google.com/store/apps/details?id=com.avatii.avatiiapp&hl=en",
    technologies: ["Flutter", "Node.js", "Socket.io","Google Maps Api"]
  },
  {
    id: 8,
    title: "Doctor.AI (In Progress)",
    description: "A machine learning-based platform for diagnosing diseases and scheduling appointments with doctors. Doctor.AI leverages AI models to analyze symptoms and recommend potential treatments.",
    image: "/assets/doctor.ai_logo.jpeg",
    link: "https://doctor-ai-opal.vercel.app",
    technologies: ["Python", "TensorFlow","ChatGpt Api","Prisma", "FastAPI","PostgreSQL"]
  },
  {
    id: 9,
    title: "Fashion World",
    description:
      "A platform for aspiring fashion designers offering online courses, blogs, and fashion tips. Fashion World provides a comprehensive education portal for users to explore various aspects of fashion design.",
    image: "/assets/fashion.png",
    link: "https://fashion-world-tau.vercel.app/",
    technologies: ["Next.js","Shadcn/Ui", "Node.js", "MongoDB",]
  },
  {
    id: 10,
    title: "Travel Ease",
    description:
    "A comprehensive travel booking platform that integrates multiple services like cab bookings, hotel reservations, and car inquiries. The platform is powered by third-party API integrations, offering real-time updates and availability.",
    image: "/assets/travelease.png",
    link: "https://booking-system-amber.vercel.app/",
    technologies: ["Next.js","Framer Motion", "Node.js", "MongoDB",]
  },
  {
    id: 11,
    title: "BuildIt",
    description: "A comprehensive real estate platform that lists properties with detailed descriptions, high-quality images, and contact information for potential buyers. Features include property search, user authentication, and a responsive design.",
    image: "/assets/buildit.png",
    link: "https://builditwebsite.vercel.app/",
    technologies: ["NextAuth", "Next.js", "Tailwind CSS", "MongoDB","AWS S3"]
  },
  {
    id: 12,
    title: "ShopMe",
    description:
      "An e-commerce platform backend that supports features like trending posts, product listings, and requirement-based recommendations. The system also handles user authentication and a shopping cart for seamless purchases.",
    image: "/assets/shopme.png",
    link: "https://github.com/Vishal182573/shopeMEApp-backend",
    technologies: ["Node.js","Cloudinary", "MongoDB", "Flutter"]
  },
  
    {
        id: 13,
        title: "Vivah.com",
        description: "A matrimonial platform designed to connect individuals based on preferences, offering advanced filtering options, a clean UI, and secure profiles for users looking to find suitable matches.",
        image: "/assets/vivah.png",
        link: "https://vivah-com.vercel.app/",
        technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "AWS S3"]
    },
    {
        id: 14,
        title: "Ground Control Station",
        description: "A real-time monitoring and control system for drones using Electron.js and MAVSDK. Enables smooth coordination and management of drones through gRPC-based Node.js server with SITL software integration for testing.",
        image: "/assets/drone.png",
        link: "#",
        technologies: ["Electron.js", "MAVSDK", "gRPC", "Node.js", "TypeScript"]
    },
];

export default function Projects() {
    return (
        <div className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="projects">
            <h2 className="text-2xl lg:text-4xl text-center text-white">
                My <span className="font-extrabold">Projects</span>
            </h2>

            <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className={`flex justify-between items-center flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="lg:w-[500px] w-full rounded-2xl overflow-hidden">
                            <img
                                className="w-full h-full hover:scale-105 transition-all duration-500 cursor-pointer object-cover"
                                src={project.image}
                                alt={project.title}
                            />
                        </div>

                        <div className="lg:w-1/2 lg:space-y-6 space-y-4">
                            <h2 className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl">
                                {String(project.id).padStart(2, "0")}
                            </h2>
                            <p className="font-bold text-white text-xl lg:text-3xl">{project.title}</p>

                            <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.technologies?.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 text-xs rounded-full bg-gray-700/50 text-gray-300 border border-gray-600/50"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <a href={project.link} className="text-white mt-3 block" target="_blank" rel="noopener noreferrer">
                                <TbExternalLink size={23} />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}