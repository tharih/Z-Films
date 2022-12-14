import React from 'react'

export default function Price() {
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
              <h2>Pricing Plan</h2>
              <ul className="breadcrumb-menu list-style">
                <li>
                  <a href="index.html">Home </a>
                </li>
                <li>Pricing Plan</li>
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
    <section className="pricing-wrap pt-100 pb-75">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="pricing-card style4">
              <h6>Basic Package</h6>
              <div className="pricing-tag">
                <span>$</span>49.00 <p>/Month</p>
              </div>
              <ul className="pricing-features list-style">
                <li>
                  <i className="ri-check-fill" />1 Hour Session
                </li>
                <li>
                  <i className="ri-check-fill" />
                  10 Digital Images
                </li>
                <li>
                  <i className="ri-check-fill" />
                  Online Gallery
                </li>
                <li>
                  <i className="ri-check-fill" />1 Photographer
                </li>
              </ul>
              <a href="login.html" className="btn style2">
                PURCHASE NOW
              </a>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="pricing-card style4">
              <h6>Premium Package</h6>
              <div className="pricing-tag">
                <span>$</span>59.00 <p>/Month</p>
              </div>
              <ul className="pricing-features list-style">
                <li>
                  <i className="ri-check-fill" />2 Hour Session
                </li>
                <li>
                  <i className="ri-check-fill" />
                  20 Digital Images
                </li>
                <li>
                  <i className="ri-check-fill" />
                  Online Gallery
                </li>
                <li>
                  <i className="ri-check-fill" />2 Photographer
                </li>
              </ul>
              <a href="login.html" className="btn style2">
                PURCHASE NOW
              </a>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="pricing-card style4">
              <h6>Professional Package</h6>
              <div className="pricing-tag">
                <span>$</span>69.00 <p>/Month</p>
              </div>
              <ul className="pricing-features list-style">
                <li>
                  <i className="ri-check-fill" />3 Hour Session
                </li>
                <li>
                  <i className="ri-check-fill" />
                  30 Digital Images
                </li>
                <li>
                  <i className="ri-check-fill" />
                  Online Gallery
                </li>
                <li>
                  <i className="ri-check-fill" />4 Photographer
                </li>
              </ul>
              <a href="login.html" className="btn style2">
                PURCHASE NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  
  )
}
