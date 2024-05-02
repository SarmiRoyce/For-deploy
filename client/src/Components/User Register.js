import React from 'react'
import image from '../Components/Gorgeous Queen.png';

export default function UserRegister() {
  return (

    <div className='login-full' >
    
      <form className='Login' style={{display:'flex',justifyContent:'space-evenly',width:'1200px'}}>
        <div>
          <img src="https://content.jdmagicbox.com/comp/bidar/m2/9999p8482.8482.180626152315.d4m2/catalogue/apsara-beauty-parlour-hallikhed-bidar-bidar-beauty-parlours-y43tudewu1.jpg" alt='bridal' style={{height:'800px'}}/>
        </div>

        <div className='login-text'>
          <img class="img3" src={image} style={{marginLeft:'80px'}}/>
          <h1>User Register</h1>
          <label>First Name</label><br/>
          <input type='text' placeholder='Enter your first name'></input><br/><br/>

          <label>Last Name</label><br/>
          <input type='text' placeholder='Enter your last name'></input><br/><br/>

          <label>Email Address</label><br/>
          <input type='Email' placeholder='Enter your email'></input><br/><br/>

          <label>Password</label><br/>
          <input type='Password' placeholder='Enter your password'></input><br/><br/>

          <label>Retype Password</label><br/>
          <input type='Password' placeholder='Confirm your password'></input><br/><br/>


          <button className='btn15'>Submit</button><br/>

        </div>
      </form>
    </div>


  )
}
    