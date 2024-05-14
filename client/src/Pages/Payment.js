import React from 'react'
// import Profile from '../Pages/Profile';
import Navbar from '../Components/nav';
import '../Pages/Payment.css'

function Payment(){
    return (
    <div>
        <Navbar/>
        {/* <div className='pay'> */}
        <div className='payment-full'>
            <form className='Payment' >

            <div className='payment-text'>
              <h1>Payment Page</h1>
              <label>Full Name</label><br/>
              <input type='Text' placeholder='Enter your name' ></input><br/><br/>

              <label>Email Address</label><br/>
              <input type='Email' placeholder='Enter your email' ></input><br/><br/>

              <label>Phone Number</label><br/>
              <input type='Text' placeholder='Enter your number' ></input><br/><br/>

              <label>Date</label><br/>
              <input type='Date' placeholder='Enter your date' ></input><br/><br/>

              <label>Postal Code</label><br/>
              <input type='Text' placeholder='Enter your postal code' ></input><br/><br/>

              
              <input type='checkbox' style={{marginRight:'20px',width:'20px',height:'20px'}}></input>
              <label>I have promo code</label><br/><br/>
             

              <button className='btn14'>Continue to payment</button><br/><br/>
              
              </div>
              {/* <div>
                <h3>Payment Method</h3>
                <img src="https://logowik.com/content/uploads/images/219_visa.jpg" alt='visa card' style={{width:'150px'}}/>
                <img src="https://imgk.timesnownews.com/story/1569653930-Credit_Card.jpg" alt='credit card' style={{width:'150px'}}/>
              </div> */}
            </form>
        </div>
        </div>
    // </div>
    )
}

export default Payment;