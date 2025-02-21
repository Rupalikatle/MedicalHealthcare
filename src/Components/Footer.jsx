import React from 'react'
import './Footer.css'
import Instagram_icon from './Images/InstagramIcon.jpeg'
import Facebook_icon from './Images/FacebookIcon.jpeg'
import Location_icon from './Images/Location_Icon.png'
import Twitter_icon from './Images/Twitter_icon.png'

const Footer = () => {
  return (
    <footer className='f-1'>
    <div className='footer-1'>
      <div className='h'>
      <h3>© 2002-2024 Rural Health Information Hub. All rights reserved.</h3>
      <h4>Phone: 1-800-270-1898</h4>
      <h4>Email: info@ruralhealthinfo.org</h4>
      </div>
      <div>
        <p className='para'>
        The Rural Health Information Hub is supported by the Health
         Resources and Services Administration (HRSA) of the U.S.
          Department of Health and Human Services (HHS) under Grant Number U56RH05539 
          (Rural Assistance Center for Federal Office of Rural Health Policy Cooperative Agreement).
           Any information, content, or conclusions on this website are those of the authors and should
            not be construed as the official position or policy of, nor should any endorsements
             be inferred by HRSA, HHS or the U.S. Government.</p>
             </div>

             {/* <img  className='icon-1' src={Instagram_icon}alt="" /> */}
            <img  className='icon-1' src={Facebook_icon}alt="" />
            <img  className='icon-1' src={Location_icon}alt="" />
            <img  className='icon-1' src={Twitter_icon} alt="" />
            
    </div>
    </footer>
  )
}

export default Footer


