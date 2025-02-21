import React from 'react'
import { Form, Route, Router, Routes } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Diseases from './Components/Diseases';
import Mission from './Components/Mission';
import Footer from './Components/Footer';
import Registration from './Components/Registration';
import Symptoms from './Components/Symptoms';
import Precautions from './Components/Precautions';
import Treatment from './Components/Treatment';



const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/diseases" element={<Diseases />} />
      <Route path="/mission" element={<Mission/>} />
      <Route path="/symptoms" element={<Symptoms/>} />
      <Route path="/precautions" element={<Precautions/>} />
      <Route path="/treatment" element={<Treatment/>} />
      
      
      </Routes>
      {/* <Symptoms/> */}
      {/* <Precautions/> */}
      {/* <Treatment/> */}
      <Footer/>

    </div>
  )
}

export default App