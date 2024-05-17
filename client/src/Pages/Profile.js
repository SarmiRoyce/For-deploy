import React from 'react';
import '../Pages/Profile.css'


function Profile() {
  return (
    <div>
    <div class="profile-header">
    <img src="https://t4.ftcdn.net/jpg/03/69/47/87/240_F_369478756_SkWCRczifgskGOYA7HWQ4NjGYeFwqNI9.jpg" alt="Beautician's Photo"/>
    <h1 style={{fontWeight:'600'}}>John Mary</h1>
    <p style={{fontSize:'18px'}}>Senior Beautician | Licensed Cosmetologist</p>
    <p style={{fontSize:'18px'}}>5 Years</p>
    <p style={{fontSize:'18px'}}>Based in Vavuniya</p>
</div>


<div class="container">
    <h3 style={{fontWeight:'800'}}>Service Offered</h3>
    <input type='radio'></input>
    <label>Hair Cutting</label>

    <input type='radio'></input>
    <label>Nail Art</label>

    <input type='radio'></input>
    <label>Manicure</label>

    <input type='radio'></input>
    <label>Facial</label>

    <input type='radio'></input>
    <label>Pedicure</label>

    <input type='radio'></input>
    <label>Eyebrow Shape</label>

    <input type='radio'></input>
    <label>Hair Coloring</label>

    <input type='radio'></input>
    <label>Normal Makeup</label>

    <input type='radio'></input>
    <label>Bridal Makeup</label>

    <input type='radio'></input>
    <label>Hair Style</label>

    <input type='radio'></input>
    <label>Saree Draping</label>

    <input type='radio'></input>
    <label>Nail Exhancements</label>

</div>


<div class="container portfolio">
    <h2 style={{fontWeight:'600',marginTop:'20px',textAlign:'center'}}>Works</h2><br/>
    <div class="row">
        <div class="col-md-4">
        <img src="https://i.ytimg.com/vi/IHn--eG--ZM/maxresdefault.jpg" alt="Hair Styling"/>
            <p style={{fontSize:'22px',marginTop:'10px'}}>Wedding hair styling</p>
        </div>
        <div class="col-md-4">
            <img src="https://e0.pxfuel.com/wallpapers/833/31/desktop-wallpaper-bridal-makeup-makeup-wedding.jpg" alt="Makeup"/>
            <p style={{fontSize:'22px',marginTop:'10px'}}>Bridal makeup</p>
        </div>
        <div class="col-md-4" style={{width:'390px'}}>
            <img src="https://alexsa.co.uk/wp-content/uploads/treatment.jpg" alt="Skincare"/>
            <p style={{fontSize:'22px',marginTop:'10px'}}>Facial treatment</p>
        </div>
    </div>
</div><br/>


{/* <div class="container">
    <h2 style={{fontWeight:'600'}}>Customer Rating</h2>
    <p class="testimonial">"Jane Doe did a fantastic job with my wedding hair and makeup! She was professional and made me feel at ease." - [Client's Name]</p>
    <p class="testimonial">"I loved the facial! My skin feels amazing. Highly recommend." - [Client's Name]</p>
</div><br/><br/> */}


<div class="container contact">
    <h2 style={{fontWeight:'600'}}>Contact Information</h2><br/>
        <h4>Email: mary@example.com</h4>
        <h4>Instagram: @mary_beauty</h4>
        <h4>Location: 123 Main St, Vavuniya</h4>
        <h4>Business Hours: Mon-Sun, 8am - 6pm</h4>

    <button class="btn btn-primary">Save Profile</button>
</div>
</div>

  )
}

export default Profile

