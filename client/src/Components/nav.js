import React from 'react';
import image from '../Components/Gorgeous Queen.png';
import "./nav.css";
// import image from '../FINDER_2.png'



function nav() {
    return (
        <div>
            <header>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid" style={{height:'90px',textAlign:'center'}}>
                        <div class="align1"><img class="img3" src={image} style={{height:'80px',marginBottom:'10px'}}/></div>
                        {/* <a class="navbar-brand" href="#">Gorgeous Queen</a> */}
                        {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button> */}
                        <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                            <ul class="navbar-nav" style={{fontSize:'25px',marginBottom:'50px'}}>
                                <li class="nav-item" >
                                    <a class="nav-link " aria-current="page" href="/">Home </a>
                                </li>&nbsp;&nbsp;&nbsp;
                                {/* <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/About">About</a>
                                </li> */}
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="/Services">Our services</a>
                                </li>&nbsp;&nbsp;&nbsp;
                                <li class="nav-item">
                                    <a class="nav-link " aria-current="page" href="/Profile">Beauticians</a>
                                </li>&nbsp;&nbsp;&nbsp;
                                <li class="nav-item">
                                    <a class="nav-link " aria-current="page" href="/Contact">Contact Us</a>
                                </li>&nbsp;&nbsp;&nbsp;
                                {/* <li class="nav-item">
                                    <a class="nav-link " aria-current="page" href='/login'><button>Login</button></a>
                                </li>&nbsp;&nbsp;&nbsp; */}
                            </ul>
                            {/* <div className='container23' >
                                <a href='/login'><button>Login</button></a>
                            </div> */}
                        </div>
                    </div>
                </nav>

            </header>

        </div>
    )
}

export default nav
