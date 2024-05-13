import React from 'react'
import image from '../Components/Gorgeous Queen.png';
import Navbar from '../Components/nav';
import './Login.css'

export default function Login() {
  return (
    <div>
        <Navbar/>
    <div className='login-full'>
    
  <form className='Login' style={{display:'flex',justifyContent:'space-evenly'}}>
    <div>
      <img src="https://freedesignfile.com/upload/2018/10/Attractive-fashion-model-and-fashion-makeup-Stock-Photo-03.jpg" alt="Attractive fashion "/>
    </div>

    <div className='login-text'>
      <img class="img3" src={image} style={{marginLeft:'80px'}}/><br/><br/>
      <h1 style={{marginLeft:'30px'}}>Login</h1>
      <label>Email Address</label><br/>
      <input type='Email' placeholder='Enter your email'></input><br/><br/>

      <label>Password</label><br/>
      <input type='Password' placeholder='Enter your password'></input><br/><br/>

      <button className='btn4'>Login</button><br/><br/>

      <p style={{fontSize:'15px',textAlign:'center'}}>Don't have an account? <a href="/role" style={{textDecoration:'none',color:'rgb(221, 23, 89'}}>Register Here</a></p><br/>

    </div>
  </form>
  </div>
  </div>


  )
}






