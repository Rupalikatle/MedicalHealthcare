import React from 'react'
import './Home.css'
import Backgroud from './Images/BackgroundHealthcare.jpeg'
import { useNavigate } from 'react-router-dom'
import Precautions from './Precautions'
import Treatment from './Treatment'



const Home = () => {


  const navigate=useNavigate();
    function Symptoms(){
        navigate("/symptoms")
    }
   
    
  return (
    <div className='home-text'>
       <h1>ग्रामीण आरोग्य सेवा :(Rural Health Services)</h1>
       {/* <h1>रूलर हेल्थकेअर सेवा</h1> */}
       <h2>Protect Your Health And Take Care To Of Your Health</h2> 
      <ul>
        <li> * We Care About Your Health</li>
        <li> * Provide Best Treatment Our Medical</li>
        <li> * We Provide Best Healthcare</li>
        <li> * We Provide Top Medical Services</li>
        </ul> 
       
        <button className='btn-1' onClick={Symptoms}>Symptoms Of Deseases</button>
        {/* <button className='btn-1' onClick={Precautions}>Precautions</button>
        <button className='btn-1' onClick={Treatment}>Treatment</button> */}
        <img src={Backgroud} alt="" />
       
     
    </div>
  )
}

export default Home