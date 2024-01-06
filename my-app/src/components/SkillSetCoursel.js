// Carousel.js
import React, { useState, useEffect } from 'react';

const SkillSetCoursel = () => {
  const images = [
    ["html",'html_logo.png'],
    ["css",'css_logo.png'],
    ["Javascript",'js_logo.png'],
    ["react js",'react_logo.png'],
    ["Node.js",'nodejs_logo.png'],
    ["MongoDb",'mongodb_logo.png'],
    ["C++",'c++.logo.png']
    // Add more image URLs as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="mt-14 relative overflow-hidden w-[50vw]" style={{zIndex:5}}>
      <div
        className="flex transition-transform duration-300 ease-in-out transform"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-col flex-shrink-0 justify-center px-14 space-y-10 items-center">
            <img src={image[1]} alt={`Slide ${index + 1}`} className="w-[30vw] lg:w-[20vw] mx-auto bg-[#e3e3f6]" />
            <div className="skill-name mx-auto font-bold text-3xl">{image[0]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSetCoursel;
