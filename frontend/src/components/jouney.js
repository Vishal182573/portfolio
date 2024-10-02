import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function ResponsiveExperienceTimeline() {
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef(null);

  const Experiences = [
    {
        institute_name:"Stanford Convent School (High School)",
        img:"stanford.png",
        description:"Academic Excellence: Attended Stanford Convent School and secured 85% in high school demonstrating a strong foundation in academics and a commitment to learning.",
        id:"1",
      },
      {
        institute_name:"St. Giri Public School (Senior Secondary):",
        img:"st_giri.png",
        description:"Outstanding Academic Achievement: Completed senior secondary schooling at St. Giri public School with an impressive 92.8% in board examinations, showcasing sustained academic excellence and a high level of dedication",
        id:"2",
      },
      {
        institute_name:"Self-Taught and Advanced Web Development:",
        img:"next_logo.png",
        description:"Embarked on a self-learning journey in web development, mastering HTML, CSS, and JavaScript, and advancing to sophisticated frameworks and libraries including Tailwind CSS, React, Next.js, Shadcn with React, Node.js, Express.js, and MongoDB",
        id:"3",
      },
      {
        institute_name:"Data Structures Proficiency:",
        img:"c++_logo.png",
        description:"Engaged in systematic problem-solving with C++ by completing over 750+ problems across GeeksForGeeks and LeetCode, enhancing proficiency in data structures and algorithms. Regularly participate in contests on both platforms and attend contests on Codeforces, developing a logical and analytical approach to problem-solving",
        id:"4",
      },
      {
        institute_name: "Learning Machine Learning",
        img: "ml_logo.png",
        description: "Explored machine learning libraries like TensorFlow, Scikit-learn, NumPy, Pandas, and Matplotlib. Implemented models such as linear regression, decision trees, and neural networks. Proficient in data preprocessing, feature engineering, and model evaluation. Delved into deep learning with CNNs for image recognition and RNNs for sequence modeling",
        id:"5",
      },
      {
        institute_name:"Pursuing B.Tech in Software Engineering (DTU):",
        img:"Dtu_logo.png",
        description:"Current Pursuit: Studying Software Engineering at DTU, Enhancing theoretical knowledge to complement practical skills gained in web development and data structures.",
        id:"6",
      },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      ref={timelineRef}
      className="experience-timeline mt-16 mb-4 px-2 lg:px-16 "
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      id="Past-Experience"
      style={{ fontFamily: "Poppins" }}
    >
      {/* Mobile View */}
      <div className="lg:hidden space-y-8">
        {Experiences.map((experience, index) => (
          <motion.div 
            key={experience.id} 
            className="flex items-start space-x-4"
            variants={itemVariants}
          >
            <div className="flex-shrink-0 w-24">
              <img src={experience.img} alt="" className="h-12 w-12 mx-auto bg-white rounded-full shadow-lg" />
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-bold mb-2">{experience.institute_name}</h3>
              <p className="text-sm text-gray-300">{experience.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex flex-col items-center">
        <div className="w-full h-1 bg-white mb-3"></div>
        <div className="flex justify-between w-full">
          {Experiences.map((experience, index) => (
            <motion.div 
              key={experience.id} 
              className="flex flex-col items-center w-48"
              variants={itemVariants}
            >
              <img src={experience.img} alt="" className="h-16 w-16 mb-4 bg-white rounded-full " />
              <div className="h-16 w-1 bg-white"></div>
              <h3 className="text-center text-sm font-bold mt-2 mb-2">{experience.institute_name}</h3>
              <p className="text-center text-xs text-gray-300">{experience.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}