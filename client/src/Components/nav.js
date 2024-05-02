import React from 'react';
import image from '../Components/Gorgeous Queen.png';
// import image from '../FINDER_2.png'


function nav() {
    return (
        <div>
            <header>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <div class="align1"><img class="img3" src={image} /></div>
                        {/* <a class="navbar-brand" href="#">Gorgeous Queen</a> */}
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                            <ul class="navbar-nav" style={{fontSize:'25px'}}>
                                <li class="nav-item" >
                                    <a class="nav-link active" aria-current="page" href="/" >Home </a>
                                </li>
                                {/* <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/About">About</a>
                                </li> */}
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/Services">Ourservices</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/Profile">Beauticians</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/Contact">Contact Us</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>

            </header>

        </div>
    )
}

export default nav
