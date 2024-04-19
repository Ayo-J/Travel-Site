import React from 'react'
import Hero from './Hero';
import "./Contactstyle.css"
import contactimg  from "../assets/contactimg.jpeg";
import ContactForm from './Contactform';


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

        <ContactForm/>




    </>
  )
}
