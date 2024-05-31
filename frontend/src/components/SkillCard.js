import React from 'react';

const skills = {
  "Languages": ["JavaScript", "TypeScript", "C++", "Python"],
  "Web Development": ["HTML", "CSS", "Node.js", "Express.js", "React.js", "Next.js", "shadcn/ui", "Socket.IO"],
  "Databases": ["MongoDB", "MySQL"],
  "Machine Learning": ["NumPy", "Pandas", "Scikit-Learn", "TensorFlow", "Keras", "PyTorch", "Matplotlib", "Seaborn"]
};

const SkillCard = () => {
  return (
    <div className=" mx-auto bg-[#1a1a1a] text-white rounded-lg overflow-hidden p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 ">
        {Object.keys(skills).map((category) => (
          <div key={category}>
            <h3 className="text-xl font-bold mb-4 text-center">{category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 lg:gap-4">
              {skills[category].map((skill) => (
                <div
                  key={skill}
                  className="bg-gray-800 my-2 p-4  rounded-lg shadow-md transform hover:scale-105 hover:bg-gray-700 transition-transform duration-300 text-center lg:min-w-[150px] min-w-[200px]"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
