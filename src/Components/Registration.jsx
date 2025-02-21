// import React from 'react'
// import './Registration.css';

// const Registration = () => {
//   return (
//     <form className='container'>
//         <div className='header'>
//             <h1>Registration Form</h1>
//         </div>
//         <div className='registraion'>
//             <input type='text' placeholder='Enter Your FirstName' name='name'></input>
             
//             <input type='text' placeholder='Enter Your LastName' name='name'></input>
//         </div>
//         <div className='registraion'>
//             <input type='text' placeholder='Enter Your Email' name='email'></input>
            
//             <input type='text' placeholder='Enter Your Password' name='password'></input>
//         </div>
       
//         <div className='registraion'>
//             <input type='text' placeholder='Enter Your Gender' name='gender'></input>
//             <input type='text' placeholder='Enter Your BloodGroup' name='bloodgroup'></input>
//         </div>
        
//         <div className='registraion'>
//             <input type='text' placeholder='Enter Your Pincode' name='pincode'></input>
//             <input type='text' placeholder='Enter Your City' name='city'></input>
//         </div>
       
//         <div>
//             <button className='btn-1' type='submit'>Submit</button>
//         </div>
//   </form>
//   )
// }

// export default Registration

// -----------------------------------------------------------------------------------//


import React, { useState } from 'react';
import './Registration.css'; 
import { Button } from 'react-bootstrap'

const Registration = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    username: '',
    address: '',
    contact: '',
    adhar: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form validation here before submitting

    // Example: Log the form data to the console
    console.log(formData);

    // Reset form fields (optional)
    setFormData({
      username: '',
      address: '',
      contact: '',
      adhar: '',
    });
  };



  function myfun() {
        alert('Your Registraion has been successfull!');
      }
    

  return (
    <div className="registration-form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label>Username:- </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address:- </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Contact:- </label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Adhar:- </label>
          <input
            type="text"
            name="adhar"
            value={formData.adhar}
            onChange={handleChange}
            required
          />
        </div>
        {/* <button type="submit">Register</button> */}
        <Button className="btn" variant='contained' onClick={myfun}>Register Your Appoiment</Button>
      </form>
    </div>
  );
};

export default Registration;