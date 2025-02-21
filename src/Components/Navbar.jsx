import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import Logo from './Images/emblem-dark.png'
import Logo_1 from './Images/logoHome.png'
import Symptoms from './Symptoms'
import Precautions from './Precautions'
import Treatment from './Treatment'
import { useNavigate } from 'react-router-dom'
import Instagram_icon from './Images/InstagramIcon.jpeg'
import Facebook_icon from './Images/FacebookIcon.jpeg'
import Location_icon from './Images/Location_Icon.png'
import Linkedin_icon from './Images/LinkedinIcon.png'
import Massages_icon from './Images/MassageIcon.png'
import Twitter_icon from './Images/Twitter_icon.png'
import Whatsaap_icon from './Images/Whatsappicon.jpeg'


const Navbar = () => {


    // const navigate=useNavigate();
    // function Symptoms(){
    //     navigate("/Symptoms")
    // }

    // const [selected, setSelected] = useState("Symptoms")

    // const handleChange = (e) => {
    //     console.log(e.target.value);
    //     setSelected(e.target.value)
    // }

    return (
        <>

            <img className='logo-2' src={Logo_1} alt="" />
            <Link to='/' className='title'><span className='maharashtra'>महाराष्ट्र शासन</span> <span className='gov'>Government Of Maharashtra</span></Link>
            {/* <img className='logo_1' src={Logo_1} alt="" /> */}
            {/* <img  className='icon' src={Instagram_icon}alt="" /> */}
            <img  className='icon' src={Facebook_icon}alt="" />
            <img  className='icon' src={Location_icon}alt="" />
            <img  className='icon' src={Linkedin_icon}alt="" />
            <img  className='icon' src={Twitter_icon} alt="" />
            <img className='icon'  src={Whatsaap_icon} alt="" />
            {/* <img  className='icon' src={Massages_icon}alt="" /> */}


            <nav className='navbar'>
                <a className='logo'>
                    <img className='logo-1' src={Logo} alt="" />
                </a>
                <Link to='/' className='title'><span className='jilha'>जिल्हा नागपूर</span> <span className='district'>District Nagpur</span></Link>


                <ul className="nav-links">
                    <Link to='/home' className='home'>
                        <div class="dropdown">
                            <button class="dropbtn" >HOME</button>
                            {/* <div class="dropdown-content">
                                <a href="/symptoms"  onClick={Symptoms}>Symptoms</a>
                                <a href="#"  onClick={Precautions}>Precautions</a>
                                <a href="#"  onClick={Treatment}>Treatment</a>
                            </div> */}
                            
                        </div>
                    </Link>

                    {/* <div>
                       <select value={selected} onChange={(e)=>handleChange(e)}>
                        <option>Symptoms</option>
                        <option>Precautions</option>
                        <option>Treatment</option>
                      </select>
                       {selected== "Symptoms"? <Symptoms/>:""}
                       {selected== "Precautions"? <Precautions/>:""}
                       {selected== "Treatment"? <Treatment/>:""}

                       </div> */}
                  

                  {/* <Link to='/home' className='home'>
                        <li>HOME</li>
                    </Link> */}

                    <Link to='/about' className='about'>
                        <li>ABOUT</li>
                    </Link>
                    <Link to='/services' className='services'>
                        <li>SERVICES</li>
                    </Link>

                    <Link to='/mission' className='mission'>
                        <li> MISSION</li>
                    </Link>
                    <Link to='/diseases' className='diseases'>
                        <li>DISEASES</li>
                    </Link>
                    <Link to='/contact' className='contact'>
                        <li>CONTACT </li>
                    </Link>
                </ul>
            </nav>
        </>
    )
}

export default Navbar