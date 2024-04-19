import React from 'react'
import './Tripstyle.css'; 
import Tripdata from './TripData'
import kandy1 from "../assets/kandy1.jpg"
import p2 from '../assets/p2.jpg'
import kandy2 from '../assets/kandy2.jpg'


function Trip() {
  return (
    <>
    
    <div className='trip'>

      <h1>Recent Trips</h1>
      <p>You can Discuss Unique Destintions using google Mapps</p>

      <div className='tripcard'>
      <Tripdata
      image = {kandy1}
      heading = "Trip to kandy"
      text="Tourist Destination: Polonnaruwa is a popular tourist destination, attracting visitors from around the world who come to explore its archaeological wonders and learn about Sri Lanka's ancient history. The site is easily accessible and can be explored on foot, bicycle, or guided tours."






    
    
    
    
    
    
/>
<Tripdata
      image = {p2}
      heading = "Trip to Polonanaruwa"
      text="Tourist Destination: Polonnaruwa is a popular tourist destination, attracting visitors from around the world who come to explore its archaeological wonders and learn about Sri Lanka's ancient history. The site is easily accessible and can be explored on foot, bicycle, or guided tours."


      



    
    
    
    
    
    
/>
<Tripdata
      image = {kandy2}
      heading = "Trip to kandy"
      text="Tourist Destination: Polonnaruwa is a popular tourist destination, attracting visitors from around the world who come to explore its archaeological wonders and learn about Sri Lanka's ancient history. The site is easily accessible and can be explored on foot, bicycle, or guided tours."


      



    
    
    
    
    
    
/>
      </div>
    </div>

 
    </>
    


  );
}

export default Trip