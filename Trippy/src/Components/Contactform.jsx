import React from 'react'
import "./Contactstyle.css"

function Contactform() {
  return (
    <>

    <div className='from-container'>
      <h1>Send a Massage to us</h1>

      <form>
        <input placeholder='Name'></input>
        <input placeholder='Email'></input>
        <input placeholder='Subject'></input>
        <textarea placeholder='massage' rows="4"></textarea>
        <button className='btn-contact'>Send massage</button>

      </form>


    </div>
    
    
    
    
    
    </>
  )
}

export default Contactform