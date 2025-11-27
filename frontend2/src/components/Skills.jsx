import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaPython, FaDatabase, FaJava, FaDocker, FaGitAlt, FaHtml5, FaCss3Alt,FaCode} from "react-icons/fa";
import { BiLogoPostgresql, BiLogoMongodb } from "react-icons/bi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiCplusplus, SiMysql, SiTensorflow, SiPytorch, SiNumpy,  SiKeras, SiScikitlearn, SiOpencv, SiPandas, SiElasticsearch,  SiFastapi, SiExpress, SiPostman, SiPrisma,SiFlask, SiSpringboot, } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";

export default function Skills() {
    const [skillCategories] = useState([
        {
            id: 1,
            category: "Programming Languages",
            skills: [
                { id: 1, name: "Java", icon: <FaJava size={40} /> },
                { id: 2, name: "C/C++", icon: <SiCplusplus size={40} /> },
                { id: 3, name: "Python", icon: <FaPython size={40} /> },
                { id: 4, name: "JavaScript", icon: <FaJs size={40} /> },
                { id: 5, name: "TypeScript", icon: <SiTypescript size={40} /> },
                { id: 6, name: "SQL", icon: <FaDatabase size={40} /> },
            ]
        },
        {
            id: 2,
            category: "Web Development",
            skills: [
                { id: 6, name: "HTML", icon: <FaHtml5 size={40} /> },
                { id: 7, name: "CSS", icon: <FaCss3Alt size={40} /> },
                { id: 1, name: "React", icon: <FaReact size={40} /> },
                { id: 2, name: "Next.js", icon: <RiNextjsFill size={40} /> },
                { id: 3, name: "Node.js", icon: <FaNodeJs size={40} /> },
                { id: 4, name: "Express.js", icon: <SiExpress size={40} /> },
                { id: 5, name: "FastAPI", icon: <SiFastapi size={40} /> },
                { id: 9, name: "Flask", icon: <SiFlask size={40} /> },
                { id: 8, name: "Prisma", icon: <SiPrisma size={40} /> },
                { id: 10, name: "SpringBoot", icon: <SiSpringboot size={40} /> },
            ]
        },
        {
            id: 3,
            category: "Machine Learning & AI",
            skills: [
                { id: 6, name: "Pandas", icon: <SiPandas size={40} /> },
                { id: 7, name: "Numpy", icon: <SiNumpy size={40} /> },
                { id: 4, name: "Scikit-learn", icon: <SiScikitlearn size={40} /> },
                { id: 1, name: "TensorFlow", icon: <SiTensorflow size={40} /> },
                { id: 2, name: "PyTorch", icon: <SiPytorch size={40} /> },
                { id: 3, name: "Keras", icon: <SiKeras size={40} /> },
                { id: 5, name: "OpenCV", icon: <SiOpencv size={40} /> },
            ]
        },
        {
            id: 4,
            category: "Database Technologies",
            skills: [
                { id: 1, name: "PostgreSQL", icon: <BiLogoPostgresql size={40} /> },
                { id: 2, name: "MongoDB", icon: <BiLogoMongodb size={40} /> },
                { id: 3, name: "MySQL", icon: <SiMysql size={40} /> },
                { id: 5, name: "Elasticsearch", icon: <SiElasticsearch size={40} /> },
            ]
        },
        {
            id: 5,
            category: "DevOps & Tools",
            skills: [
                { id: 1, name: "Git", icon: <FaGitAlt size={40} /> },
                { id: 2, name: "Docker", icon: <FaDocker size={40} /> },
                { id: 3, name: "VS Code", icon: <FaCode size={40} /> },
                { id: 4, name: "GitHub", icon: <VscGithub size={40} /> },
                { id: 5, name: "Postman", icon: <SiPostman size={40} /> },
            ]
        }
    ]);

    const [experiences] = useState([
        {
            id: 1,
            company: "Anonymous Company",
            role: "Will join as Software Development Engineer",
            period: "Jan 2026 ---",
            description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            logo: "/assets/coinster.svg",
        },
        {
            id: 2,
            company: "Coinster Fintech Pvt. Ltd.",
            role: "Software Engineering Intern",
            period: "Jan 2025 - June 2025",
            description:
                "Built AI dispute resolution system with real-time chat interface using Python for escrow payment processing. Achieved 92% accuracy in automated fault detection through machine learning algorithms. Implemented CI/CD pipeline for automated testing and deployment ensuring code quality and reliability.",
            logo: "/assets/coinster.svg",
        },
        {
            id: 3,
            company: "Clay Web Design",
            role: "Software Development Intern",
            period: "Mar 2024 - Jan 2025",
            description:
                "Developed scalable back-end systems serving 2000+ concurrent users using Python, FastAPI, and REST APIs. Collaborated with cross-functional teams using Agile to deliver 7 production applications. Optimized distributed system performance achieving 25% faster response times through best practices.",
            logo: "/assets/clay.svg",
        },
    ]);

    return (
        <div className="mt-3 lg:mt-16" id="skills">
            <div className="px-5 lg:px-28">

                <motion.h2
                    className="text-2xl lg:text-4xl text-center"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    My <span className="font-extrabold">Skills</span>
                </motion.h2>

                {/* Skill Categories */}
                <div className="mt-7 lg:mt-12 space-y-8 lg:space-y-12">
                    {skillCategories.map((category, categoryIndex) => (
                        <div key={category.id}>
                            <motion.h3
                                className="text-xl lg:text-2xl font-bold mb-5 lg:mb-8"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                                viewport={{ once: true }}
                            >
                                {category.category}
                            </motion.h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.id}
                                        className="bg-white border-2 hover:bg-black text-black hover:text-white transition-all duration-300 cursor-pointer border-black rounded-lg p-4 h-32 lg:h-36 flex flex-col items-center justify-center gap-3"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ 
                                            duration: 0.5, 
                                            ease: "easeOut", 
                                            delay: skillIndex * 0.05 
                                        }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <div className="transition-colors">
                                            {skill.icon}
                                        </div>
                                        <p className="text-sm lg:text-base font-semibold text-center">{skill.name}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Experience Section */}
            <div className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16">
                <motion.h2
                    className="text-2xl lg:text-4xl text-center text-white"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    My <span className="font-extrabold">Experience</span>
                </motion.h2>

                {/* Experience Cards */}
                <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            className="bg-black p-5 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all cursor-pointer"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 10,
                                delay: index * 0.2,
                            }}
                            viewport={{ once: true }}
                        >
                            <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
                                <div className="flex items-center gap-5">
                                    <img className="w-7" src={exp.logo} alt="" />
                                    <h2 className="font-semibold text-white text-lg lg:text-xl">
                                        {exp.role} at {exp.company}
                                    </h2>
                                </div>
                                <span className="text-[#D4D4D8] font-semibold text-sm mt-4 lg:mt-0 lg:text-base">
                                    {exp.period}
                                </span>
                            </div>
                            <p className="text-[#D4D4D8] mt-6 text-sm/6 lg:text-base font-light">
                                {exp.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
}