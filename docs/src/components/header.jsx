import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
function Header() 
{



    const handleClick = () => {
        debugger
        const toggler = document.querySelector('.navbar-toggler');
        
        if (window.innerWidth < 992) {
            const toggler = document.querySelector('.navbar-toggler');

            if (toggler) {
                toggler.click();
            }
        }
    };

    const location = useLocation();
    useEffect(() => {
        if (location.state?.scrollTo)
        {
            const element = document.getElementById(location.state.scrollTo);
            if (element) {
                const headerOffset = 80; // 👈 your header height
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        }
    }, [location]);

    return( 

        <>

            <nav className="navbar navbar-expand-lg navbar-light Header">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="images/logo.png" className="SiteLogo" alt="Medicenter Logo" />
                       
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarScroll"
                        aria-controls="navbarScroll"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll mt-3">
                            <li className="nav-item">
                                <Link className="nav-link" to="/" onClick={handleClick}>Home  </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link scrollto" to="/AboutUs" onClick={handleClick} state={{ scrollTo: "aboutUs" }} >About Us  </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link scrollto" to="/Treatments" onClick={handleClick} state={{ scrollTo: "Treatments" }} >Our Treatments  </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link scrollto" to="/Photogallery" onClick={handleClick} state={{ scrollTo: "Photogallery" }} >Photo Gallery  </Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link scrollto" to="/ContactUs" onClick={handleClick} state={{ scrollTo: "ContactUs" }} >Contact Us  </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        

        </>

    );
}



export default Header
