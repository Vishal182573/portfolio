import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = {
  "Languages": ["JavaScript", "TypeScript", "C++", "Python"],
  "Web Development": ["HTML", "CSS", "Node.js", "Express.js", "React.js", "Next.js", "shadcn/ui", "Web Sockets","Prisma"],
  "Databases": ["MongoDB", "MySQL","PostgreSQL"],
  "Machine Learning": ["NumPy", "Pandas", "Scikit-Learn", "TensorFlow", "Keras", "PyTorch", "Matplotlib", "Seaborn"]
};

const SkillCard = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      className="mx-auto  text-white rounded-xl overflow-hidden p-8 shadow-2xl"
    >
      <h2 className="text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
        My Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.keys(skills).map((category) => (
          <motion.div key={category} variants={itemVariants} className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-center text-blue-400">{category}</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {skills[category].map((skill) => (
                <motion.div
                  key={skill}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, backgroundColor: "#4A5568" }}
                  className="bg-gray-700 px-3 py-1 rounded-full text-sm lg:text-lg font-medium transition-all duration-300"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;