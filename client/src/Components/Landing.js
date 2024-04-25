import React from 'react';
import "./Landing.css"
import Navbar from './nav'

function Navbar1() {
    return (
        <div>
                <Navbar/>
            <div className='home'>

                <div className='bg-img'>
                    <img alt="Makeup products" src="https://img.freepik.com/premium-photo/makeup-products_144962-2898.jpg?ga=GA1.2.1063502306.1703176539&amp;semt=ais" />
                </div>
                <div className='container23'>
                    <h1>Welcome to the Beauty World</h1>
                    <button>Login</button>
                    <button>Register</button>
                </div>
                

                {/* <div id="carouselExampleCaptions" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="..." class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="..." class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="..." class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>


                <footer />
                <div class="footer1" />
                <div class="align1"><img class="img3" src={image} /></div>
                <div class="list1">Beauty Find<br /><br />
                    
                    {/* <div class="footer2">
                        <input type="text" id="text" placeholder="Enter your email" />
                        <button class="btn8" >Subscribe &#11016; </button><br />
                    </div> */}

                {/* </div> */}
                {/* <div class="list1"><br /><br />
                    <p>Home</p>
                    <p>About</p>
                    <p>Profile</p>
                    <p>Contact Us</p>
                    <p>Login</p>

                    <div />
                    <div />


                    <footer /> */}
                {/* </div> */}

            </div>
        </div>
    )
};

export default Navbar1;



