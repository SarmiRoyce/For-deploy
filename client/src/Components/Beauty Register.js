import React, {useState} from 'react';
import image from '../Components/Gorgeous Queen.png';
import Navbar from './nav'

function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [shopregisternumber, setRegisterNumber] = useState('');
  const [shopplace, setShopPlace] = useState('');
  // const [packages, setPackages] = useState('');
  const [courseCertificates, setCourseCertificates] = useState('');
 

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      email,
      password,
      name,
      shopregisternumber,
      shopplace,
      // packages,
      courseCertificates
    };
    console.log(userData);

    fetch('http://localhost:3002/beautician/create', {
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
    <div>
        <Navbar/>

    <div className='register-full'>
    
      <form className='Register' onSubmit={handleSubmit}>

        <div>
          <img src="https://images.pexels.com/photos/11742213/pexels-photo-11742213.jpeg?cs=srgb&dl=pexels-imadclicks-11742213.jpg&fm=jpg" alt="Attractive fashion " style={{height:'720px',width:'420px'}}/>
        </div>
        <div className='register-text' style={{marginLeft:'60px'}}>

        <div className='register-text'>
          {/* <img class="img3" src={image} style={{marginLeft:'80px',height:'100px'}}/><br/> */}
          <h1 style={{marginLeft:'20px'}}>Beautician Register</h1><br/>
          <label>Email Address</label>
          <input type='Email' id='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div><br/>

          <label>Password</label>
          <input type='Password' id='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} required /><br/><br/>

          <label>Name</label>
          <input type='text' id='name' placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} required /> <br/><br/>

          <label>Shop Register Number</label>
          <input type='text' id='shopregisternumber' placeholder='Enter your register number' value={shopregisternumber} onChange={(e) => setRegisterNumber(e.target.value)} required /> <br/><br/>

          <label>Shop Place</label>
          <input type='text' id='shopplace' placeholder='Enter your place' value={shopplace} onChange={(e) => setShopPlace(e.target.value)} required /> <br/><br/>

          {/* <label>Packages</label><br/>
          <input type='text' id='packages' placeholder='Enter your pack' value={packages} onChange={(e) => setPackages(e.target.value)} required /> <br/><br/> */}

          <label>Course Certificates</label>
          <input type='file' id='coursecertificates' placeholder='Import your files' value={courseCertificates} onChange={(e) => setCourseCertificates(e.target.value)} required /> <br/><br/>

          <button className='btn15' type='submit'>Submit</button><br/>
          </div>
        
      </form>
    </div>
    </div>


  );
}

export default SignUpPage;








// VALIDATION

// import React, { useState } from 'react';
// import image from '../Components/Gorgeous Queen.png';
// import Navbar from './nav';

// function SignUpPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [shopregisternumber, setRegisterNumber] = useState('');
//   const [shopplace, setShopPlace] = useState('');
//   const [courseCertificates, setCourseCertificates] = useState('');
  
//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     const newErrors = {};

//     if (!email) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       newErrors.email = 'Email address is invalid';
//     }

//     if (!password) {
//       newErrors.password = 'Password is required';
//     } else if (password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//     }

//     if (!name) {
//       newErrors.name = 'Name is required';
//     }

//     if (!shopregisternumber) {
//       newErrors.shopregisternumber = 'Shop Register Number is required';
//     }

//     if (!shopplace) {
//       newErrors.shopplace = 'Shop Place is required';
//     }

//     if (!courseCertificates) {
//       newErrors.courseCertificates = 'Course Certificates are required';
//     }

//     return newErrors;
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const newErrors = validate();
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     const userData = {
//       email,
//       password,
//       name,
//       shopregisternumber,
//       shopplace,
//       courseCertificates,
//     };

//     console.log(userData);

//     fetch('http://localhost:3002/beautician/create', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(userData),
//     })
//       .then(res => res.json())
//       .then(data => console.log(data))
//       .catch((error) => {
//         console.log('Error:', error);
//       });
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className='register-full'>
//         <form className='Register' onSubmit={handleSubmit}>
//           <div>
//             <img src="https://images.pexels.com/photos/11742213/pexels-photo-11742213.jpeg?cs=srgb&dl=pexels-imadclicks-11742213.jpg&fm=jpg" alt="Attractive fashion" style={{height: '720px', width: '420px'}} />
//           </div>
//           <div className='register-text' style={{marginLeft: '60px'}}>
//             <div className='register-text'>
//               <h1 style={{marginLeft: '20px'}}>Beautician Register</h1><br />
//               <label>Email Address</label>
//               <input type='email' id='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} required />
//               {errors.email && <span className="error">{errors.email}</span>}
//             </div><br />

//             <label>Password</label>
//             <input type='password' id='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} required />
//             {errors.password && <span className="error">{errors.password}</span>}<br /><br />

//             <label>Name</label>
//             <input type='text' id='name' placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} required />
//             {errors.name && <span className="error">{errors.name}</span>}<br /><br />

//             <label>Shop Register Number</label>
//             <input type='text' id='shopregisternumber' placeholder='Enter your register number' value={shopregisternumber} onChange={(e) => setRegisterNumber(e.target.value)} required />
//             {errors.shopregisternumber && <span className="error">{errors.shopregisternumber}</span>}<br /><br />

//             <label>Shop Place</label>
//             <input type='text' id='shopplace' placeholder='Enter your place' value={shopplace} onChange={(e) => setShopPlace(e.target.value)} required />
//             {errors.shopplace && <span className="error">{errors.shopplace}</span>}<br /><br />

//             <label>Course Certificates</label>
//             <input type='file' id='coursecertificates' onChange={(e) => setCourseCertificates(e.target.value)} required />
//             {errors.courseCertificates && <span className="error">{errors.courseCertificates}</span>}<br /><br />

//             <button className='btn15' type='submit'>Submit</button><br />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default SignUpPage;



