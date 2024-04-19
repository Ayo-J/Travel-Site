import React from 'react';
import './herostyle.css'; // Make sure to include './' before the file path


function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt='heroimg' src={props.img1} />
      </div>
      <div className='hero-text'>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <div className='btn-main'>
        <a href={props.url} className="btn">
          {props.buttonText}
        </a></div>
      </div>
    </>
  );
}

export default Hero;
