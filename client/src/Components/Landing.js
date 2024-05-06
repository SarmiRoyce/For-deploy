import React from 'react';
import "./Landing.css";
import Navbar from './nav';
import image from '../Components/Gorgeous Queen.png';
import Footer from './Footer'

function Navbar1() {
    return (
        <div>
            <Navbar />
            <div className='home' style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/cosmetic-products-with-makeup-brush-black-backdrop_23-2147899360.jpg?t=st=1714306715~exp=1714307315~hmac=06f4ee03baaa0e00084f72bf93c49034db4970261448349a8de0dd3fe086eec4)' }}>

                {/* <div className='bg-img'> */}
                {/* <img alt="Different cosmetics scattered on light table" src="https://img.freepik.com/premium-photo/makeup-brush-decorative-cosmetics-black-background-with-empty-space-top-view_250469-11162.jpg"/> */}
                {/* <img alt="Makeup products" src="https://img.freepik.com/premium-photo/makeup-products_144962-2898.jpg?ga=GA1.2.1063502306.1703176539&amp;semt=ais" /> */}
                {/* </div> */}
                <div className='container23' >
                    <h1  style={{textAlign:'left',fontSize:'100px',marginLeft:'60px'}} className='text1'>Welcome to the <br/>Beauty World!</h1><br />
                    <h3 style={{textAlign:'left',fontSize:'40px',marginLeft:'60px'}} className='text2'>Join with us to make your special occasions are <br />memorable and beautiful.</h3><br /><br />
                    <div>
                        <a href='/login'><button>Login</button></a>
                    </div>
                </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <Footer/>
                

            </div>
        </div>
    )
};

export default Navbar1;



