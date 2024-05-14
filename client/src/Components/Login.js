import React from 'react'
// import image from '../Components/Gorgeous Queen.png';
import Navbar from '../Components/nav';
import './Login.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();  axios.defaults.withCredentials = true;
    
    const handleSubmit = (e) => {
      e.preventDefault();
      const userdata = { email, password };
      console.log(userdata);
      
      fetch("http://localhost:3002/user/login",{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        }
      } , userdata)
        .then((userdata) => {
          console.log(userdata.data);
          if (userdata.data === "Success") {
            navigate("/");
          } else if (userdata.data === "Success beautician") {
            navigate("/Profilebeauty");
          } else if (userdata.data === "Admin_Success") {
            navigate("/Admin");
          }
        })
        .catch((err) => console.log(err));
  };

  // const handleSubmit = require (handleSubmit)
  // const login = async () => {
  //   if (email && password) {
  //     try {
  //       const response = await fetch("http://localhost:3002/user/login", {
  //         method: "POST",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ email, password }),
  //       });
  //       console.log(response);
  //       if (response.ok) {
  //         const data = await response.json();
  //         console.log(data);
  //         localStorage.setItem("token", data.token);
  //         navigate ("/Admin");
  //       } else {
  //         console.log("Invalid email or password");
  //       }
  //     } catch (error) {
  //       console.log("Error logging in:", error);
  //     }
  //   }
  // };

  return (
    <div>
        <Navbar/>
    <div className='login-full'>
    
  <form className='Login' style={{display:'flex',justifyContent:'space-evenly'}} onSubmit={handleSubmit}>
    <div>
      <img src="https://freedesignfile.com/upload/2018/10/Attractive-fashion-model-and-fashion-makeup-Stock-Photo-03.jpg" alt="Attractive fashion " style={{borderRadius:'30px'}}/>
    </div>

    <div className='login-text'>
      {/* <img class="img3" src={image} style={{marginLeft:'80px'}}/><br/><br/> */}
      <h1 style={{marginLeft:'50px',fontWeight:'800'}}>Login</h1><br/>
      <label>Email Address</label><br/>
      <input type='Email' placeholder='Enter your email'onChange={(e)=>setEmail(e.target.value)}></input><br/><br/>

      <label>Password</label><br/>
      <input type='Password' placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)}></input><br/><br/>

      <button className='btn4'>Login</button><br/><br/><br/>

      <p style={{fontSize:'15px',textAlign:'center'}}>Don't have an account? <a href="/role" style={{textDecoration:'none',color:'rgb(221, 23, 89'}}>Register Here</a></p><br/>

    </div>
  </form>
  </div>
  </div>


  )
}






