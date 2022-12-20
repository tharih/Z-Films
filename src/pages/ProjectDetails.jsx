import React from 'react'
import OwlCarousel from 'react-owl-carousel2';


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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
              excepturi eaque, corporis nulla maxime inventore magni
              reprehenderit consequatur deserunt, eligendi totam voluptas natus
              opposed to using.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing, elit. Quasi,
              porro expedita dolores quas nesciunt repellat sed. Nostrum sunt
              obcaecati totam distinctio libero ea aliquam hic a consectetur, et
              facere rem repudiandae maxime dolorem ad, saepe harum blanditiis.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur error distinctio quas autem tenetur! Voluptatum
              soluta, quis qui necessitatibus id modi quae aspernatu.
            </p>
            <h4>Feature Of This Project</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates odio omnis dolor numquam dignissimos enim assumenda
              itaque nemo tenetur dolores incidunt, animi quo quae odit
              corporis.{" "}
            </p>
            <ul className="content-feature-list style1 list-style">
              <li>Sed ut perspiciatis unde omnis iste natus error</li>
              <li>Eorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              <li>
                Contrary to popular belief Lorem Ipsum is not simply random text
              </li>
              <li>The standard chunk of Lorem Ipsum used since the 1500s</li>
              <li>
                All the Lorem Ipsum generators on the Internet tend to repeat
              </li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates odio omnis dolor numquam dignis enim assumenda itaque
              nemo tenetur dolores incidunt, animi quo quae odit corporis, nihil
              architecto inventore Lorem Ipsum generators on the Internet tend.
            </p>
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
                    It is a long established fact that reader are distracted.
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
                    It is a long established fact that reader are distracted.
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
                    It is a long established fact that reader are distracted.
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
  )
}
