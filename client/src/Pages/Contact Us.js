import React ,{useState}from 'react';
import Profile from './Beauticians';
import Navbar from '../Components/nav';
import Footer from '../Components/Footer';
import '../Pages/Contact Us.css'

export default function Contact() {

  
  return (
    <div>
        <Navbar/>
        <div className='contact-full'>
    
          <form className='Contact' >

            <div className='contact-text'>
              <h1>Contact Us</h1>
              <label>Name</label><br/>
              <input type='Text' placeholder='Enter your name' ></input><br/><br/>

              <label>Email Address</label><br/>
              <input type='Email' placeholder='Enter your email' ></input><br/><br/>

              <label>Message</label><br/>
              <textarea style={{width:'450px',height:'140px'}}></textarea><br/><br/>


              <button className='btn15'>Send</button><br/><br/>
              
              </div>
            </form>
          </div>
        <Footer/>
    </div>


  )
}


