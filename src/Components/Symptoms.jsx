import React from 'react'
import './Symptoms.css'
import Maleria from './Images/Maleria-1.jpeg'
import MaleriaSymptoms from './Images/SymptomsMaleria.png'
import MaleriaCauses from './Images/Causesmaleria.jpeg'
import Typhoid from './Images/Typhoid-1.jpeg'
import TyphoidSymptoms from './Images/Symptoms_Typhoid.png'
import TyphoidCauses from './Images/CausesTyphoid.jpeg'
import Dengue from './Images/Dengue-1.png'
import DengueSymptoms from './Images/SymptomsDengue.png'
import DengueCauses from './Images/CausesDengue.jpeg'
import Precautions from './Precautions'
import { useNavigate } from 'react-router-dom'

const Symptoms = () => {

  const navigate=useNavigate();
    function Precautions(){
        navigate("/precautions")
    }

   
  return (
    <div>
      <div className='symptoms'>
        <h1 className='header_1'>What is Typhoid? (टायफॉइड म्हणजे काय?)</h1>
        <p className='p'>Typhoid fever is an illness you get from S. Typhi bacterium.
           It causes a high fever, flu-like symptoms and diarrhea. 
           You can be contagious with typhoid even if you don't feel sick.
           Typhoid can be life-threatening and should be treated promptly with 
           antibiotics. If you live in or travel to an area where typhoid is common, 
           you should get vaccinated.</p>
        <img className='img_1' src={Typhoid} alt="" />
      </div>

      <h1>What are the signs and symptoms of Typhoid? (टायफॉईड ची लक्षणे)</h1>
      <ul>
        <li>Fever</li>
        <li>headache.</li>
        <li>Cough.</li>
        <li>abdominal pain.</li>
        <li>constipation or diarrhoea.</li>  
      </ul>
      <img className='i-1' src={TyphoidSymptoms} alt="" />

      <h1 className='header_2'>What is causes of Typhoid? (टायफॉइडची कारणे काय आहेत?)</h1>
      <p className='p_2'>A bacteria strain called Salmonella enterica serotype 
        typhi causes typhoid fever. Other strains of salmonella bacteria 
        cause a similar disease called paratyphoid fever.</p>
      <p className='p_2'>People pick up the bacteria most often in places where outbreaks are common. 
        The bacteria passes out of the body in the stool and urine of people who are
         carrying the bacteria. Without careful hand-washing after going to the bathroom,
          the bacteria can move from the hands to objects or other people.</p>
      <p className='p_2'>The bacteria also can spread from a person who carries the bacteria. 
        It can spread on food that isn't cooked, such as raw fruits without a peel. 
        In places where water isn't treated to kill germs, you can pick 
        up the bacteria from that source</p>

      <img className='i-2' src={TyphoidCauses} alt="" />


      <div>
        <h1 className='header_1'>What is Dengue? (डेंग्यू म्हणजे काय?)</h1>
        <p className='p'>Dengue can range from asymptomatic infection or mild illness to severe disease. 
          An estimated 1 in 4 dengue virus infections are symptomatic. Symptomatic dengue
           virus infection most commonly presents as a mild to moderate, acute febrile illness.
            Infection with one of the four dengue viruses will induce long-lived immunity for that 
            specific virus. Because there are four dengue viruses, people can be infected multiple
             times in their life.</p>
        <img className='img_1' src={Dengue} alt="" />
      </div>
      <h1>What are the signs and symptoms of Dengue? (डेंग्यूची लक्षणे)</h1>
      <ul>
        <li>pain behind the eyes.</li>
        <li>muscle and joint pains.</li>
        <li>vomiting.</li>
        <li>swollen glands.</li>
        <li>rash.</li>
      </ul>
      <img className='i-1' src={DengueSymptoms} alt="" />

      <h1 className='header_2'>What is causes of Dengue? (डेंग्यूची कारणे काय आहेत?) </h1>
      <p className='p_2'>Dengue fever is caused by any one of four types of dengue viruses. 
        You can't get dengue fever from being around an infected person. Instead, 
        dengue fever is spread through mosquito bites.</p>
      <p className='p_2'>The two types of mosquitoes that most often spread the dengue viruses are common
         both in and around human lodgings. When a mosquito bites a person infected with a 
         dengue virus, the virus enters the mosquito. Then, when the infected mosquito bites 
         another person, the virus enters that person's bloodstream and causes an infection.</p>
      <p className='p_2'>After you've recovered from dengue fever, you have long-term immunity to the type of virus
         that infected you — but not to the other three dengue fever virus types. 
        This means you can be infected again in the future by one of the other three virus types.</p>
      <img  className='i-2' src={DengueCauses} alt="" />


      <div>
        <h1 className='header_1'>What is malaria? (मलेरिया म्हणजे काय?)</h1>
        <p className='p'>Malaria is a serious disease that spreads when you're bitten by a
          mosquito infected by tiny parasites. When it bites, the mosquito
          injects malaria parasites into your bloodstream. Malaria is caused by
          the parasites, not by a virus or by a type of bacterium.If it isn't treated,
          malaria can cause severe health problems such as seizures, brain damage,
          trouble breathing, organ failure and death.</p>
        <img className='img_1' src={Maleria} alt="" />
      </div>

      <h1>What are the signs and symptoms of malaria? (मलेरियाची लक्षणे)</h1>
      <ul>
        <li>Fever and sweating.</li>
        <li>Chills that shake your whole body.</li>
        <li>Headache and muscle aches.</li>
        <li>Chest pain, breathing problems and cough.</li>
        <li>Diarrhea, nausea and vomiting.</li>
      </ul>
      <img  className='i-1' src={MaleriaSymptoms} alt="" />

      <h1 className='header_2'>What is causes of malaria? (मलेरियाची कारणे काय आहेत?)</h1>
      <p className='p_2'>When a mosquito bites someone who has malaria, the mosquito becomes infected.
        When that mosquito bites someone else, it transfers a parasite to the other person's
        bloodstream. There, the parasites multiply. There are five types of malaria parasites
        that can infect humans.</p>
      <p className='p_2'>In rare cases, people who are pregnant and who have malaria can transfer
        the disease to their children before or during birth.</p>
      <p className='p_2'>It's possible, but unlikely, for malaria to be passed through blood transfusions,
        organ donations and hypodermic needles.</p>

      <img className='i-2' src={MaleriaCauses} alt="" />


      <button className='btn-2' onClick={Precautions}>Go To Precautions</button>
    </div>
    

  )
}

export default Symptoms