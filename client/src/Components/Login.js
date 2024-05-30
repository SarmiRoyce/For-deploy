import React from 'react'
import Navbar from '../Components/nav';
import './Login.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();   
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const userdata = { email, password };
    
    fetch("cat /proc/sys/fs/inotify/max_user_watches/user/login", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(userdata) 
    })
      .then(response => response.json()) // Parse the JSON response
      .then(data => {
        console.log(data);
        if (data === "Success") {
          navigate("/");
        } else if (data === "Success beautician") {
          navigate("/Profilebeauty");
        } else if (data === "Admin_Success") {
          navigate("/Admin");
        }
      })
      .catch((err) => console.log(err));
  };



  return (
    <div>
        <Navbar/>
    <div className='login-full'>
    
  <form className='Login' style={{display:'flex',justifyContent:'space-evenly'}} onSubmit={handleSubmit}>
    <div>
      <img src="https://freedesignfile.com/upload/2018/10/Attractive-fashion-model-and-fashion-makeup-Stock-Photo-03.jpg" alt="Attractive fashion " style={{borderRadius:'30px'}}/>
    </div>

    <div className='login-text'>
      <h1 style={{marginLeft:'50px',fontWeight:'800'}}>Login</h1><br/>
      <label>Email Address</label>
      <input type='Email' placeholder='Enter your email'onChange={(e)=>setEmail(e.target.value)}></input><br/><br/>

      <label>Password</label>
      <input type='Password' placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)}></input><br/><br/>

      <button className='btn4'>Login</button><br/><br/><br/>

      <p style={{fontSize:'15px',textAlign:'center'}}>Don't have an account? <a href="/role" style={{textDecoration:'none',color:'rgb(221, 23, 89'}}>Register Here</a></p><br/>

    </div>
  </form>
  </div>
  </div>


  )
}





