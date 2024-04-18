import React from 'react';
import Hero from './Hero';
import img1 from "../assets/hero.jpg";

function Home() {
  return (
    <div>
      <Hero
      cName="hero"
      img1 = {img1}
      title ="Your Journey Your Story"
      text="Choose your Favorite Destination"
      buttonText ="Travel Plan"
      url="/"
      btnClass="show"
      
      />
    </div>
  )
}

export default Home