// src/components/Hero.jsx
// import React from 'react';
import orangeBg from '../assets/orange-bg.png'; 

const Hero = () => {
  return (
    <>
    <div className="relative min-h-[133vh] flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full bg-orange-500" style={{ clipPath: 'polygon(0 0, 80% 0, 50% 100%, 0 100%)' }}>
        <img src={orangeBg} alt="Orange Background" className="w-full h-full object-cover" />
      </div>
    </div>
    </>

  );
};

export default Hero;
