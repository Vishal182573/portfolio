import React, { useEffect, useRef, useState } from 'react';

const MovableCircle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState({ x: 1, y: 1 });
  const circleRef = useRef(null);
  let requestId;

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const xdiff = clientX - position.x;
    const ydiff = clientY - position.y;

    setPosition({ x: clientX, y: clientY });

    let scaleX, scaleY;

    if (xdiff <= 0.8) scaleX = 0.8;
    else if (xdiff > 0.8 && xdiff < 1.2) scaleX = xdiff;
    else scaleX = 1.2;

    if (ydiff <= 0.8) scaleY = 0.8;
    else if (ydiff > 0.8 && ydiff < 1.2) scaleY = ydiff;
    else scaleY = 1.2;

    setScale({ x: scaleX, y: scaleY });
  };

  const animate = () => {
    circleRef.current.style.transform = `translate(${position.x}px, ${position.y}px) scale(${scale.x}, ${scale.y})`;
    requestId = requestAnimationFrame(animate);
  };

  useEffect(() => {

    const handleMouseUp = () => {
      cancelAnimationFrame(requestId);
      setTimeout(() => {
        setScale({ x: 1, y: 1 });
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(requestId);
    };
  }, [position.x, position.y, scale.x, scale.y]);

  return (
    <div
      ref={circleRef}
      id="movablecircle"
      className="h-[12px] w-[12px] bg-white rounded-full absolute z-[999] opacity-100 hidden lg:block"
    ></div>
  );
};

export default MovableCircle;


