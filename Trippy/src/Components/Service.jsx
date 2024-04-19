import React from 'react'
import './herostyle.css';
import Sereimg  from "../assets/service.jpg";
import Hero from './Hero';

function Service() {
  return (
   <>
<Hero 
      cName="hero"
      img1 = {Sereimg}
      title ="Your Journey Your Story"
      text="Choose your Favorite Destination"
      buttonText ="Travel Plan"
      url="/"
      btnClass="show"
      
      />
     
   </>
  )
}

export default Service