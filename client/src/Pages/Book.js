import React from 'react'
// import Profile from '../Pages/Profile';
import Navbar from '../Components/nav';
import '../Pages/Book.css'

function Book() {
  return (
    <div>
        <Navbar/>
        <div className='book-full'>
    
          <form className='Book' >

            <div className='book-text'>
              <h1>Book Appointment</h1>
              <label>Beautician's Name</label><br/>
              <input type='Text' placeholder='Enter your name' ></input><br/><br/>

              <label>Customer's Name</label><br/>
              <input type='Text' placeholder='Enter your name' ></input><br/><br/>

              <label>Package</label><br/>
              <input type='Text' placeholder='Enter your package' ></input><br/><br/>

              <label>Date</label><br/>
              <input type='Date' placeholder='Enter your date' ></input><br/><br/>

              <label>Time</label><br/>
              <input type='Time' placeholder='Enter your time' ></input><br/><br/>
              

              <a href='/Payment'><button className='btn6'>Confirm</button><br/><br/></a>
              
              </div>
            </form>
          </div>
      
    </div>
  )
}

export default Book
