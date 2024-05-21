// import React ,{useState}from 'react';
// import Profile from './Beauticians';
// import Navbar from '../Components/nav';
// import Footer from '../Components/Footer';
// import '../Pages/Contact Us.css'

// export default function Contact() {

  
//   return (
//     <div>
//         <Navbar/>

//         <div className='contact-full'>
    
//           <form className='Contact' >

//             <div className='contact-text'>
//               <h1>Contact Us</h1>
//               <label>Name</label><br/>
//               <input type='Text' placeholder='Enter your name' ></input><br/><br/>

//               <label>Email Address</label><br/>
//               <input type='Email' placeholder='Enter your email' ></input><br/><br/>

//               <label>Message</label><br/>
//               <textarea style={{width:'450px',height:'140px'}}></textarea><br/><br/>


//               <button className='btn15'>Send</button><br/><br/>
              
//               </div>
//             </form>
//           </div>
//         <Footer/>
//     </div>


//   )
// }


import React, { useState } from 'react';
import Navbar from '../Components/nav';
import Footer from '../Components/Footer';
import './Contact Us.css'

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [result, setResult] = React.useState("");  
    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);   
     formData.append("access_key", "4295e4fc-50b6-4473-952a-9bb92c0336b6");    
     const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });    const data = await response.json();    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert('Message sent!');
    };    return (
      <div>
        <Navbar/>

      <div className='form-full'>
        
        <form onSubmit={onSubmit} className='form'>
            <div>
                <img src="https://i.pinimg.com/736x/0e/73/90/0e7390495ce94725b4fb05bd974049cb.jpg"  style={{height:'400px', marginTop:'100px'}} />
            </div>
            <div style={{marginTop:'90px'}}>
          <h2 style={{width:'200px'}}><b>Contact Us</b></h2>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="message" >Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    style={{height:'100px'}}
                    required
                />
            </div>
            <button type="submit" className='button'>Send</button>
            </div>
            <span>{result}</span>
        </form>
        </div>
        <Footer/>
        </div>
    );
}

export default ContactForm;