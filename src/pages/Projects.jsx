import React from 'react'

export default function Projects() {
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
            <h2>Project</h2>
            <ul className="breadcrumb-menu list-style">
              <li>
                <a href="index.html">Home </a>
              </li>
              <li>Project</li>
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
  <section className="project-wrap ptb-100">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xl-3 col-lg-6 col-md-6 order-xl-1 order-lg-1 order-md-1">
          <div className="project-card">
            <img src="assets/img/new/06.jpg" alt="Image" />
            <div className="project-info">
              <h3>
                <a href="ProjectDetails">Pre Wedding</a>
              </h3>
            </div>
          </div>
          <div className="project-card">
            <img src="assets/img/project/project-2.jpg" alt="Image" />
            <div className="project-info">
              <h3>
                <a href="project-details.html">Portrait</a>
              </h3>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 order-xl-2 order-lg-2 order-md-2">
          <div className="project-card">
            <img src="assets/img/new/01.jpg" alt="Image" />
            <div className="project-info">
              <h3>
                <a href="project-details.html">Wedding</a>
              </h3>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 order-xl-3 order-lg-4 order-md-4">
          <div className="project-card">
            <img src="assets/img/project/project-4.jpg" alt="Image" />
            <div className="project-info">
              <h3>
                <a href="project-details.html">Headshot</a>
              </h3>
            </div>
          </div>
          <div className="project-card">
            <img src="assets/img/project/project-5.jpg" alt="Image" />
            <div className="project-info">
              <h3>
                <a href="project-details.html">Maternity</a>
              </h3>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 order-xl-4 order-lg-3 order-md-3">
          <div className="project-card">
            <img src="assets/img/project/project-6.jpg" alt="Image" />
            <div className="project-info">
              <h3>
                <a href="project-details.html">Travel</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <ul className="page-nav list-style mt-15">
        <li>
          <a href="blog-left-sidebar.html">
            <i className="flaticon-left-arrow" />
          </a>
        </li>
        <li>
          <a className="active" href="blog-left-sidebar.html">
            01
          </a>
        </li>
        <li>
          <a href="blog-left-sidebar.html">02</a>
        </li>
        <li>
          <a href="blog-left-sidebar.html">03</a>
        </li>
        <li>
          <a href="blog-left-sidebar.html">
            <i className="flaticon-right-arrow-1" />
          </a>
        </li>
      </ul>
    </div>
  </section>
</div>

  )
}
