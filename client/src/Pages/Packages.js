import React from 'react';
import Profile from './Beauticians';
import Navbar from '../Components/nav';
import Footer from '../Components/Footer';
import '../Pages/Packages.css'


function Packages() {
  return (
        <div className='beauty'>
        <Navbar/>
            <h1 style={{marginTop:'30px'}}>Beautician's Packages</h1>
            <div class="card1" style={{display:'flex',justifyContent:'space-evenly',marginTop:'60px'}}>
                <div>
                  <a href='/profile'> <div class="card" style={{width: '18rem'}}>
                    <img src="https://www.onlinedegree.com/wp-content/uploads/2017/02/beautician.jpg" class="card-img-top" alt="..." style={{padding:'10px',width:'285px',height:'220px'}}/>
                    <div class="card-body">
                      <h5 class="card-title">Hair Cutting</h5>
                    </div>
                  </div></a><br></br>
                  <a href='/profile'> <div class="card" style={{width: '18rem'}}>
                    <img src="https://media.istockphoto.com/id/1289189250/photo/fashionable-multicolored-manicure.jpg?s=612x612&w=0&k=20&c=2G0Zcpt4VvkLxdz77XH-IECSdM-pnReuREBzYobCSLs=" class="card-img-top" alt="..." style={{padding:'10px',width:'285px',height:'220px'}}/>
                    <div class="card-body">
                      <h5 class="card-title">Nail Art</h5>
                    </div>
                  </div></a><br></br>
                  <a href='/profile'> <div class="card" style={{width: '18rem'}}>
                    <img src="https://www.bodycraft.co.in/wp-content/uploads/manicurist-master-makes-manicure-woman-s-hands-spa-treatment-concept.jpg" class="card-img-top" alt="..." style={{padding:'10px',width:'285px',height:'220px'}}/>
                    <div class="card-body">
                      <h5 class="card-title">Manicure</h5>
                    </div>
                  </div></a><br></br>
                  <a href='/profile'> <div class="card" style={{width: '18rem'}}>
                    <img src="https://edelweissspa.net/wp-content/uploads/2014/05/facial_banner1.jpg" class="card-img-top" alt="..." style={{padding:'10px',width:'285px',height:'220px'}}/>
                    <div class="card-body">
                      <h5 class="card-title">Facial</h5>
                    </div>
                  </div></a><br></br>
                </div>
                <div>
                <a href='/profile'> <div class="card" style={{width: '18rem'}}>
                    <img src="https://www.makeuphairbeauty.com/shutterstock_178521473-scaled.jpg" class="card-img-top" alt="..." style={{padding:'10px',width:'285px',height:'220px'}}/>
                    <div class="card-body">
                      <h5 class="card-title">Pedicure</h5>
                    </div>
                    </div></a><br></br>
                    <a href='/profile'> <div class="card" style={{width: '18rem'}}>
                    <img src="https://s2.r29static.com/bin/entry/0b3/0,0,2000,2400/720x864,85/1694595/image.webp" class="card-img-top" alt="..." style={{padding:'10px',width:'285px',height:'220px'}}/>
                    <div class="card-body">
                      <h5 class="card-title">Eyebrow Shape</h5>
                    </div>
                  </div></a><br></br>
                  <a href='/profile'> <div class="card" style={{width: '18rem'}}>
                  <img src="https://images.indianexpress.com/2021/08/GettyImages-hair-colours-1200.jpg" class="card-img-top" alt="..." style={{padding:'10px',width:'285px',height:'220px'}}/>
                    <div class="card-body">
                      <h5 class="card-title">Hair Coloring</h5>
                  </div>
                  </div></a><br></br>
                  <a href='/profile'> <div class="card" style={{width: '18rem'}}>
                  <img src="https://mlnbwqvavz70.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://adphotography.in/wp-content/uploads/2021/04/haldi_look_2.jpg" class="card-img-top" alt="..." style={{padding:'10px',width:'285px',height:'220px'}}/>
                    <div class="card-body">
                      <h5 class="card-title">Normal Makeup</h5>
                    </div>
                  </div></a><br></br>
                
                </div>
                
                <div>
                <a href='/profile'> <div class="card" style={{width: '18rem'}}>
                    <img src="https://miro.medium.com/v2/resize:fit:1282/0*wFv8pCa365VOMz34.jpg" class="card-img-top" alt="..." style={{padding:'10px',width:'285px',height:'220px'}}/>
                    <div class="card-body">
                      <h5 class="card-title">Bridal Makeup</h5>
                    </div>
                    </div></a><br></br>
                    <a href='/profile'> <div class="card" style={{width: '18rem'}}>
                    <img src="https://image-marketing.s3.ap-south-1.amazonaws.com/wp-content/uploads/2020/09/05215409/Best-Bridal-Hairstyles.jpg" class="card-img-top" alt="..." style={{padding:'10px',width:'285px',height:'220px'}}/>
                    <div class="card-body">
                      <h5 class="card-title">Hair Style</h5>
                    </div>
                  </div></a><br></br>
                  <a href='/profile'> <div class="card" style={{width: '18rem'}}>
                  <img src="https://media.karousell.com/media/photos/products/2023/3/21/saree_prepleating_ironing__dra_1679404250_ec7b15f4_thumbnail.jpg" class="card-img-top" alt="..." style={{padding:'10px',width:'288px',height:'220px'}}/>
                    <div class="card-body">
                      <h5 class="card-title">Saree Draping</h5>
                    </div>
                  </div></a><br></br>
                  <a href='/profile'> <div class="card" style={{width: '18rem'}}>
                  <img src="https://naildesigns.com/wp-content/uploads/2020/02/manicure-master-make-nail-extension-gel-nail-extensions-ss-featured.jpg" class="card-img-top" alt="..." style={{padding:'10px',width:'285px',height:'220px'}}/>
                    <div class="card-body">
                      <h5 class="card-title">Nail Enhancements</h5>
                    </div>
                  </div></a><br></br><br/>
                </div>
                </div>
                <Footer/>
        </div>
      
  )
}

export default Packages
