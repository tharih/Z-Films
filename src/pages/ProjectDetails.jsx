import React from "react";
import OwlCarousel from "react-owl-carousel2";

export default function ProjectDetails() {
  return (
    <div>
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
                  <h2>Single Project</h2>
                  <ul className="breadcrumb-menu list-style">
                    <li>
                      <a href="index.html">Home </a>
                    </li>
                    <li>
                      <a href="project.html">Project</a>
                    </li>
                    <li>Single Project</li>
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
        <section className="project-details-wrap ptb-100">
          <div className="container">
            <div className="row gx-5">
              <div className="col-xl-8">
                <div className="project-desc">
                  <h1>Stories Behind The Amazing Wedding Project</h1>
                  <p>
                    At Z Films, we were fortunate to be a part of an amazing
                    wedding project that was filled with beautiful moments and
                    unforgettable memories. From the moment we started planning,
                    we knew that this was going to be a special day.
                  </p>
                  <p>
                    One of the most memorable moments of the day was when the
                    groom saw the bride for the first time as she walked down
                    the aisle. The look of love and adoration on his face was
                    truly heartwarming, and it was a moment that we were honored
                    to capture.
                  </p>
                  <p>
                    Another highlight of the day was the reception, where the
                    newlyweds had their first dance as husband and wife. The
                    dance floor was packed with friends and family, all of whom
                    were having a great time celebrating the happy couple.
                  </p>

                  <p>
                    Throughout the day, we were struck by the love and support
                    of the couple's friends and family. It was clear that this
                    was a special group of people, and we were grateful to be a
                    part of their celebration.
                  </p>

                  <OwlCarousel className="single-project-slider owl-carousel">
                    <div className="single-project-img">
                      <img
                        src="assets/img/project/single-project-1.jpg"
                        alt="Image"
                      />
                    </div>
                    <div className="single-project-img">
                      <img
                        src="assets/img/project/single-project-2.jpg"
                        alt="Image"
                      />
                    </div>
                    <div className="single-project-img">
                      <img
                        src="assets/img/project/single-project-3.jpg"
                        alt="Image"
                      />
                    </div>
                    <div className="single-project-img">
                      <img
                        src="assets/img/project/single-project-4.jpg"
                        alt="Image"
                      />
                    </div>
                  </OwlCarousel>
                  <p>
                    As a team at Z Films, we are so grateful to have had the
                    opportunity to be a part of such a special day and to have
                    captured so many beautiful memories for the couple to
                    cherish for years to come. It was a truly amazing wedding
                    project, and one that we will always remember.
                  </p>
                  <h4>Feature Of This Project</h4>
                  <p>
                    Welcome to our wedding video and photo project! We are
                    excited to be a part of your special day and to capture the
                    emotion and beauty of your ceremony and reception. Our team
                    of skilled photographers and videographers is dedicated to
                    providing a range of services to suit your needs and budget.
                  </p>
                  <ul className="content-feature-list style1 list-style">
                    <li>Capturing the emotion and beauty of the ceremony and reception</li>
                    <li>
                    Providing a variety of photography and videography packages to suit different budgets and needs
                    </li>
                    <li>
                    Working closely with the couple to understand their vision and style
                    </li>
                    <li>
                    Offering a range of post-processing and editing options to enhance the final images and videos
                    </li>
                    <li>
                    Providing a personalized experience, with attention to detail and customer service
                    </li>
                    <li>
                    Using high-quality equipment and techniques to produce professional-grade results
                    </li>
                    <li>
                    Offering digital copies of the final images and videos, as well as options for physical prints and albums
                    </li>
                    <li>
                    Providing additional services, such as engagement shoots, bridal portraits, and post-wedding photoshoots
                    </li>
                  </ul>
                  
                </div>
                <div className="project-features row justify-content-center">
                  <div className="col-md-4 col-sm-6">
                    <div className="project-feature-card">
                      <div className="project-feature-icon">
                        <i className="flaticon-camera" />
                      </div>
                      <div className="project-feature-info">
                        <h3>HD Camera</h3>
                        <p>
                          It is a long established fact that reader are
                          distracted.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="project-feature-card">
                      <div className="project-feature-icon">
                        <i className="flaticon-frame" />
                      </div>
                      <div className="project-feature-info">
                        <h3>Control System</h3>
                        <p>
                          It is a long established fact that reader are
                          distracted.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="project-feature-card">
                      <div className="project-feature-icon">
                        <i className="flaticon-video-camera" />
                      </div>
                      <div className="project-feature-info">
                        <h3>4k Video</h3>
                        <p>
                          It is a long established fact that reader are
                          distracted.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="sidebar">
                  <div className="sidebar-widget style2">
                    <h4>Project Details</h4>
                    <ul className="project-info-list list-style">
                      <li>
                        <p>Client:</p>
                        <span>Louis Fonsi</span>
                      </li>
                      <li>
                        <p>Project Category</p>
                        <span>Wedding</span>
                      </li>
                      <li>
                        <p>Location</p>
                        <span>Tabanan, Bali</span>
                      </li>
                      <li>
                        <p>Date</p>
                        <span>22 Mar, 2022</span>
                      </li>
                      <li>
                        <p>Value</p>
                        <span>$5000</span>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar-widget style2">
                    <h4>List Of Recent Project</h4>
                    <ul className="content-feature-list style1 list-style mb-0">
                      <li>
                        <a href="project.html">City In The Snow</a>
                      </li>
                      <li>
                        <a href="project.html">Paradise Waterfall</a>
                      </li>
                      <li>
                        <a href="project.html">Bali Arcade Festival</a>
                      </li>
                      <li>
                        <a href="project.html">Wind Farm Inspection</a>
                      </li>
                      <li>
                        <a href="project.html">Event Photography</a>
                      </li>
                      <li>
                        <a href="project.html">360 Videography</a>
                      </li>
                    </ul>
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
