// // import React from 'react'
// // import ReactDOM from 'react-dom/client'
// // import App from './App.jsx'


// // ReactDOM.createRoot(document.getElementById('root')).render(
// //     <React.StrictMode>
// //         <App/>
// //     </React.StrictMode>
// // )






// BEAUTY SIGNUP PAGE

// import React, {useState} from 'react';
// import image from '../Components/Gorgeous Queen.png';

// function SignUpPage() {
//   const [userName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   // const [Role, setUserRole] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (password !== confirmPassword) {
//       alert("Passwords do not match.");
//       return;
//     }
//     const userData = {
//       userName,
//       email,
//       // Role,
//       password,
//       confirmPassword
//     };
//     console.log(userData);

//     fetch('http://localhost:3001/SignUp/create', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(userData),
//   })
//     .then(res => res.json ())
//     .then(data => console.log(data))
//     .catch((error) => {
//       console.error['Error:'.error];
//     });
// };

// // export default function Register() {
//   return (

//     <div className='login-full'>
    
//       <form className='Login' style={{display:'flex',justifyContent:'space-evenly'}} onSubmit={handleSubmit}>
//         <div>
//           <img src="https://images.pexels.com/photos/11742213/pexels-photo-11742213.jpeg?cs=srgb&dl=pexels-imadclicks-11742213.jpg&fm=jpg" alt="Attractive fashion " style={{height:'780px',width:'420px'}}/>
//         </div>

//         <div className='login-text'>
//           <img class="img3" src={image} style={{marginLeft:'80px'}}/><br/><br/>
//           <h1>Beautician Register</h1><br/>
//           <label>Email Address</label><br/>
//           <input type='Email' id='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} required />
//           </div><br/><br/>

//           <label>Password</label><br/>
//           <input type='Password' id='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} required />

//           <label>Shop Registration Number</label><br/>
//           <input type='text' id='shopregisternumber' placeholder='Enter your registration number' value={shopregisternumber} onChange={(e) => setRegisterNumber(e.target.value)} required /> <br/><br/>

//           <label>Shop Place</label><br/>
//           <input type='text' id='shopplace' placeholder='Enter your place' value={shopplace} onChange={(e) => setShopPlace(e.target.value)} required /> <br/><br/>

//           <label>Course Certificates</label><br/>
//           <input type='file' id='coursecertificates' placeholder='Import your files' value={courseCertificates} onChange={(e) => setCourseCertificates(e.target.value)} required /> <br/><br/>

//           <button className='btn15'>Submit</button><br/>

//         </div>
//       </form>
//     </div>


//   );
// }










// USER SIGNUP PAGE

// import React, {useState} from 'react';
// import image from '../Components/Gorgeous Queen.png';

// function SignUpPage() {
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [retypePassword, setRetypePassword] = useState('');
  
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       if (password !== confirmPassword) {
//         alert("Passwords do not match.");
//         return;
//       }
//       const userData = {
//         userName,
//         email,
//         password,
//         retypePassword
//       };
//       console.log(userData);
  
//       fetch('http://localhost:3001/UserSignUp/create', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData),
//     })
//       .then(res => res.json ())
//       .then(data => console.log(data))
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   };
  

// // export default function UserRegister() {
//   return (

//     <div className='login-full' >
    
//       <form className='Login' style={{display:'flex',justifyContent:'space-evenly',width:'1200px'}} onSubmit={handleSubmit}>
//         <div>
//           <img src="https://content.jdmagicbox.com/comp/bidar/m2/9999p8482.8482.180626152315.d4m2/catalogue/apsara-beauty-parlour-hallikhed-bidar-bidar-beauty-parlours-y43tudewu1.jpg" alt='bridal' style={{height:'780px'}}/>
//         </div>

//         <div className='login-text'>
//           <img class="img3" src={image} style={{marginLeft:'80px'}}/><br/><br/>
//           <h1 style={{marginLeft:'50px'}}>User Register</h1><br/>
//           <label>First Name</label><br/>
//           <input type='text' id='firstName' placeholder='Enter your first name' value={fistname} onChange={(e) => setFirstName(e.target.value)} required /><br/><br/>

//           <label>Last Name</label><br/>
//           <input type='text' id='lastName' placeholder='Enter your last name' value={lastname} onChange={(e) => setLastName(e.target.value)} required /><br/><br/>

//           <label>Email Address</label><br/>
//           <input type='Email' id='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} required /><br/><br/>

//           <label>Password</label><br/>
//           <input type='Password' id='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} required /><br/><br/>

//           <label>Retype Password</label><br/>
//           <input type='Password' id='retypePassword' placeholder='Confirm your password' value={retypepassword} onChange={(e) => setRetypePassword(e.target.value)} required /><br/><br/>


//           <button className='btn15'>Submit</button><br/>

//         </div>
//       </form>
//     </div>


//   );
// }

// export default SignUpPage;    
