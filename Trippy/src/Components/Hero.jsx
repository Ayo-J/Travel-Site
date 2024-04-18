import React from 'react';
import './herostyle.css'; // Make sure to include './' before the file path
import img1 from "../assets/hero.jpg";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt='heroimg' src={img1} />
      </div>
      <div className='hero-text'>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btn}>
          {props.buttonText}
        </a>
      </div>
    </>
  );
}

export default Hero;
