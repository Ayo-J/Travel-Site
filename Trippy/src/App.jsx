

import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Service from './Components/Service'
import {  Route ,Routes } from "react-router-dom";

function App() {


  return (
    <>
    <div className='nav'>
    <Navbar/>
    </div>
    
    <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Service" element={<Service/>}/>


    </Routes>


     

      {/* <Home/>



      <About/>


      <Contact/>



      <Service/> */}
    
      
    </>
  )
}

export default App
