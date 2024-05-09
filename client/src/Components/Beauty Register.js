import React, {useState} from 'react';
import image from '../Components/Gorgeous Queen.png';

export default function Register() {
  return (

    <div className='login-full'>
    
      <form className='Login' style={{display:'flex',justifyContent:'space-evenly'}}>
        <div>
          <img src="https://images.pexels.com/photos/11742213/pexels-photo-11742213.jpeg?cs=srgb&dl=pexels-imadclicks-11742213.jpg&fm=jpg" alt="Attractive fashion " style={{height:'780px',width:'420px'}}/>
        </div>

        <div className='login-text'>
          <img class="img3" src={image} style={{marginLeft:'80px'}}/><br/><br/>
          <h1>Beautician Register</h1><br/>
          <label>Email Address</label><br/>
          <input type='Email' placeholder='Enter your email'></input><br/><br/>

          <label>Password</label><br/>
          <input type='Password' placeholder='Enter your password'></input><br/><br/>

          <label>Shop Registration Number</label><br/>
          <input type='text' placeholder='Enter your registration number'></input><br/><br/>

          <label>Shop Place</label><br/>
          <input type='text' placeholder='Enter your place'></input><br/><br/>

          <label>Course Certificates</label><br/>
          <input type='file' placeholder='Import your files'></input><br/><br/>

          <button className='btn15'>Submit</button><br/>

        </div>
      </form>
    </div>


  )
}
    