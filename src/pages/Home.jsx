import React from 'react'
import OwlCarousel from 'react-owl-carousel2';
import { Link } from 'react-router-dom';



export default function Home() {

  const options = {
    items: 1,
    nav: true,
    rewind: true,
    autoplay: true
};
  return (
   <div>
    <section className="hero-wrap style2 hero-bg-1 bg-f">
  <img
    src="assets/img/hero/hero-shape-3.png"
    alt="Image"
    className="hero-shape-one"
  />
  <div className="container">
    <span className="blur-text sm-none">
      Photo
      <br />
      grap
      <br />
      her
    </span>
    <div className="row align-items-center gx-5">
      <div className="col-lg-6 col-md-8">
        <div className="hero-content" data-speed="0.10" data-revert="true">
          <span
            data-aos="fade-up"
            data-aos-duration={1200}
            data-aos-delay={200}
          >
            Wedding Photographer
          </span>
          <h1 data-aos="fade-up" data-aos-duration={1200} data-aos-delay={300}>
            Suvin Chandula
          </h1>
          <p data-aos="fade-up" data-aos-duration={1200} data-aos-delay={400}>
            It is a long established fact that a reader will be distracted by
            the reale he point of using Lorem Ipsum is that it has a
            more-or-less normal valid equity.
          </p>
          <Link to="Projects"
            className="btn style1"
            style={{color: "white"}}
            data-aos="fade-up"
            data-aos-duration={1200}
            data-aos-delay={500}
          >
            SEE MY ALL WORK
          </Link>
        </div>
      </div>
    </div>
    <Link to="#project-area" className="scroll-to-section bounce">
      <i className="flaticon-down-arrow" />
    </Link>
  </div>
</section>

<section id="project-area" className="project-wrap ptb-100 bg-shark">
  <div className="container">
    <div className="row">
      <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
        <div className="section-title style2 text-center mb-50">
          <h2>Browse My Latest Work</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            minus perferendis repellat facilis numquam rem iure quaerat
            pariatur.
          </p>
        </div>
      </div>
    </div>

    <OwlCarousel className="project-slider-one owl-carousel">
    <div className="project-card style2">
        <img src="assets/img/new/03.jpg" alt="Image" />
        <div className="project-info">
          <h3>
            <Link to="project-details.html">Amelia &amp; Oliver</Link>
          </h3>
          <Link to="project.html" className="project-cat">
            Wedding
          </Link>
        </div>
      </div>
      <div className="project-card style2">
        <img src="assets/img/new/10.jpg" alt="Image" />
        <div className="project-info">
          <h3>
            <Link to="project-details.html">Dsuza &amp; Alice</Link>
          </h3>
          <Link to="project.html" className="project-cat">
            Wedding
          </Link>
        </div>
      </div>
      <div className="project-card style2">
        <img src="assets/img/new/11.jpg" alt="Image" />
        <div className="project-info">
          <h3>
            <Link to="project-details.html">Jhon &amp; Malinda</Link>
          </h3>
          <Link to="project.html" className="project-cat">
            Couple Event
          </Link>
        </div>
      </div>
      <div className="project-card style2">
        <img src="assets/img/new/06.jpg" alt="Image" />
        <div className="project-info">
          <h3>
            <Link to="project-details.html">Roman &amp; Alisa</Link>
          </h3>
          <Link to="project.html" className="project-cat">
            Wedding
          </Link>
        </div>
      </div>
      
</OwlCarousel>
    <div className="text-center mt-20">
      <Link to="Projects" className="btn style3">
        SEE ALL PROJECTS
      </Link>
    </div>
  </div>
</section>

    

<section className="about-wrap style2 bg-clay">
  <div className="about-img-shape bg-f"></div>
  <div className="container">
    <div className="row">
      <div className="col-xl-7 col-lg-6 order-xl-1 order-lg-1 order-md-2 order-2">
        <div className="about-content ">
          <div className="content-title style2 text-center">
            <h2>Read About My Journey</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit iendis
              labore pariatur alias est repudiandae expedita, aut veritatis
              incidunt sequi iure tempora accusamus aliquid natus.
            </p>
          </div>
          <Link to="About" className="btn style1" style={{color: "white"}}>
            WORK WITH ME
          </Link>
        </div>
      </div>
      <div className="col-xl-5 col-lg-6 order-xl-2 order-lg-2 order-md-1 order-1">
        <div className="about-img-wrap">
          <img src="assets/img/new/my 02.jpg" alt="Image" />
        </div>
      </div>
    </div>
  </div>
</section>


  <section className="partner-wrap pt-100 pb-75 bg-shark">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
          <div className="section-title style2 text-center mb-50">
            <h2>Colaboration With</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              minus perferendis repellat facilis numquam rem iure quaerat
              pariatur.
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-xl-3 col-lg-3 col-md-6">
          <div className="partner-item">
            <img src="assets/img/partner/partner-1.png" alt="Image" />
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6">
          <div className="partner-item">
            <img src="assets/img/partner/partner-2.png" alt="Image" />
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6">
          <div className="partner-item">
            <img src="assets/img/partner/partner-3.png" alt="Image" />
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6">
          <div className="partner-item">
            <img src="assets/img/partner/partner-4.png" alt="Image" />
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6">
          <div className="partner-item">
            <img src="assets/img/partner/partner-5.png" alt="Image" />
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6">
          <div className="partner-item">
            <img src="assets/img/partner/partner-6.png" alt="Image" />
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6">
          <div className="partner-item">
            <img src="assets/img/partner/partner-7.png" alt="Image" />
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6">
          <div className="partner-item">
            <img src="assets/img/partner/partner-8.png" alt="Image" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="cta-wrap style2 ptb-100 bg-f">
    <div className="container">
      <div className="row">
        <div className="col-xl-7 col-md-8">
          <div className="cta-content">
            <div className="content-title">
              <h2>Need Help With Professional Photographer?</h2>
              <p>
                Lorem ipsum dolor sit amet, conse ctetur adipi scing elitsus
                pendisse eleme variusen eros eleme cons ectetur ntum tristique.
                Duis cursus, mi quis viverra orn Lorem ipsum amet, consecte
                adipisci elitsus pendisse varius.
              </p>
            </div>
            <Link to="Contact" className="btn style1" style={{color: "white"}}>
              CONTACT ME
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="pricing-wrap pt-100 pb-75 bg-clay">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
          <div className="section-title style2 text-center mb-50">
            <h2>Choose Your Packages</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              minus perferendis repellat facilis numquam rem iure quaerat
              pariatur.
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="pricing-card style2">
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
            <Link to="login.html" className="btn style2">
              PURCHASE NOW
            </Link>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="pricing-card style2">
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
            <Link to="login.html" className="btn style2">
              PURCHASE NOW
            </Link>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="pricing-card style2">
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
            <Link to="login.html" className="btn style2">
              PURCHASE NOW
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section   className="testimonial-wrap ptb-100 bg-shark">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
          <div className="section-title style2 text-center mb-50">
            <h2>What Our Customer Says</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              minus perferendis repellat facilis numquam rem iure quaerat
              pariatur.
            </p>
          </div>
        </div>
      </div>
      <div className="testimonial-slider-three " >
      {/* owl-carousel */}

      <div className="testimonial-card style2" data-dot="<button>01</button>">
          <div className="row gx-5 align-items-end">
            <div className="col-lg-6 order-lg-1 order-md-2 order-2">
              <p className="client-quote">
                There are many variation of passage of Lorem Ipsum available,
                but the major have suffered alteration in some form, injected
                humour random words which don't look even slightly believable.
                If you are going.
              </p>
              <div className="client-info-wrap">
                <div className="client-img">
                  <img src="assets/img/testimonials/client-1.jpg" alt="Image" />
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
        <div className="testimonial-card style2" data-dot="<button>02</button>">
          <div className="row gx-5 align-items-end">
            <div className="col-lg-6 order-lg-1 order-md-2 order-2">
              <p className="client-quote">
                There are many variation of passage of Lorem Ipsum available,
                but the major have suffered alteration in some form, injected
                humour random words which don't look even slightly believable.
                If you are going.
              </p>
              <div className="client-info-wrap">
                <div className="client-img">
                  <img src="assets/img/testimonials/client-2.jpg" alt="Image" />
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
        <div className="testimonial-card style2" data-dot="<button>03</button>">
          <div className="row gx-5 align-items-end">
            <div className="col-lg-6 order-lg-1 order-md-2 order-2">
              <p className="client-quote">
                There are many variation of passage of Lorem Ipsum available,
                but the major have suffered alteration in some form, injected
                humour random words which don't look even slightly believable.
                If you are going.
              </p>
              <div className="client-info-wrap">
                <div className="client-img">
                  <img src="assets/img/testimonials/client-3.jpg" alt="Image" />
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
        
    </div>
    </div>
  </section>
      
      
        {/*  */}
        
      
  {/* <section className="contact-wrap style2 bg-clay ptb-100">
    <div className="container">
      <img
        src="assets/img/contact/contact-img-1.jpg"
        alt="Image"
        className="contact-img-one"
      />
      <img
        src="assets/img/contact/contact-img-2.jpg"
        alt="Image"
        className="contact-img-two"
      />
      <img
        src="assets/img/contact/contact-img-3.jpg"
        alt="Image"
        className="contact-img-three"
      />
      <img
        src="assets/img/contact/contact-img-4.jpg"
        alt="Image"
        className="contact-img-four"
      />
      <div className="row">
        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
          <div className="section-title style2 text-center mb-50">
            <h2>Still, Have A Questions?</h2>
            <p>
              Would you like to discuss a project? Email me, fill out the form,
              or call me at <Link to="tel:22202345643">(222)-0234-5643</=>
            </p>
          </div>
        </div>
      </div>
      <div className="row gx-5">
        <div className="col-xxl-8 offset-xxl-2 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
          <div className="contact-bg-one bg-f" />
          <form className="form-wrap" id="contactForm">
            <div className="row">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  id="name"
                  required=""
                  data-error="Please enter your name"
                />
                <div className="help-block with-errors" />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required=""
                  placeholder="Email*"
                  data-error="Please enter your email"
                />
                <div className="help-block with-errors" />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subj"
                  id="subj"
                  placeholder="Subject"
                />
              </div>
              <div className="form-group v1">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Type Your Messages.."
                  cols={30}
                  rows={10}
                  required=""
                  data-error="Please enter your message"
                  defaultValue={""}
                />
                <div className="help-block with-errors" />
              </div>
              <div className="col-md-12">
                <button type="submit" className="btn style5 w-100 d-block">
                  SEND MESSAGE
                </button>
                <div id="msgSubmit" className="h3 text-center hidden" />
                <div className="clearfix" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section> */}
  {/* <section className="blog-wrap pt-100 pb-75 bg-shark">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
          <div className="section-title style2 text-center mb-50">
            <h2>News &amp; Blog Update</h2>
            <p>
              Lorem ipsum dolor sit amet cons ectetur adipi scing elit. Utelit
              tellus luctus perm pulvinar dapibus leo conse ctetur adip iscing
              con.
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="blog-card style2">
            <div className="blog-img">
              <img src="assets/img/blog/blog-1.jpg" alt="Image" />
              <Link to="posts-by-date.html" className="blog-date">
                May 22, 2022
              </=>
            </div>
            <div className="blog-info">
              <h3>
                <Link to="blog-details-right-sidebar.html">
                  8 Key Differences You Need To Know Before Buying Camera
                </=>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur dipiscing elit sed do
                eiusm tempor incididunt ut labore
              </p>
              <Link to="blog-details-right-sidebar.html" className="link style1">
                READ MORE
              </=>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="blog-card style2">
            <div className="blog-img">
              <img src="assets/img/blog/blog-2.jpg" alt="Image" />
              <Link to="posts-by-date.html" className="blog-date">
                May 15, 2022
              </=>
            </div>
            <div className="blog-info">
              <h3>
                <Link to="blog-details-right-sidebar.html">
                  The Blushing Bride With A Bouquet On Hand Photography
                </=>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur dipiscing elit sed do
                eiusm tempor incididunt ut labore
              </p>
              <Link to="blog-details-right-sidebar.html" className="link style1">
                READ MORE
              </=>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="blog-card style2">
            <div className="blog-img">
              <img src="assets/img/blog/blog-3.jpg" alt="Image" />
              <Link to="posts-by-date.html" className="blog-date">
                Apr 19, 2022
              </=>
            </div>
            <div className="blog-info">
              <h3>
                <Link to="blog-details-right-sidebar.html">
                  Creating Polarization Effect In DJI Drone Photography
                </=>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur dipiscing elit sed do
                eiusm tempor incididunt ut labore
              </p>
              <Link to="blog-details-right-sidebar.html" className="link style1">
                READ MORE
              </=>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}
  <div className="instagram-wrap">
    <div className="instagram-slider owl-carousel">
      <a
        className="insta-card"
        href="assets/img/instagram/insta-5.jpg"
        data-fancybox="gallery"
        data-caption="Instagram Gallery"
      >
        <img src="assets/img/instagram/insta-5.jpg" alt="Image" />
        <span>
          <i className="ri-instagram-line" />
        </span>
      </a>
      <a
        className="insta-card"
        href="assets/img/instagram/insta-6.jpg"
        data-fancybox="gallery"
        data-caption="Instagram Gallery"
      >
        <img src="assets/img/instagram/insta-6.jpg" alt="Image" />
        <span>
          <i className="ri-instagram-line" />
        </span>
      </a>
      <a
        className="insta-card"
        href="assets/img/instagram/insta-7.jpg"
        data-fancybox="gallery"
        data-caption="Instagram Gallery"
      >
        <img src="assets/img/instagram/insta-7.jpg" alt="Image" />
        <span>
          <i className="ri-instagram-line" />
        </span>
      </a>
      <a
        className="insta-card"
        href="assets/img/instagram/insta-8.jpg"
        data-fancybox="gallery"
        data-caption="Instagram Gallery"
      >
        <img src="assets/img/instagram/insta-8.jpg" alt="Image" />
        <span>
          <i className="ri-instagram-line" />
        </span>
      </a>
      <a
        className="insta-card"
        href="assets/img/instagram/insta-9.jpg"
        data-fancybox="gallery"
        data-caption="Instagram Gallery"
      >
        <img src="assets/img/instagram/insta-9.jpg" alt="Image" />
        <span>
          <i className="ri-instagram-line" />
        </span>
      </a>
      <a
        className="insta-card"
        href="assets/img/instagram/insta-10.jpg"
        data-fancybox="gallery"
        data-caption="Instagram Gallery"
      >
        <img src="assets/img/instagram/insta-10.jpg" alt="Image" />
        <span>
          <i className="ri-instagram-line" />
        </span>
      </a>
      <a
        className="insta-card"
        href="assets/img/instagram/insta-11.jpg"
        data-fancybox="gallery"
        data-caption="Instagram Gallery"
      >
        <img src="assets/img/instagram/insta-11.jpg" alt="Image" />
        <span>
          <i className="ri-instagram-line" />
        </span>
      </a>
      <a
        className="insta-card"
        href="assets/img/instagram/insta-12.jpg"
        data-fancybox="gallery"
        data-caption="Instagram Gallery"
      >
        <img src="assets/img/instagram/insta-12.jpg" alt="Image" />
        <span>
          <i className="ri-instagram-line" />
        </span>
      </a>
      <a
        className="insta-card"
        href="assets/img/instagram/insta-13.jpg"
        data-fancybox="gallery"
        data-caption="Instagram Gallery"
      >
        <img src="assets/img/instagram/insta-13.jpg" alt="Image" />
        <span>
          <i className="ri-instagram-line" />
        </span>
      </a>
      <a
        className="insta-card"
        href="assets/img/instagram/insta-14.jpg"
        data-fancybox="gallery"
        data-caption="Instagram Gallery"
      >
        <img src="assets/img/instagram/insta-14.jpg" alt="Image" />
        <span>
          <i className="ri-instagram-line" />
        </span>
      </a>
      <a
        className="insta-card"
        href="assets/img/instagram/insta-15.jpg"
        data-fancybox="gallery"
        data-caption="Instagram Gallery"
      >
        <img src="assets/img/instagram/insta-15.jpg" alt="Image" />
        <span>
          <i className="ri-instagram-line" />
        </span>
      </a>
    </div>
  </div>


   </div>
  )
}

