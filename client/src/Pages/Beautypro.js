// import React from 'react';
// // import Profile from '../Pages/Profile';
// import Navbar from '../Components/nav';
// import '../Pages/Beautypro.css'


// function Beautypro() {
//   return (
//     <div className='beauty'>
//       <Navbar/>
//       <div className='container2'>
//         <h1 style={{marginTop:'20px'}}>Beautician's Profile</h1>
//         <div>
//         <div className='img1'>
//           <img src="https://res.cloudinary.com/purnesh/image/upload/w_540,f_auto/make-up-header.jpg" class="card-img-top" alt="..."/>
//         </div>
//         <div className='profile-details'>
//             <h4 class="card-title" style={{marginTop:'20px'}}>Name:- Ann Julie</h4>
//             <h4 class="card-title" style={{marginTop:'20px'}}>Shop Name:- Queen Beauty Shop</h4>
//             <h4 class="card-title" style={{marginTop:'20px'}}>Experiences:- 5 Years</h4><br/>
            
//             <div className='star'>
//             <span class="fa fa-star checked" />
//             <span class="fa fa-star checked" />
//             <span class="fa fa-star checked" />
//             <span class="fa fa-star checked" />
//             <span class="fa fa-star checked" />
//             </div><br/><br/>
//             </div>
//             </div>
//       <div className='beauty-table'>
  
//     <table border="10">
//       <thead className='Profile5'><br/>
//         <tr>
//           <th>Time</th>
//           <th>Monday 29/04</th>
//           <th>Tuesday 30/04</th>
//           <th>Wednesday 01/05</th>
//           <th>Thursday 02/05</th>
//           <th>Friday 03/05</th>
//           <th>Saturday 04/05</th>
//           <th>Sunday 05/05</th>
//         </tr>
//       </thead><br/>
//       <tbody>
//         <tr>
//           <td>8.00 a.m</td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//           <td><button style={{backgroundColor:'red'}}>Not Available</button></td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//           <td><button style={{backgroundColor:'red'}}>Not Available</button></td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//         </tr><br/>
//         <tr>
//           <td>9.00 a.m</td>
//           <td><button style={{backgroundColor:'red'}}>Not Available</button></td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//           <td><button style={{backgroundColor:'red'}}>Not Available</button></td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//         </tr><br/>
//         <tr>
//           <td>10.00 a.m</td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//           <td><button style={{backgroundColor:'red'}}>Not Available</button></td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//           <td><button style={{backgroundColor:'red'}}>Not Available</button></td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//           <td><button style={{backgroundColor:'red'}}>Not Available</button></td>
//         </tr><br/>
//         <tr>
//           <td>11.00 a.m</td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//           <td><button style={{backgroundColor:'red'}}>Not Available</button></td>
//           <td><button style={{backgroundColor:'red'}}>Not Available</button></td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//           <td><button style={{backgroundColor:'red'}}>Not Available</button></td>
//           <td><button style={{backgroundColor:'red'}}>Not Available</button></td>
//           <td><button style={{backgroundColor:'red'}}>Not Available</button></td>
//         </tr><br/>
//         <tr>
//           <td>12.00 p.m</td>
//           <td><button style={{backgroundColor:'red'}}>Not Available</button></td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//           <td><button style={{backgroundColor:'red'}}>Not Available</button></td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//           <td><button style={{backgroundColor:'red'}}>Not Available</button></td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//         </tr><br/>
//         <tr>
//           <td>1.00 p.m</td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//           <td><button style={{backgroundColor:'red'}}>Not Available</button></td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//           <td><button style={{backgroundColor:'red'}}>Not Available</button></td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//         </tr><br/>
//         <tr>
//           <td>2.00 p.m</td>
//           <td><button style={{backgroundColor:'red'}}>Not Available</button></td>
//           <td><button style={{backgroundColor:'red'}}>Not Available</button></td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//           <td><button style={{backgroundColor:'red'}}>Not Available</button></td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//           <td><button style={{backgroundColor:'red'}}>Not Available</button></td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//         </tr><br/>
//         <tr>
//           <td>3.00 p.m</td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//           <td><button style={{backgroundColor:'red'}}>Not Available</button></td>
//           <td><button style={{backgroundColor:'red'}}>Not Available</button></td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//           <td><button style={{backgroundColor:'red'}}>Not Available</button></td>
//         </tr><br/>
//         <tr>
//           <td>4.00 p.m</td>
//           <td><button style={{backgroundColor:'red'}}>Not Available</button></td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//           <td><button style={{backgroundColor:'red'}}>Not Available</button></td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//           <td><button style={{backgroundColor:'red'}}>Not Available</button></td>
//           <td><button style={{backgroundColor:'red'}}>Not Available</button></td>
//           <td><button style={{backgroundColor:'red'}}>Not Available</button></td>
//         </tr><br/>
//         <tr>
//           <td>5.00 p.m</td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//           <td><button style={{backgroundColor:'red'}}>Not Available</button></td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//           <td><button style={{backgroundColor:'red'}}>Not Available</button></td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//         </tr><br/>
//         <tr>
//           <td>6.00 p.m</td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//           <td><button style={{backgroundColor:'red'}}>Not Available</button></td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//           <td><button style={{backgroundColor:'green'}}>Available</button></td>
//         </tr><br/>
//       </tbody>
//     </table>

//   </div>
//   </div>

//             <h2 style={{marginTop:'80px',textAlign:'center',fontWeight:'600'}}>Their Works</h2><br/><br/>

//           <div className='container6'>
//             <div class="card" style={{width: '20rem'}}>
//               <img src="https://images.shaadisaga.com/shaadisaga_production/photos/pictures/000/577/505/original/40591191_271392043497596_914250463403248452_n.jpg?" class="card-img-top" alt="..." style={{padding:'15px',height:'390px'}}/>
//               <p>Type of their Work:- Hindi bridal makeup</p>
//               <p>Year:- 2020</p>
//             </div>
//             <div class="card" style={{width: '20rem'}}>
//               <img src="https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/07/EYE-MAKEUP.jpg" class="card-img-top" alt="..." style={{padding:'15px',height:'390px'}}/>
//               <p>Type of their Work:- Hindu bridal makeup</p>
//               <p>Year:- 2023</p>
//             </div>
//             <div class="card" style={{width: '20rem'}}>
//               <img src="https://i.pinimg.com/736x/fb/d6/cc/fbd6cc0b87b540d3cb726ae2189decf8.jpg" class="card-img-top" alt="..." style={{padding:'15px'}}/>
//               <p>Type of their Work:- Haldi makeup look</p>
//               <p>Year:- 2022</p>
//             </div>
//             <div class="card" style={{width: '20rem'}}>
//               <img src="https://www.mbmmakeupstudio.com/wp-content/uploads/2023/03/746fd902cb7f1515b6bf2707dcdab035.jpg" class="card-img-top" alt="..." style={{padding:'15px'}}/>
//               <p>Type of their Work:- Bridal makeup</p>
//               <p>Year:- 2021</p>
//             </div>
//           </div><br/><br/>

//          {/* <a href='/Book'><button className='btn10'>Book Now</button><br/><br/></a> */}
//         </div>
      
    
//   )
// }







// export default Beautypro
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../Pages/Beautypro.css'

const Beautypro = () => {
  const [formData, setFormData] = useState({ services: [] });

  const handleChange = (e) => {
    const { value, checked } = e.target;
    let newOptions = formData.services;

    if (checked) {
      newOptions = [...newOptions, value];
    } else {
      newOptions = newOptions.filter(option => option !== value);
    }

    setFormData({ ...formData, services: newOptions });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send the data to the server)
    console.log('Submitted data:', formData); // Example log for now
  };

  const navigate = useNavigate(); // Get navigation function

  const handleClick = () => {
    const serviceData = formData.services; // Extract selected services

    // Navigate to "/Beauty" and pass serviceData as state
    navigate('/Profilebeauty', { state: { serviceData } });
  };

  return (
    <div className="beauty-form">
      <form onSubmit={handleSubmit} style={{width:'500px'}}>
        <div>
          <label>Services:</label>
          <div>
            <input
              type="checkbox"
              name="services"
              value="HairCutting"
              onChange={handleChange}
            /> Hair Cutting
          </div>
          <div>
            <input
              type="checkbox"
              name="services"
              value="NailArt"
              onChange={handleChange}
            /> Nail Art
          </div>
          <div>
            <input
              type="checkbox"
              name="services"
              value="Manicure"
              onChange={handleChange}
            /> Manicure
          </div>
          <div>
            <input
              type="checkbox"
              name="services"
              value="Facial"
              onChange={handleChange}
            /> Facial
          </div>
          <div>
            <input
              type="checkbox"
              name="services"
              value="Pedicure"
              onChange={handleChange}
            /> Pedicure
          </div>
          <div>
            <input
              type="checkbox"
              name="services"
              value="EyebrowShape"
              onChange={handleChange}
            /> Eyebrow Shape
          </div>
          <div>
            <input
              type="checkbox"
              name="services"
              value="HairColoring"
              onChange={handleChange}
            /> Hair Coloring
          </div>
          <div>
            <input
              type="checkbox"
              name="services"
              value="NormalMakeup"
              onChange={handleChange}
            /> Normal Makeup
          </div>
          <div>
            <input
              type="checkbox"
              name="services"
              value="BridalMakeup"
              onChange={handleChange}
            /> Bridal Makeup
          </div>
          <div>
            <input
              type="checkbox"
              name="services"
              value="HairStyle"
              onChange={handleChange}
            /> Hair Style
          </div>
          <div>
            <input
              type="checkbox"
              name="services"
              value="SareeDraping"
              onChange={handleChange}
            /> Saree Draping
          </div>
          <div>
            <input
              type="checkbox"
              name="services"
              value="NailExhancements"
              onChange={handleChange}
            /> Nail Enhancements
          </div>
        </div>

        <div className="container14">
          <button type="button" className="btn btn-primary" onClick={handleClick}>
            Services
          </button>
        </div>
      </form>
    </div>
  );
};

export default Beautypro;

