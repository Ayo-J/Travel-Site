import React from 'react'
import Hero from './Hero';
import contactimg  from "../assets/contactimg.jpeg";


export default function Contact() {
  return (
    <>
    <Hero 
        cName="hero"
        img1 = {contactimg}
      
        buttonText ="Travel Plan"
        url="/"
        btnClass="show"
        
        />
    </>
  )
}
