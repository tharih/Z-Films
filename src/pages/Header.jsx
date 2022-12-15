import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
     <div class="loader js-preloader">
        <img src="assets/img/preloader.gif" alt="Image" />
    </div>


    <div class="switch-theme-mode">
        <label id="switch" class="switch">
            <input type="checkbox" onchange="toggleTheme()" id="slider" />
            {/* <span class="slider round"></span> */}
        </label>
    </div>


    <div class="page-wrapper">

        <header class="header-wrap style1">
            <div class="container">
                <nav class="navbar navbar-expand-md navbar-light">
                    <a class="navbar-brand" href="index.html">
                        {/* <img class="logo-light" src="assets/img/logo.png" alt="logo" /> */}
                        <img class="logo-dark" src="assets/img/1.png" alt="logo" />
                    </a>
                    <div class="collapse navbar-collapse main-menu-wrap" id="navbarSupportedContent">
                        <div class="menu-close d-lg-none">
                            <a href="javascript:void(0)"> <i class="ri-close-line"></i></a>
                        </div>
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item">
                                <Link to="/Home" class="nav-link active">
                                    Home
                                    
                                </Link>
                                
                            </li>
                            <li class="nav-item">
                                <Link to="/About" class="nav-link">
                                    About Us
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Services" class="nav-link">
                                    Services
                                   
                                </Link>
                                
                            </li>
                            <li class="nav-item">
                                <Link to="/Projects" class="nav-link">
                                    Projects
                                   
                                </Link>
                                
                            </li>
                          
                            <li class="nav-item">
                                <Link to="#" class="nav-link">
                                    Pages
                                    <i class="ri-arrow-down-s-line"></i>
                                </Link>
                                <ul class="dropdown-menu">
                                   
                                    <li class="nav-item">
                                        <Link to="/Team" class="nav-link">Our Team</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to="/Price" class="nav-link">Pricing Table</Link>
                                    </li>
                                    {/* <li class="nav-item">
                                        <Link to="faq.html" class="nav-link">FAQ</Link>
                                    </li> */}
                                    <li class="nav-item">
                                        <Link to="/Testimonials" class="nav-link">Testimonials</Link>
                                    </li>
                                    {/* <li class="nav-item">
                                        <Link to="terms-of-service.html" class="nav-link">Terms of Service</Link>
                                    </li> */}
                                    {/* <li class="nav-item">
                                        <Link to="privacy-policy.html" class="nav-link">Privacy Policy</Link>
                                    </li> */}
                                    {/* <li class="nav-item">
                                        <Link to="error-404.html" class="nav-link">404 Error Page</Link>
                                    </li> */}
                                </ul>
                            </li>
                          
                            <li class="nav-item">
                                <Link to="/Contact" class="nav-link">Contact Us</Link>
                            </li>
                            {/* <li class="nav-item d-lg-none">
                                <Link to="login.html" class="btn style1">BOOK ONLINE</Link>
                            </li> */}
                        </ul>
                        {/* <div class="other-options md-none">
                            <div class="option-item">
                                <a class="shopcart-btn" href="cart.html"><i class="flaticon-bag"></i>
                                    <span>10</span></a>
                            </div>
                            <div class="option-item">
                                <Link to="login.html" class="btn style1">BOOK ONLINE</Link>
                            </div>
                        </div> */}
                    </div>
                </nav>
                <div class="mobile-bar-wrap">
                    <div class="mobile-menu d-lg-none">
                        <Link to="javascript:void(0)"><i class="ri-menu-line"></i></Link>
                    </div>
                </div>
            </div>
        </header>
    </div>


    
    

     
    </div>
  );
}
