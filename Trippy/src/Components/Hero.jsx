import React from 'react';
import './herostyle.css'; // Make sure to include './' before the file path
import img1 from "../assets/hero.jpg";

function Hero() {
  return (
    <>
      <div className='hero'>
        <img alt='heroimg' src={img1} />
      </div>
    </>
  );
}

export default Hero;
