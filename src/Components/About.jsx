import React from 'react'
import './About.css'
import Doctor_1 from './Images/BestDoctor-1.jpeg';
import Doctor_2 from './Images/BestDoctor-2.jpeg';
import Doctor_3 from './Images/BestDoctor-3.jpeg';
import Doctor_4 from './Images/BestDoctor-4.jpeg';
import Doctor_5 from './Images/BestDoctor-5.jpeg';
import Doctor_6 from './Images/BestDoctor-6.jpeg';

const About = () => {
  return (
    <div>
      <h1>Our mission is to make good primary health care affordable and available to everyone.</h1>
      <img src={Doctor_1} alt="" />
      <img src={Doctor_2} alt="" />
      <img src={Doctor_3} alt="" />

      <div>
        <h1 className='heading_1'>India's Best Doctors</h1>
        < img src={Doctor_4} alt="" />
        < img src={Doctor_5} alt="" />
        < img src ={Doctor_6} alt="" />
      </div>
      <div>
        <p className='para'>We operate in three verticals,
          the high street, gated communities,
          and corporates. We strive to bring
          primary healthcare closer to our
          patients with the adoption of best
          practices and the latest technology.</p>

        <p className='para'>Most Americans seeking medical help know
          to see a physician but may not realize
          that physicians can vary greatly in
          the types of services they provide. </p>

        <p className='para'>We provide a lot of useful
          information all arround the physician
          career and thousands of job offers on our page.</p>
      </div>

    </div>
  )
}

export default About