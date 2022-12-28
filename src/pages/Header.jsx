import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [fixed, setFixed] = useState(false);
  const [openClass, setOpenClass] = useState(false);

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

  const handleOpenMenu = () => {
    setOpenClass((prev) => !prev);
  };

  const handleOpen = () => {
    document
      .getElementsByClassName("mobile-menu .navOpen")
      .addEventListener("click", () => {
        const element = document.getElementsByClassName(".main-menu-wrap");
        element.classList.add("open");
      });
  };

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
             
            <nav className="navbar navbar-expand-md navbar-light"  >
              <a className="navbar-brand" href="/">
                <img src="assets/img/1.png" alt="logo" />
              </a>
              <div
                className={"navbar-collapse main-menu-wrap"}
                id="navbarSupportedContent"
              >
                <div className="menu-close d-lg-none">
                  <div >
                    {" "}
                    <i className="ri-close-line"></i>
                  </div>
                </div>
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <a href="/" className="nav-link active">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link to="/About" className="nav-link">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Services" className="nav-link">
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Projects" className="nav-link">
                      Projects
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      Pages
                      <i className="ri-arrow-down-s-line"></i>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link to="/Team" className="nav-link">
                          Our Team
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/Price" className="nav-link">
                          Pricing Table
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/Testimonials" className="nav-link">
                          Testimonials
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link to="/Contact" className="nav-link">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="mobile-bar-wrap">
              <div className="mobile-menu d-lg-none">
                <Link className="navOpen" to="" onClick={handleOpenMenu}>
                  <i className="ri-menu-line"></i>
                </Link>
                
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
