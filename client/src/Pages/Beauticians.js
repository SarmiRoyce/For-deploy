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
