import React from "react";

export default function VerticalProgressLineSm() {
  const Experiences=[
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
      description:"Engaged in systematic problem-solving with C++ by completing over 350 questions on Geeks for Geeks and over 300 questions on LeetCode, enhancing proficiency in data structures and algorithms. Regularly participate in contests on both platforms and attend contests on Codeforces, developing a logical and analytical approach to problem-solving",
      id:"4",
    },
    {
      institute_name: "Learning Machine Learning",
      img: "ml_logo.png",
      description: "Explored various machine learning libraries including TensorFlow, PyTorch, and Scikit-learn. Implemented diverse machine learning models such as linear regression, decision trees, and neural networks using these libraries. Demonstrated proficiency in data preprocessing, feature engineering, and model evaluation techniques. Moved forward to delve into deep learning, exploring convolutional neural networks (CNNs) and recurrent neural networks (RNNs) for image recognition and sequence modeling tasks.",
      id:"5",
    },
    {
      institute_name:"Pursuing B.Tech in Software Engineering (DTU):",
      img:"Dtu_logo.png",
      description:"Current Pursuit: Studying Software Engineering at DTU, Enhancing theoretical knowledge to complement practical skills gained in web development and data structures.",
      id:"6",
    },
  ]
  return (
    <div >
      <div
        className="vertical-progress-line w-[1.5px] h-[auto] lg:hidden bg-white ml-12 flex-col space-y-[6vh] "
        style={{ fontFamily: "Poppins" }}
      >
      {
        Experiences.map((Experience,index=Experience.id)=>(
          <div className={`items flex space-x-2 w-[80vw] m-auto`} key={index}>
          <div className="sm-items">
            <div className="head text-sm font-bold p-2">{Experience.institute_name}</div>
            <div className="point-on-vertical-line w-[12rem] h-[1.5px] m-auto bg-white "></div>
            <div className="sm-items-img">
              <img src={Experience.img} alt="" className="h-10 mx-auto my-4 bg-white" />
            </div>
          </div>
          <div className="content-on-vertical-line w-[60vw] text-opacity-60 text-slate-100 text-xs">{Experience.description}</div>
        </div>
        ))
      }
      </div>
    </div>
  );
}
