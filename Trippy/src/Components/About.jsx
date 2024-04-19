import React from 'react'
import './herostyle.css';
import about  from "../assets/About.jpg";// Make sure to include './' before the file path

import Hero from './Hero';

function About() {
  return (
    <>
  <Hero 
      cName="hero"
      img1 = {about}
      title ="Your Journey Your Story"
      text="Choose your Favorite Destination"
      buttonText ="Travel Plan"
      url="/"
      btnClass="show"
      
      />
  </>
  )
}

export default About