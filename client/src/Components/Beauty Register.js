import React, {useState} from 'react';
import image from '../Components/Gorgeous Queen.png';

function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [shopplace, setShopPlace] = useState('');
  const [shopregisternumber, setRegisterNumber] = useState('');
  const [courseCertificates, setCourseCertificates] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      email,
      password,
      shopplace,
      shopregisternumber,
      courseCertificates
    };
    console.log(userData);

    fetch('http://localhost:3001/beautician/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
  })
    .then(res => res.json ())
    .then(data => console.log(data))
    .catch((error) => {
      console.log('Error:',error);
    });
};

// export default function Register() {
  return (

    <div className='login-full'>
    
      <form className='Login' onSubmit={handleSubmit}>

        <div>
          <img src="https://images.pexels.com/photos/11742213/pexels-photo-11742213.jpeg?cs=srgb&dl=pexels-imadclicks-11742213.jpg&fm=jpg" alt="Attractive fashion " style={{height:'780px',width:'420px'}}/>
        </div>
        <div className='login-text' style={{marginLeft:'70px'}}>

        <div className='login-text'>
          <img class="img3" src={image} style={{marginLeft:'80px'}}/><br/><br/>
          <h1>Beautician Register</h1><br/>
          <label>Email Address</label><br/>
          <input type='Email' id='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div><br/>

          <label>Password</label><br/>
          <input type='Password' id='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} required /><br/><br/>

          <label>Shop Registration Number</label><br/>
          <input type='text' id='shopregisternumber' placeholder='Enter your registration number' value={shopregisternumber} onChange={(e) => setRegisterNumber(e.target.value)} required /> <br/><br/>

          <label>Shop Place</label><br/>
          <input type='text' id='shopplace' placeholder='Enter your place' value={shopplace} onChange={(e) => setShopPlace(e.target.value)} required /> <br/><br/>

          <label>Course Certificates</label><br/>
          <input type='file' id='coursecertificates' placeholder='Import your files' value={courseCertificates} onChange={(e) => setCourseCertificates(e.target.value)} required /> <br/><br/>

          <button className='btn15' type='submit'>Submit</button><br/>
          </div>
        
      </form>
    </div>


  );
}

export default SignUpPage;










// import React, {useState} from 'react';
// import image from '../Components/Gorgeous Queen.png';

// export default function Register() {
//   return (

//     <div className='login-full'>
    
//       <form className='Login' style={{display:'flex',justifyContent:'space-evenly'}}>
//         <div>
//           <img src="https://images.pexels.com/photos/11742213/pexels-photo-11742213.jpeg?cs=srgb&dl=pexels-imadclicks-11742213.jpg&fm=jpg" alt="Attractive fashion " style={{height:'780px',width:'420px'}}/>
//         </div>

//         <div className='login-text'>
//           <img class="img3" src={image} style={{marginLeft:'80px'}}/><br/><br/>
//           <h1>Beautician Register</h1><br/>
//           <label>Email Address</label><br/>
//           <input type='Email' placeholder='Enter your email'></input><br/><br/>

//           <label>Password</label><br/>
//           <input type='Password' placeholder='Enter your password'></input><br/><br/>

//           <label>Shop Registration Number</label><br/>
//           <input type='text' placeholder='Enter your registration number'></input><br/><br/>

//           <label>Shop Place</label><br/>
//           <input type='text' placeholder='Enter your place'></input><br/><br/>

//           <label>Course Certificates</label><br/>
//           <input type='file' placeholder='Import your files'></input><br/><br/>

//           <button className='btn15'>Submit</button><br/>

//         </div>
//       </form>
//     </div>


//   )
// }


    