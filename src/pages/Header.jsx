import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [fixed, setFixed] = useState(false);

  const setFix = () => {
    if (window.scrollY > 100) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", setFix);

    return () => window.removeEventListener("scroll", setFix);
  }, []);

  return (
    <div>
      <div className="loader js-preloader">
        <img src="assets/img/preloader.gif" alt="Image" />
      </div>

      {/* <div className="switch-theme-mode">
        <label id="switch" className="switch">
            <input type="checkbox" onChange="toggleTheme()" id="slider" />
            <span className="slider round"></span>
        </label>
    </div> */}

      <div className="page-wrapper">
        <header
          className={fixed ? "header-wrap style2 sticky" : "header-wrap style2"}
        >
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <a className="navbar-brand" href="index.html">
                <img src="assets/img/1.png" alt="logo" />
              </a>
              <div
                className="collapse navbar-collapse main-menu-wrap"
                id="navbarSupportedContent"
              >
                <div className="menu-close d-lg-none">
                  <a href="">
                    {" "}
                    <i className="ri-close-line"></i>
                  </a>
                </div>
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <a href="Home" className="nav-link active">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="About" className="nav-link">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href=" Services" className="nav-link">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="Projects" className="nav-link">
                      Projects
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Pages
                      <i className="ri-arrow-down-s-line"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="Team" className="nav-link">
                          Our Team
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="Price" className="nav-link">
                          Pricing Table
                        </a>
                      </li>

                      <li className="nav-item">
                        <a href="Testimonials" className="nav-link">
                          Testimonials
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="Contact" className="nav-link">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="mobile-bar-wrap">
              <div className="mobile-menu d-lg-none">
                <a href="">
                  <i className="ri-menu-line"></i>
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
