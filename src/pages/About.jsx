import React from "react";
// import OwlCarousel from 'react-owl-carousel'

export default function About() {
  return (
    <div class="page-wrapper ">
      <div className="content-wrapper ">
        <div className="breadcrumb-wrap ">
          <img
            src="assets/img/breadcrumb/br-shape.png"
            alt="Image"
            className="br-shape"
          />
          <div className="container  ">
            <div className="row align-items-center ">
              <div className="col-sm-6">
                <div className="breadcrumb-title">
                  <h2>About Us</h2>
                  <ul className="breadcrumb-menu list-style">
                    <li>
                      <a href="index.html">Home </a>
                    </li>
                    <li>About Us</li>
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
        <section className="about-wrap style4">
          <div className="container">
            <div className="row align-items-end gx-5">
              <div className="col-lg-6">
                <div className="about-img-wrap">
                  <div className="about-shape-one">
                    <img
                      className="rotate"
                      src="assets/img/about/about-shape-3.png"
                      alt="Image"
                    />
                  </div>
                  <img src="assets/img/new/my 01.png" alt="Image" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="content-title">
                    <span>ABOUT US</span>
                    <h2>We're The Leading Photo Studio In The Country</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius en in eros eleme ntum tristique. Duis
                      cursus, mi quis viverra
                    </p>
                    <p>
                      Best Strategic planning dolor sit amet consectetur
                      adipiscing elit. Scel erus isque ametus odio velit auctor
                      nam elit nulla eget sodales dui pulvinar dolor strategic
                      planning dolor sit sectetur.
                    </p>
                  </div>
                  <ul className="content-feature-list list-style">
                    <li>
                      <i className="ri-checkbox-circle-fill" />
                      Lorem ipsum is not simply random text
                    </li>
                    <li>
                      <i className="ri-checkbox-circle-fill" />
                      Making this the first true generator on the internet
                    </li>
                    <li>
                      <i className="ri-checkbox-circle-fill" />
                      various version have evolved these years
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="feature-wrap pt-100 pb-75 bg-albastor"
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-8 offset-xl-2 col-lg-8 offset-lg-2">
                <div className="section-title text-center mb-50">
                  <span>WHY CHOOSE US</span>
                  <h2>We Are Different &amp; Professional</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div
                className="col-xxl-3 col-xl-3 col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-duration={1200}
                data-aos-delay={200}
              >
                <div className="feature-card style2">
                  <div className="feature-icon">
                    <img src="assets/img/about/icon-1.svg" alt="Image" />
                  </div>
                  <div className="feature-info">
                    <h3>Professional Photos</h3>
                    <p>
                      Lorem ipsum dolor sit ametco nsectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-xxl-3 col-xl-3 col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-duration={1200}
                data-aos-delay={300}
              >
                <div className="feature-card  style2">
                  <div className="feature-icon">
                    <img src="assets/img/about/icon-2.svg" alt="Image" />
                  </div>
                  <div className="feature-info">
                    <h3>Portfolio</h3>
                    <p>
                      Lorem ipsum dolor sit ametco nsectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-xxl-3 col-xl-3 col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-duration={1200}
                data-aos-delay={400}
              >
                <div className="feature-card style2">
                  <div className="feature-icon">
                    <img src="assets/img/about/icon-3.svg" alt="Image" />
                  </div>
                  <div className="feature-info">
                    <h3>1 Hour Video</h3>
                    <p>
                      Lorem ipsum dolor sit ametco nsectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-xxl-3 col-xl-3 col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-duration={1200}
                data-aos-delay={500}
              >
                <div className="feature-card style2">
                  <div className="feature-icon">
                    <img src="assets/img/about/icon-4.svg" alt="Image" />
                  </div>
                  <div className="feature-info">
                    <h3>Multiple Shots</h3>
                    <p>
                      Lorem ipsum dolor sit ametco nsectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="cta-wrap style1 ptb-100 bg-f">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-6">
                <div className="cta-content">
                  <div className="content-title">
                    <h2>Need Help Let's Work Together</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Digni assimos odit quib usdam quis maiores, ipsa ullam
                      sunt ab doloremque officiis minima!
                    </p>
                  </div>
                  <a href="service-two.html" className="btn style1"  style={{color: "white"}}>
              LOAD MORE
            </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonial-wrap ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                <div className="section-title text-center mb-50">
                  <span>OUR TESTIMONIALS</span>
                  <h2>Read What Our Client Says</h2>
                </div>
              </div>
            </div>
            <div className="testimonial-slider-one style1 ">
              <div className="testimonial-card style1">
                <div className="row gx-5">
                  <div className="col-xl-6 col-lg-6">
                    <div className="client-gallery">
                      <img
                        src="assets/img/testimonials/testimonial-1.jpg"
                        alt="Image"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="client-text">
                      <div className="client-info-wrap">
                        <div className="client-img">
                          <img
                            src="assets/img/testimonials/client-3.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="client-info">
                          <h3>Felix Faucheux</h3>
                          <span>Enterprenaur</span>
                        </div>
                      </div>
                      <p className="client-quote">
                        There are many variation of passage of Lorem Ipsum
                        available, but the major have suffered alteration in
                        some form, injected humour randomised words which don't
                        look Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit assumenda velit. Repellat, perferendis? Laborum
                        repellat dorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-card style1">
                <div className="row gx-5">
                  <div className="col-xl-6 col-lg-6">
                    <div className="client-gallery">
                      <img
                        src="assets/img/testimonials/testimonial-2.jpg"
                        alt="Image"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="client-text">
                      <div className="client-info-wrap">
                        <div className="client-img">
                          <img
                            src="assets/img/testimonials/client-1.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="client-info">
                          <h3>Richi Archer</h3>
                          <span>Art Director</span>
                        </div>
                      </div>
                      <p className="client-quote">
                        There are many variation of passage of Lorem Ipsum
                        available, but the major have suffered alteration in
                        some form, injected humour randomised words which don't
                        look Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit assumenda velit. Repellat, perferendis? Laborum
                        repellat dorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-card style1">
                <div className="row gx-5">
                  <div className="col-xl-6 col-lg-6">
                    <div className="client-gallery">
                      <img
                        src="assets/img/testimonials/testimonial-3.jpg"
                        alt="Image"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="client-text">
                      <div className="client-info-wrap">
                        <div className="client-img">
                          <img
                            src="assets/img/testimonials/client-2.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="client-info">
                          <h3>Alex Farguson</h3>
                          <span>Model &amp; Actor</span>
                        </div>
                      </div>
                      <p className="client-quote">
                        There are many variation of passage of Lorem Ipsum
                        available, but the major have suffered alteration in
                        some form, injected humour randomised words which don't
                        look Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit assumenda velit. Repellat, perferendis? Laborum
                        repellat dorem ipsum dolor sit amet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
