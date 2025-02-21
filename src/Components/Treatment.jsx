import React from 'react'
import './Treatment.css'
import Dengue_img from './Images/DengueImg.jpeg'
import Typhoid_img from './Images/Typhoidimg.jpeg'
import Maleria_img from './Images/maleriaImg.jpeg'

const Treatment = () => {
  return (
    <div>
        <h1>Treatment Of Dengue Fever</h1>
        <ul>
            <li>Avoid invasive procedures when possible</li>
            <li>Unknown if the use of steroids, intravenous immune globulin,
                or platelet transfusions to shorten the duration or decrease the severoty of 
                thrombocytopenia is effecti</li>
            <li>Patients in shock may require 
                Treatment in an intensive care unit </li>
        </ul>
         <img className='img_1' src={Dengue_img} alt="" />

        <h1>Treatment of Typhoid</h1>
      <ul>
            <li>Fluoroquinolones. These antibiotics, including ciprofloxacin (Cipro), may be a first choice.</li>
            <li>Cephalosporins. This group of antibiotics keeps bacteria from building cell walls. </li>
            <li>Macrolides. This group of antibiotics keeps bacteria from making proteins. </li>
        </ul>
        <img className='img_1' src={Typhoid_img} alt="" />


        <h1>How is malaria treated?</h1>
        <ul>
            <li>Artemisinin drugs (artemether and artesunate). The best treatment for 
              Plasmodium falciparum malaria, if available, is artemisinin combination therapy.</li>
            <li>Chloroquine. There are parasites that are resistant to this medication.</li>
            <li>Mefloquine. </li>
        </ul>
        <img className='img_1' src={Maleria_img} alt="" />
    </div>
  )
}

export default Treatment