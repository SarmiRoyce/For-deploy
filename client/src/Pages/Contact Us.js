import React from 'react';
import Profile from './Beauticians';
import Navbar from '../Components/nav';
import '../Pages/Contact Us.css'

export default function Contact() {
  return (
    <div>
        <Navbar/>
        <div className='contact-full'>
    
          <form className='Contact'>

            <div className='contact-text'>
              <h1>Contact Us</h1>
              <label>Name</label><br/>
              <input type='Text' placeholder='Enter your name'></input><br/><br/>

              <label>Email Address</label><br/>
              <input type='Email' placeholder='Enter your email'></input><br/><br/>

              <label>Message</label><br/>
              <textarea style={{width:'450px',height:'140px'}}></textarea><br/><br/>


              <button className='btn15'>Send</button><br/><br/>


            </div>
          </form>
        </div>
    </div>


  )
}







    {/* <section class="vh-100">
        <div class="container py-5 h-100">
        <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
          <form className='form2'>
            <div data-mdb-input-init class="form-outline mb-4">
                <h2 style={{fontSize:'60px',textAlign:'center'}}>Contact Us</h2><br/>
                <label class="form-label6" for="form1Example13">Name</label>
                <input type="email" id="form1Example13" class="form-control form-control-lg" />
            </div>

            <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label6" for="form1Example23">Email address</label>
                <input type="password" id="form1Example23" class="form-control form-control-lg" />
            </div>

        
            <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label6" for="form1Example23">Message</label>
                <input type="password" id="form1Example23" class="form-control form-control-lg" />
            </div><br/>


            <buttons className='btn15'>Submit</buttons><br/><br/>
          


        </form>
      </div>
  </div>
</section>
</div>

  )
} */}

