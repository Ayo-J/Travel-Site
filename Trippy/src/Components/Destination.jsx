import React from 'react'
import "./Destination-style.css"
import kandy1 from "../assets/kandy1.jpg"
import kandy2 from '../assets/kandy2.jpg'
import p1 from '../assets/p1.webp'
import p2 from '../assets/p2.jpg'

import Destinationdata from './Destinationdata'

function Destination() {
  return (
    <>
    
    <div className='destination'>
    <h1>Popular Destinations</h1>

     <p>Tours give you the oppotunity</p>
     <Destinationdata
          className ="first-des"
          heading = "Kandy sri Lanka"
          text="Historical Significance: Kandy served as the last capital of the ancient kings' era in Sri Lanka. It holds significant historical and cultural importance, being the capital of the last Sinhalese kingdom and a UNESCO World Heritage Site.
          Cultural Hub: The city is renowned for its rich cultural heritage, which is evident in its temples, festivals, dance, and music. The Temple of the Tooth Relic (Sri Dalada Maligawa) is a sacred Buddhist site that houses the tooth relic of the Buddha and is a major pilgrimage destination for Buddhists worldwide.
          Natural Beauty: Surrounded by lush greenery, Kandy is nestled amidst scenic hills and tea plantations, offering breathtaking views and opportunities for"
          image1 ={kandy1}
          image2={kandy2}

    
          
     />
    
     </div>

     <div className='destination'>
   
     <Destinationdata
     className ="first-des-reverse"
          heading = "Polonnaruwa sri Lanka"
          text="Historical Significance: Polonnaruwa served as the second capital of Sri Lanka during the medieval period, following the decline of Anuradhapura. It was the capital from the 11th to the 13th century AD, during the reign of the Sinhalese kings.
          Archaeological Heritage: The city is renowned for its well-preserved archaeological ruins, including ancient temples, palaces, statues, and irrigation systems. Many of these structures are UNESCO World Heritage Sites, offering valuable insights into the country's history and culture.
          Royal Complex: The Royal Palace complex, located within Polonnaruwa, features the remains of the king's residence, audience halls, and other administrative buildings. The ruins provide a glimpse into the architectural and administrative practices of the period."
          image1 ={p1}
          image2={p2}

    
          
     />
    
     </div>

   
    
    </>
    
  )
}

export default Destination