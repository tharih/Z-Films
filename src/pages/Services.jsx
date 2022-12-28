import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="content-wrapper">
      <div className="breadcrumb-wrap">
        <img
          src="assets/img/breadcrumb/br-shape.png"
          alt="Image"
          className="br-shape"
        />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <div className="breadcrumb-title">
                <h2>Services</h2>
                <ul className="breadcrumb-menu list-style">
                  <li>
                    <Link to="Home">Home </Link>
                  </li>
                  <li>Services</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="breadcrumb-img">
                <img src="assets/img/breadcrumb/br-1.png" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="service-wrap ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="service-card style1">
                <div className="service-img">
                  <img src="assets/img/new/08.jpg" alt="Image" />
                </div>
                <div className="service-info">
                  <h3>
                    <Link to="/ServiceDetails">Woman Portrait</Link>
                  </h3>
                  <Link to="/ServiceDetails" className="link style1">
                    VIEW MORE
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="service-card style2">
                <div className="service-img">
                  <img src="assets/img/service/service-2.jpg" alt="Image" />
                </div>
                <div className="service-info">
                  <h3>
                    <Link to="/ServiceDetails">Children Portrait</Link>
                  </h3>
                  <Link to="/ServiceDetails" className="link style1">
                    VIEW MORE
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="service-card style1">
                <div className="service-img">
                  <img src="assets/img/service/service-3.jpg" alt="Image" />
                </div>
                <div className="service-info">
                  <h3>
                    <Link to="/ServiceDetails">Man Portrait</Link>
                  </h3>
                  <Link to="/ServiceDetails" className="link style1">
                    VIEW MORE
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="service-card style2">
                <div className="service-img">
                  <img src="assets/img/new/11.jpg" alt="Image" />
                </div>
                <div className="service-info">
                  <h3>
                    <Link to="/ServiceDetails">Couple Moment</Link>
                  </h3>
                  <Link to="/ServiceDetails" className="link style1">
                    VIEW MORE
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="service-card style1">
                <div className="service-img">
                  <img src="assets/img/service/service-5.jpg" alt="Image" />
                </div>
                <div className="service-info">
                  <h3>
                    <Link to="/ServiceDetails">Film &amp; Production</Link>
                  </h3>
                  <Link to="/ServiceDetails" className="link style1">
                    VIEW MORE
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="service-card style2">
                <div className="service-img">
                  <img src="assets/img/service/service-6.jpg" alt="Image" />
                </div>
                <div className="service-info">
                  <h3>
                    <Link to="/ServiceDetails">Studio Sessions</Link>
                  </h3>
                  <Link to="/ServiceDetails" className="link style1">
                    VIEW MORE
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="service-card style1">
                <div className="service-img">
                  <img src="assets/img/service/service-7.jpg" alt="Image" />
                </div>
                <div className="service-info">
                  <h3>
                    <Link to="/ServiceDetails">Retouch Photo</Link>
                  </h3>
                  <Link to="/ServiceDetails" className="link style1">
                    VIEW MORE
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="service-card style2">
                <div className="service-img">
                  <img src="assets/img/new/03.jpg" alt="Image" />
                </div>
                <div className="service-info">
                  <h3>
                    <Link to="/ServiceDetails">Couple Moment</Link>
                  </h3>
                  <Link to="/ServiceDetails" className="link style1">
                    VIEW MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-15">
            <Link to="service-two.html" className="btn style1"  style={{color: "white"}}>
              LOAD MORE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
