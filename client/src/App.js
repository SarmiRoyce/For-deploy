import './App.css';
import { Route,Routes } from 'react-router-dom';
// import React, {useState} from 'react';
// import StripeCheckout from "react-stripe-checkout"

import Landing from './Components/Landing'
import Login from './Components/Login'
import Payment from './Pages/Payment'
import Services from './Pages/Packages'
import Contact from './Pages/Contact Us'
import BR from './Components/Beauty Register'
import UR from './Components/User Register'
import Pro from './Pages/Beauticians'
import Who from './Components/Who'
import Pretty from './Pages/Beautypro'
import OS from './Pages/Ourservices'
import Book from './Pages/Book'
import Admin from './Pages/Admin'
import Profilebeauty from './Pages/Profile'
import Adprofile from './Components/addProfile'
import Showprofile from './Pages/showprofile'




function App() {

  // const [product, setProduct] = useState({
  //   name: "React from FB",
  //   price: 10,
  //   productBy: "facebook"
  // })


  // const makePayment = token => {
  //   const body = {
  //     token, 
  //     product
  //   }
  //   const headers = {
  //     "Content-Type": "application/json"
  //   }

  //   return fetch('http://localhost:3002/Payment', {
  //     method: "POST",
  //     headers,
  //     body: JSON.stringify(body)
  //   }).then(response => {
  //     console.log ("RESPONSE", response)
  //     const {status} = response;
  //     console.log("STATUS", status)
  //   })
  //   .catch(error => console.log(error));
  // };

  return (
    <div className="App">
      <Routes>
        <Route path='/' element ={<Landing/>}/>
        <Route path='/login' element ={<Login/>}/>
        <Route path='/Payment' element ={<Payment/>}/>
        <Route path='/packages' element ={<Services/>}/>
        <Route path='/Contact' element ={<Contact/>}/>
        <Route path='/Register' element ={<BR/>}/>
        <Route path='/URegister' element ={<UR/>}/>
        <Route path='/profile' element ={<Pro/>}/>
        <Route path='/role' element ={<Who/>}/>
        <Route path='/Beauty' element ={<Pretty/>}/>
        <Route path='/Services' element ={<OS/>}/>
        <Route path='/Book' element ={<Book/>}/>
        <Route path='/Admin' element ={<Admin/>}/>
        <Route path='/Profilebeauty' element ={<Profilebeauty/>}/>
        <Route path='/Addprofile' element ={<Adprofile/>}/>
        <Route path='/showprofile' element ={<Showprofile/>}/>
      </Routes> 
      

      {/* <StripeCheckout stripeKey={process.env.REACT_APP_KEY} 
      token={makePayment}
      name='Buy React' 
      amount={product.price * 100}
      // shippingAddress
      billingAddress
      > 
      <div className='stripe'>
      <button className='btn-large pink'  style={{borderRadius:'15px',backgroundColor:'pink',marginLeft:'50px'}}>Buy react is just {product.price} $</button>

      </div>
      </StripeCheckout>   */}
    </div>
  );
}

export default App;
