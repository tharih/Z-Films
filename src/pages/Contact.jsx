import React from "react";

export default function Contact() {
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
                <h2>Contact Us</h2>
                <ul className="breadcrumb-menu list-style">
                  <li>
                    <a href="index.html">Home </a>
                  </li>
                  <li>Contact Us</li>
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
      <section className="contact-us-wrap pt-100 pb-100">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-6 col-12">
              <div className="contact-content">
                <div className="content-title">
                  <span>CONTACT US</span>
                  <h2>Get In Touch With Us</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit tempore facilis pariatur nulla natus illo contrary
                    to popular belief, Lorem Ipsum is not simply random text.
                  </p>
                </div>
                <ul className="contact-info list-style">
                  <li>
                    <i className="ri-map-pin-fill" />
                    <p>
                    98/5 Artigala Mawatha, 
                      <br /> Piliyandala 10300
                    </p>
                  </li>
                  <li>
                    <i className="ri-phone-fill" />
                    <a href="tel:+94 (77) 959 7006">+94 (77) 959 7006</a>
                    {/* <a href="tel:16657234112">+1-6657-2341-12</a> */}
                  </li>
                  <li>
                    <i className="ri-mail-open-fill" />
                    <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#82eae7eeeeedc2f2edf4ebace1edef">
                      <span
                        className="__cf_email__"
                        data-cfemail="f9919c959596b989968f90d79a9694"
                      >
                       suvinjavax@gmail.com
                      </span>
                    </a>
                    {/* <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#05767075756a777145756a736c2b666a68">
                      <span
                        className="__cf_email__"
                        data-cfemail="ef9c9a9f9f809d9baf9f809986c18c8082"
                      >
                        [email&nbsp;protected]
                      </span>
                    </a> */}
                  </li>
                </ul>
                <div className="social-link">
                  <h6>Follow Us:</h6>
                  <ul className="social-profile style4 list-style">
                    <li>
                      <a target="_blank" href="https://facebook.com/">
                        <i className="ri-facebook-fill" />
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://twitter.com/">
                        <i className="ri-twitter-fill" />
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://instagram.com/">
                        <i className="ri-instagram-fill" />
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://linkedin.com/">
                        <i className="ri-linkedin-fill" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="contact-form">
                <form className="form-wrap" id="contactForm">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name*"
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
                      placeholder="Your Email*"
                      data-error="Please enter your email"
                    />
                    <div className="help-block with-errors" />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="msg_subject"
                      placeholder="Subject*"
                      id="msg_subject"
                      required=""
                      data-error="Please enter your subject"
                    />
                    <div className="help-block with-errors" />
                  </div>
                  <div className="form-group v1">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Your Message.."
                      cols={30}
                      rows={10}
                      required=""
                      data-error="Please enter your message"
                      defaultValue={""}
                    />
                    <div className="help-block with-errors" />
                  </div>
                  <div className="form-group">
                    <div className="form-check checkbox">
                      <input
                        name="gridCheck"
                        defaultValue="I agree to the terms and privacy policy."
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                        required=""
                      />
                      <label className="form-check-label" htmlFor="gridCheck">
                        I agree to the{" "}
                        <a className="link style1" href="terms-of-service.html">
                          terms &amp; conditions
                        </a>{" "}
                        and{" "}
                        <a className="link style1" href="privacy-policy.html">
                          privacy policy
                        </a>
                      </label>
                      <div className="help-block with-errors gridCheck-error" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <button type="submit" className="btn style1 w-100 d-block"  style={{color: "white"}}>
                      SEND MESSAGE
                    </button>
                    <div id="msgSubmit" className="h3 text-center hidden" />
                    <div className="clearfix" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
