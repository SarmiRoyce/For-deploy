import React, {useState} from 'react';
import image from '../Components/Gorgeous Queen.png';
import Navbar from './nav'


function SignUpPage() {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [retypepassword, setRetypePassword] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (password !== retypepassword) {
        alert("Passwords do not match.");
        return;
      }
      const userData = {
        firstname,
        lastname,
        email,
        password,
        retypepassword
      };
      console.log(userData);
  
      fetch('http://localhost:3002/users/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
      .then(res => res.json ())
      .then(data => console.log(data))
      .catch((error) => {
        console.log('Error:', error);
      });
  };

// export default function UserRegister() {
  return (
    <div>
      <Navbar/>

    <div className='login-full' >
    
      <form onSubmit={handleSubmit}className='Login' style={{display:'flex',justifyContent:'space-evenly',width:'950px'}}>
        <div>
          <img src="https://content.jdmagicbox.com/comp/bidar/m2/9999p8482.8482.180626152315.d4m2/catalogue/apsara-beauty-parlour-hallikhed-bidar-bidar-beauty-parlours-y43tudewu1.jpg" alt='bridal' style={{height:'700px'}}/>
        </div>

        <div className='login-text'style={{marginLeft:'40px'}}>
          {/* <img class="img3" src={image} style={{marginLeft:'80px',height:'100px'}}/><br/><br/> */}
           <h1 style={{marginLeft:'40px'}}>User Register</h1><br/>
           <label>First Name</label><br/>
           <input type='text' id='firstName' placeholder='Enter your first name' value={firstname} onChange={(e) => setFirstName(e.target.value)} required /><br/><br/>

           <label>Last Name</label><br/>
           <input type='text' id='lastName' placeholder='Enter your last name' value={lastname} onChange={(e) => setLastName(e.target.value)} required /><br/><br/>

           <label>Email Address</label><br/>
           <input type='Email' id='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} required /><br/><br/>

           <label>Password</label><br/>
           <input type='Password' id='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} required /><br/><br/>

           <label>Retype Password</label><br/>
           <input type='Password' id='retypePassword' placeholder='Confirm your password' value={retypepassword} onChange={(e) => setRetypePassword(e.target.value)} required /><br/><br/>


           <button className='btn15'>Submit</button><br/>

         </div>
      </form>
    </div>
    </div>


  )
}

export default SignUpPage;




{/* <div className='login-text'>
          <img class="img3" src={image} style={{marginLeft:'80px'}}/><br/><br/>
          <h1 style={{marginLeft:'50px'}}>User Register</h1><br/>
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

        </div> */}
    