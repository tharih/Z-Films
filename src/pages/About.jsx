import React, { useEffect } from "react";
// import OwlCarousel from 'react-owl-carousel'
import OwlCarousel from "react-owl-carousel2";


export default function About() {
  const option = {
    items: 1,
    nav: true,
    rewind: true,
    autoplay: true,
    dots: true,
    navText: [
      '<i class="flaticon-left-arrow"></i>',
      '<i class="flaticon-right-arrow-1"></i>',
    ],
  };

  useEffect(() => {}, []);
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
                      At Z Films, we are proud to be the leading photo studio in
                      the country. We have a team of highly skilled and
                      experienced photographers who are experts in their craft,
                      using state-of-the-art equipment and technology to produce
                      high-quality images that are second to none. We have a
                      track record of consistently delivering excellent results
                      for our clients and offer a wide range of services and
                      packages to meet the needs of all types of clients, from
                      individuals to businesses.
                    </p>
                    <p>
                      Our strong reputation in the industry and the trust of our
                      clients across the country speak to our commitment to
                      delivering the best possible experience for our clients.
                      We are constantly striving to improve and evolve our
                      services, ensuring that we remain at the forefront of the
                      industry. Our extensive portfolio of work showcases the
                      range and quality of our services, and our passion for
                      what we do is evident in every project we take on. If you
                      want the best for your photo needs, choose [Z-Films] – the
                      leading photo studio in the country.
                    </p>
                  </div>
                  <ul className="content-feature-list list-style">
                    <li>
                      <i className="ri-checkbox-circle-fill" />
                      We have a team of highly skilled and experienced
                      photographers who are experts in their craft.
                    </li>
                    <li>
                      <i className="ri-checkbox-circle-fill" />
                      We use state-of-the-art equipment and technology to
                      produce high-quality images that are second to none.
                    </li>
                    <li>
                      <i className="ri-checkbox-circle-fill" />
                      We have a track record of consistently delivering
                      excellent results for our clients.
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
                      If you need help with professional photography services,
                      look no further. Z Films is here to assist you. Our team
                      of skilled photographers has years of experience in a
                      variety of settings and can handle any project, big or
                      small. Whether you need portraits, event coverage, product
                      photography, or anything in between, we have the expertise
                      and equipment to deliver high-quality results that meet
                      your needs. We pride ourselves on our professionalism and
                      attention to detail, and we are dedicated to providing
                      excellent customer service. Don't hesitate to reach out –
                      we would love to help you with your professional
                      photography needs. Contact us today to learn more and get
                      started.
                    </p>
                  </div>
                  <a
                    href="Contact"
                    className="btn style1"
                    style={{ color: "white" }}
                  >
                    Contact Us
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
            <OwlCarousel options={option} className="owlCarousal  owl-carousel">
           <div
              className="testimonial-card style2"
              data-dot="<button>01</button>"
            >
              <div className="row gx-5 align-items-end">
                <div className="col-lg-6 order-lg-1 order-md-2 order-2">
                  <p className="client-quote">
                    "The team at the videography and photography studio did an
                    excellent job capturing the memories of our special day.
                    They were professional, friendly, and flexible, and the
                    final product exceeded our expectations."
                  </p>
                  <div className="client-info-wrap">
                    <div className="client-img">
                      <img
                        src="assets/img/testimonials/client-1.jpg"
                        alt="Image"
                      />
                    </div>
                    <div className="client-info">
                      <h3>Felix Faucheux</h3>
                      <span>Customer</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 order-lg-2 order-md-1 order-1">
                  <div className="client-gallery">
                    <img
                      src="assets/img/testimonials/testimonial-4.jpg"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="testimonial-card style2"
              data-dot="<button>02</button>"
            >
              <div className="row gx-5 align-items-end">
                <div className="col-lg-6 order-lg-1 order-md-2 order-2">
                  <p className="client-quote">
                    "We were so impressed with the level of creativity and
                    attention to detail shown by the videography and photography
                    studio. They truly captured the essence of our event and
                    produced stunning visual memories for us to cherish
                    forever."
                  </p>
                  <div className="client-info-wrap">
                    <div className="client-img">
                      <img
                        src="assets/img/testimonials/client-2.jpg"
                        alt="Image"
                      />
                    </div>
                    <div className="client-info">
                      <h3>Alex Farguson</h3>
                      <span>Enterprenaur</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 order-lg-2 order-md-1 order-1">
                  <div className="client-gallery">
                    <img
                      src="assets/img/testimonials/testimonial-5.jpg"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="testimonial-card style2"
              data-dot="<button>03</button>"
            >
              <div className="row gx-5 align-items-end">
                <div className="col-lg-6 order-lg-1 order-md-2 order-2">
                  <p className="client-quote">
                    "The videography and photography studio was a pleasure to
                    work with from start to finish. They were responsive,
                    helpful, and went above and beyond to ensure that we were
                    happy with the final product."
                  </p>
                  <div className="client-info-wrap">
                    <div className="client-img">
                      <img
                        src="assets/img/testimonials/client-3.jpg"
                        alt="Image"
                      />
                    </div>
                    <div className="client-info">
                      <h3>Richard Harison</h3>
                      <span>Model &amp; Actor</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 order-lg-2 order-md-1 order-1">
                  <div className="client-gallery">
                    <img
                      src="assets/img/testimonials/testimonial-6.jpg"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
          </div>
        </section>
      </div>
    </div>
  );
}
