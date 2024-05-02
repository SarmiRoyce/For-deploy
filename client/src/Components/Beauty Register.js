import React from 'react'
import image from '../Components/Gorgeous Queen.png';

export default function Register() {
  return (

    <div className='login-full'>
    
      <form className='Login' style={{display:'flex',justifyContent:'space-evenly'}}>
        <div>
          
          <img src="https://freedesignfile.com/upload/2018/10/Attractive-fashion-model-and-fashion-makeup-Stock-Photo-03.jpg" alt="Attractive fashion "/>
        </div>

        <div className='login-text'>
          <img class="img3" src={image} style={{marginLeft:'80px'}}/>
          <h1>Beautician Register</h1>
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
    