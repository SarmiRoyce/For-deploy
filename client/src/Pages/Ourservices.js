import React from 'react'
import Profile from './Beauticians';
import Navbar from '../Components/nav';
import '../Pages/Ourservices.css';
// import Footer from '../Footer'

function Ourservices() {
  return (
    <div className='content'>
        <Navbar/>
        <h1 style={{fontSize:'60px',textAlign:'center',fontWeight:'bold',marginTop:'20px'}}>Our Services</h1><br/>
        <p style={{fontSize:'30px',textAlign:'center'}}>Beauticians provide a range of beauty services that include body scrubs,<br></br>
        tanning treatments, hair removal, face masks and anti-stress massages. <br></br>
        They perform skin analysis and advise customers about their skin, hair <br></br>
        and body. They also perform facials, waxing and aromatherapy <br></br>treatments.</p>

        <a href='/packages'><img src="https://freeonlinedeal.files.wordpress.com/2015/06/parlour-services.jpg" alt="Beauty Parlour and Salon Visits" style={{marginLeft:'700px',marginTop:'20px',borderRadius:'20px'}}/></a><br/><br/>
        {/* <Footer/> */}
      
    </div>
  )
}

export default Ourservices
