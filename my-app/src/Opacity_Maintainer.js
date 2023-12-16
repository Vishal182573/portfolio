import React from 'react'
import { useState, useEffect } from 'react';
export default function Opacity_Maintainer() {
    const [scrollOpacity, setScrollOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPercentage =0.5;
            const newOpacity = 1 - scrollPercentage / 100;
            setScrollOpacity(newOpacity < 0 ? 0 : newOpacity);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
    <div style={{ opacity: scrollOpacity }}>
      
    </div>
  )
}
