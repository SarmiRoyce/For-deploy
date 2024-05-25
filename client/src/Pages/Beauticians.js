// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'; // Assuming you're using React Router
// import Navbar from '../Components/nav';
// import Footer from '../Components/Footer';
// import './Beauticians.css';

// function Beautician() {
//     const [profiles, setProfiles] = useState([]);
//     const [services, setServices] = useState([]);
//     const [selectedService, setSelectedService] = useState('');

//     // Fetch profiles data
//     useEffect(() => {
//         fetch('http://localhost:3002/beauticianprofile/view') // Adjust the endpoint as necessary
//             .then(response => response.json())
//             .then(data => {
//                 if (Array.isArray(data)) {
//                     setProfiles(data);
//                 } else {
//                     console.error('Error: Profiles data is not an array', data);
//                 }
//             })
//             .catch(error => console.error('Error fetching profiles:', error));
//     }, []);

//     // Fetch services data
//     useEffect(() => {
//         fetch('http://localhost:3002/beauticianprofile/view') // Adjust the endpoint as necessary
//             .then(response => response.json())
//             .then(data => {
//                 if (Array.isArray(data)) {
//                     setServices(data);
//                 } else {
//                     console.error('Error: Services data is not an array', data);
//                 }
//             })
//             .catch(error => console.error('Error fetching services:', error));
//     }, []);

//     const handleChange = (e) => {
//         setSelectedService(e.target.value);
//     };

//     // Filter profiles based on selected service
//     const currentProfiles = selectedService
//         ? profiles.filter(profile => profile.services && profile.services.includes(selectedService))
//         : profiles;

//     return (
//         <div className='beauty'>
//             <Navbar />
//             <div style={{ textAlign: 'center', margin: '20px' }}>
//                 <select onChange={handleChange} style={{ fontSize: '20px', padding: '10px', width: '300px' }}>
//                     <option value="">Select a package</option>
//                     {services.map((service, index) => (
//                         <option key={index} value={service.name}> {/* Assuming each service has a 'name' property */}
//                             {service.name}
//                         </option>
//                     ))}
//                 </select>
//             </div>
//             <div className="profile-grid" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
//                 {Array.isArray(currentProfiles) && currentProfiles.map(profile => (
//                     <Link to={`/profile/${profile._id}`} key={profile._id} className="profile-link">
//                         <div className="profile-card" style={{ margin: '10px', border: '1px solid #ccc', padding: '20px', width: '300px' }}>
//                             <img src={profile.image} alt={profile.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
//                             <h3>{profile.name}</h3>
//                             <p>{profile.title}</p>
//                             <p>{profile.location}</p>
//                         </div>
//                     </Link>
//                 ))}
//             </div>
//             <Footer />
//         </div>
//     );
// }

// export default Beautician;












// // OLD



import React, { useState, useEffect } from 'react';
import Navbar from '../Components/nav';
import Footer from '../Components/Footer';
import './Beauticians.css';

function Beautician() {
    const [beauticians, setBeauticians] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3002/beauticianprofile/show')
            .then(response => response.json())
            .then(data => setBeauticians(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className='beauty'>
            <Navbar />
            <h1 style={{ marginTop: '30px' }}>Beauticians Team</h1>
            <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', marginTop: '50px' }}>
                {beauticians.map((beautician, index) => (
                    <div key={index} className="card" style={{ width: '18rem', margin: '10px' }}>
                        <img src={beautician.imgSrc} className="card-img-top" alt={`${beautician.name}`} style={{ padding: '10px', width: '285px', height: '220px' }} />
                        <div className="card-body">
                            <h5 className="card-title">{beautician.name}</h5>
                            <div className="stars">
                                {[...Array(5)].map((star, i) => (
                                    <span key={i} className={`fa fa-star ${i < beautician.rating ? 'checked' : ''}`} style={{ color: 'yellow' }}></span>
                                ))}
                            </div>
                            <a href="/showprofile"><button className='btn12'>View Profile</button></a>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Beautician;

