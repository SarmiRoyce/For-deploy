import React from 'react';
// import Profile from '../Pages/Profile';
import Navbar from '../Components/nav';
import '../Pages/Beautypro.css'


function Beautypro() {
  return (
    <div className='beauty'>
      <div className='container2'>
        <h1>Beautician's Profile</h1>
        <div>
        <div className='img1'>
          <img src="https://res.cloudinary.com/purnesh/image/upload/w_540,f_auto/make-up-header.jpg" class="card-img-top" alt="..."/>
        </div>
        <div className='profile-details'>
            <h4 class="card-title" style={{marginTop:'20px'}}>Name:- Ann Julie</h4>
            <h4 class="card-title" style={{marginTop:'20px'}}>Shop Name:- Queen Beauty Shop</h4>
            <h4 class="card-title" style={{marginTop:'20px'}}>Experiences:- 5</h4><br/>
            
            <div className='star'>
            <span class="fa fa-star checked" />
            <span class="fa fa-star checked" />
            <span class="fa fa-star checked" />
            <span class="fa fa-star checked" />
            <span class="fa fa-star checked" />
            </div>
            </div>
      </div>

            <h2 style={{marginTop:'40px',textAlign:'center',fontWeight:'600'}}>Their Works</h2><br/>

          <div className='container6'>
            <div class="card" style={{width: '20rem'}}>
              <img src="https://images.shaadisaga.com/shaadisaga_production/photos/pictures/000/577/505/original/40591191_271392043497596_914250463403248452_n.jpg?" class="card-img-top" alt="..." style={{padding:'15px',height:'390px'}}/>
            </div>
            <div class="card" style={{width: '20rem'}}>
              <img src="https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/07/EYE-MAKEUP.jpg" class="card-img-top" alt="..." style={{padding:'15px',height:'390px'}}/>
            </div>
            <div class="card" style={{width: '20rem'}}>
              <img src="https://i.pinimg.com/736x/fb/d6/cc/fbd6cc0b87b540d3cb726ae2189decf8.jpg" class="card-img-top" alt="..." style={{padding:'15px'}}/>
            </div>
            <div class="card" style={{width: '20rem'}}>
              <img src="https://www.mbmmakeupstudio.com/wp-content/uploads/2023/03/746fd902cb7f1515b6bf2707dcdab035.jpg" class="card-img-top" alt="..." style={{padding:'15px'}}/>
            </div>
          </div><br/><br/>

            <button className='btn10'>Book Now</button><br/><br/>
        </div>
    </div>
      
    
  )
}

export default Beautypro
