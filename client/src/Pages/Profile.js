import React from 'react';
import '../Pages/Profile.css'


function Profile() {
  return (
    <div>
    <div class="profile-header">
    <img src="https://t4.ftcdn.net/jpg/03/69/47/87/240_F_369478756_SkWCRczifgskGOYA7HWQ4NjGYeFwqNI9.jpg" alt="Beautician's Photo"/>
    <h1 style={{fontWeight:'600'}}>John Mary</h1>
    <p style={{fontSize:'18px'}}>Senior Beautician | Licensed Cosmetologist</p>
    <p style={{fontSize:'18px'}}>Based in Vavuniya</p>
</div>


<div class="container">
    {/* <h2 style={{fontWeight:'600',marginTop:'10px'}}>About Me</h2>
    <p style={{fontSize:'18px'}}>Hi, I'm John Mary, a licensed beautician with over 10 years of experience. I specialize in hair styling, makeup, and skincare. My mission is to make every client feel confident and beautiful. I trained at XYZ Cosmetology School and continue to expand my skills through workshops and courses.</p> */}
</div>


<div class="container services">
    <h2 style={{fontWeight:'600'}}>Services Offered</h2><br/>
    <div class="row">
        <div class="col-md-4">
            <h3>Hair Styling</h3>
            <p style={{fontSize:'18px'}}>Professional hair styling for any occasion. From cuts and coloring to styling for weddings and events.</p>
        </div>
        <div class="col-md-4">
            <h3>Makeup</h3>
            <p style={{fontSize:'18px'}}>Bridal makeup, special event makeup, and everyday makeup looks.</p>
        </div>
        <div class="col-md-4">
            <h3>Skincare</h3>
            <p style={{fontSize:'18px'}}>Customized skincare treatments including facials and peels.</p>
        </div>
    </div>
</div>


<div class="container portfolio">
    <h2 style={{fontWeight:'600'}}>Works</h2><br/>
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
</div><br/><br/>


<div class="container">
    <h2 style={{fontWeight:'600'}}>Customer Rating</h2>
    {/* <p class="testimonial">"Jane Doe did a fantastic job with my wedding hair and makeup! She was professional and made me feel at ease." - [Client's Name]</p>
    <p class="testimonial">"I loved the facial! My skin feels amazing. Highly recommend." - [Client's Name]</p> */}
</div><br/><br/>


<div class="container contact">
    <h2 style={{fontWeight:'600'}}>Contact Information</h2>
    <ul style={{padding:'10px'}}>
        <li>Email: mary@example.com</li>
        <li>Instagram: @mary_beauty</li>
        <li>Location: 123 Main St, Vavuniya</li>
        <li>Business Hours: Mon-Sun, 8am - 6pm</li>
    </ul>

    <button class="btn btn-primary">Save Profile</button>
</div>
</div>

  )
}

export default Profile

