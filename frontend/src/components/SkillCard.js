import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Code, Database, Brain, Coins, Wrench } from 'lucide-react';

const skills = {
  "Programming & Blockchain": [
    "JavaScript", "TypeScript", "C++", "Python", "Solidity", "Smart Contracts"
  ],
  "Web & Desktop Development": [
    "HTML", "CSS", "Node.js", "Express.js", "React.js", "Next.js", "Electron.js", "gRPC", "Tailwind CSS", "Socket.io"
  ],
  "Databases & Storage": [
    "MongoDB", "PostgreSQL", "Prisma", "IPFS", "Pinata"
  ],
  "Machine Learning & Data Science": [
    "NumPy", "Pandas", "Scikit-Learn", "TensorFlow", "Matplotlib",
  ],
  "Web3": [
    "Web3.js", "Ethers.js", "Wallet Connection", "TronGrid", "Metamask Integration"
  ],
  "Development Tools & Environments": [
    "Git","Github", "Docker", "Linux", "VS Code", "Jupyter"
  ]
};

const categoryIcons = {
  "Programming & Blockchain": <Code />,
  "Web & Desktop Development": <Zap />,
  "Databases & Storage": <Database />,
  "Machine Learning & Data Science": <Brain />,
  "Web3": <Coins />,
  "Development Tools & Environments": <Wrench />
};

const SkillCard = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="mx-auto text-white rounded-xl overflow-hidden p-8 shadow-2xl"
    >
      <h2 className="text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
        My Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.keys(skills).map((category) => (
          <motion.div
            key={category}
            variants={itemVariants}
            className="bg-gray-800 rounded-lg p-6 shadow-lg min-h-48 transition-all duration-300 hover:shadow-xl hover:bg-gray-750"
            onClick={() => setSelectedCategory(category)}
          >
            <div className="flex items-center justify-center mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="text-blue-400 text-3xl"
              >
                {categoryIcons[category]}
              </motion.div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-center text-blue-400">{category}</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {skills[category].map((skill) => (
                <motion.div
                  key={skill}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, backgroundColor: "#4A5568" }}
                  className="bg-gray-700 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      {selectedCategory && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="mt-8 p-6 bg-gray-800 rounded-lg shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-4 text-blue-400">{selectedCategory} Details</h3>
          <p className="text-gray-300">
            Here you can add more detailed information about the selected category,
            including your experience, projects, or certifications related to these skills.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default SkillCard;