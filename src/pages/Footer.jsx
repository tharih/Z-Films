import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="footer-wrap">
        <img
          src="assets/img/footer-shape-1.png"
          alt="Image"
          className="footer-shape-one"
        />
        <img
          src="assets/img/footer-shape-2.png"
          alt="Image"
          className="footer-shape-two"
        />
        <div className="container">
          <div className="row pt-100 pb-75">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="footer-widget">
                <a href="index.html" className="footer-logo">
                  <img src="assets/img/1.png" alt="Image" />
                </a>
                <p className="comp-desc">
                  Subscribe to our newsletter for discounts and more latest
                  offer.
                </p>
                <form action="#" className="newsletter-form">
                  <input type="email" placeholder="Enter Your Email" />
                  <button type="submit">SUBSCRIBE NOW</button>
                </form>
                <ul className="social-profile style1 list-style">
                  <li>
                    <a target="_blank" href="https://facebook.com/">
                      <i className="ri-facebook-line" />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://twitter.com/">
                      <i className="ri-twitter-line" />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://instagram.com/">
                      <i className="ri-instagram-line" />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://linkedin.com/">
                      <i className="ri-linkedin-line" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
              <div className="footer-widget">
                <h3 className="footer-widget-title">Quick Links</h3>
                <ul className="footer-menu list-style">
                  <li>
                    <a href="index.html" target="_blank">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="about.html" target="_blank">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="blog-left-sidebar.html" target="_blank">
                      News &amp; Blog
                    </a>
                  </li>
                  <li>
                    <a href="service-one.html" target="_blank">
                      Our Services
                    </a>
                  </li>
                  <li>
                    <a href="project.html" target="_blank">
                      Our Projects
                    </a>
                  </li>
                  <li>
                    <a href="contact.html" target="_blank">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 ps-xl-4">
              <div className="footer-widget">
                <h3 className="footer-widget-title">Follow Instagram</h3>
                <div className="insta-gallery">
                  <a
                    href="assets/img/instagram/insta-1.jpg"
                    data-fancybox="gallery"
                    data-caption="Instagram Gallery"
                  >
                    <img src="assets/img/instagram/insta-1.jpg" alt="Image" />
                  </a>
                  <a
                    href="assets/img/instagram/insta-2.jpg"
                    data-fancybox="gallery"
                    data-caption="Instagram Gallery"
                  >
                    <img src="assets/img/instagram/insta-2.jpg" alt="Image" />
                  </a>
                  <a
                    href="assets/img/instagram/insta-3.jpg"
                    data-fancybox="gallery"
                    data-caption="Instagram Gallery"
                  >
                    <img src="assets/img/instagram/insta-3.jpg" alt="Image" />
                  </a>
                  <a
                    href="assets/img/instagram/insta-4.jpg"
                    data-fancybox="gallery"
                    data-caption="Instagram Gallery"
                  >
                    <img src="assets/img/instagram/insta-4.jpg" alt="Image" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget">
                <h3 className="footer-widget-title">Contact Us</h3>
                <ul className="contact-info list-style">
                  <li>
                    <i className="ri-map-pin-fill" />
                    <p>98/5 Artigala Mawatha, Piliyandala 10300</p>
                  </li>
                  <li>
                    <i className="ri-phone-fill" />
                    <a href="tel:0779597006">+94 (77) 959 7006</a>
                    {/* <a href="tel:16657234112">+1-6657-2341-12</a> */}
                  </li>
                  <li>
                    <i className="ri-mail-open-fill" />
                    <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#a2cac7cececde2d2cdd4cb8cc1cdcf">
                      <span
                        className="__cf_email__"
                        data-cfemail="3058555c5c5f70405f46591e535f5d"
                      >
                        suvinjavax@gmail.com
                      </span>
                    </a>
                    {/* <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#afdcdadfdfc0dddbefdfc0d9c681ccc0c2">
                      <span
                        className="__cf_email__"
                        data-cfemail="d3a0a6a3a3bca1a793a3bca5bafdb0bcbe"
                      >
                        [email&nbsp;protected]
                      </span>
                    </a> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="copyright-text">
          <i className="ri-copyright-line" /> <span>Z-Films</span>. All Rights
          Reserved By{" "}
          <a href="https://hibootstrap.com/" target="_blank">
            Radiant Spark Technology
          </a>
        </p>
      </footer>
    </div>
  );
}
