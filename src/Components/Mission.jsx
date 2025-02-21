import React from 'react'
import './Mission.css'
import Mission_img from './Images/MissionImg.jpeg'

const Mission = () => {
  return (
    <div className='mission'>
        <p className='p-1'>ग्रामीण आरोग्य मिशनचे प्रमुख लक्ष्य -</p> 
        <ul>
        <li>मातृत्व मृत्यु दर आणि शिशु मृत्यु दरात कमी करणे.</li>
        <li>समस्त राष्ट्रीय ग्रामीण मुलांचे लसीकरण करणे.</li>
        <li>मलेरिया व डेंगू सारख्या आजारात रग्णांच्या वार्षिक आकड्याच कमी आणणे.</li>
        <li>महिला व मुलांसाठी चांगल्या व योग्य आरोग्य सुविधा उपलब्ध करणे.</li>
        <li>ग्रामीण आरोग्य मिशन द्वारे आरोग्यदायी जीवन शैलीला प्रोत्साहन देणे.</li>
        <li>आरोग्याचा खर्च गरीब लोकांच्या खिशातून न जाता त्यांना मोफत आरोग्य सुविधा मिळतील.</li>
       </ul>
        
        <img src={Mission_img} alt="" />

        <h1 className='h_1'>राष्ट्रीय स्वास्थ्य मिशन: (NATIONAL RURAL HEALTH MISSION)</h1>
        <p className='para_3'>The National Rural Health Mission (NRHM) was launched by the Hon'ble 
          Prime Minister on 12th April 2005, to provide accessible, affordable
           and quality health care to the rural population, especially the
            vulnerable groups. The Union Cabinet vide its decision dated 1st May 2013,
            has approved the launch of National Urban Health Mission (NUHM) 
            as a Sub-mission of an over-arching National Health Mission (NHM), 
            with National Rural Health Mission (NRHM) being the other Sub-mission
             of National Health Mission.</p>

             <p className='para_3'>The National Rural Health Mission (NRHM) was launched by the Hon'ble
               Prime Minister to provide accessible, affordable and quality health 
               care to the rural population, especially the vulnerable groups. 
               The key features in order to achieve the goals of the Mission 
               include making the public health delivery system fully functional and
                accountable to the community, human resources management, community involvement, 
                decentralization, rigorous monitoring & evaluation against standards, the
                 convergence of health and related programmes from village level upwards, 
                 innovations and flexible financing and also interventions for improving the 
                 health indicators.</p>
      
    </div>
  )
}

export default Mission