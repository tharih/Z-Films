import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    
    <div>
     <div class="loader js-preloader">
        <img src="assets/img/preloader.gif" alt="Image" />
    </div>


    {/* <div class="switch-theme-mode">
        <label id="switch" class="switch">
            <input type="checkbox" onChange="toggleTheme()" id="slider" />
            <span class="slider round"></span>
        </label>
    </div> */}


    <div class="page-wrapper">
    <header class="header-wrap style2">
            <div class="container">
                <nav class="navbar navbar-expand-md navbar-light">
                    <a class="navbar-brand" href="index.html">
                        <img src="assets/img/1.png" alt="logo" />
                    </a>
                    <div class="collapse navbar-collapse main-menu-wrap" id="navbarSupportedContent">
                        <div class="menu-close d-lg-none">
                            <a href="javascript:void(0)" > <i class="ri-close-line"></i></a>
                        </div>
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item">
                                <a href="Home" class="nav-link active">
                                    Home
                                  
                                </a>
                                
                            </li>
                            <li class="nav-item">
                                <a href="About" class="nav-link">
                                    About Us
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href=" Services" class="nav-link">
                                    Services
                                    
                                </a>
                                
                            </li>
                            <li class="nav-item">
                                <a href="Projects" class="nav-link">
                                    Projects
                                    
                                </a>
                                
                            </li>
                           
                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    Pages
                                    <i class="ri-arrow-down-s-line"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    
                                    <li class="nav-item">
                                        <a href="Team" class="nav-link">Our Team</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="Price" class="nav-link">Pricing Table</a>
                                    </li>
                                   
                                    <li class="nav-item">
                                        <a href="Testimonials" class="nav-link">Testimonials</a>
                                    </li>
                                    
                                    
                                    
                                </ul>
                            </li>
                            
                            <li class="nav-item">
                                <a href="Contact" class="nav-link">Contact Us</a>
                            </li>
                           
                        </ul>
                       
                    </div>
                </nav>
                <div class="mobile-bar-wrap">
                    <div class="mobile-menu d-lg-none">
                        <a href="javascript:void(0)"><i class="ri-menu-line"></i></a>
                    </div>
                </div>
            </div>
        </header>

    </div>

    </div>
  );
}
