import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Service from "./Pages/Service";
import HowItWorks from "./Pages/HowItWorks";
import Waitlist from "./Pages/Waitlist";
import { useState,useEffect } from "react";


const App = () => {
 

  return (
    <div className='container'>
        <Navbar  />
        <Home />
        <Service/>
        <HowItWorks/>
        <Waitlist />
        
    </div>
  )
}

export default App
