import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "react-feather";
import Footer from "../../Footer/Footer";
import company from "../../../assets/company.jpg";
import "../../Pages/Company/Company.css";

const Company = () => {
  return (
    <div>
      <>
        <meta charSet="utf-8" />
        <title>About - Treenets Technology Solutions</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="App and Saas Landing Template" />
        <meta
          name="keywords"
          content="Application, Clean, Saas, Dashboard, Bootstrap 5"
        />
        <meta content="Shreethemes" name="author" />
        <meta name="version" content="2.1.0" />
        {/* favicon */}
        <link rel="shortcut icon" href="images/favicon.ico" />
        {/* Bootstrap css */}
        <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        {/* Icons */}
        <link
          href="css/materialdesignicons.min.css"
          rel="stylesheet"
          type="text/css"
        />
        {/* Slider */}
        <link rel="stylesheet" href="css/tiny-slider.css" />
        {/* tobii css */}
        <link href="css/tobii.min.css" rel="stylesheet" type="text/css" />
        {/* Main css File */}
        <link href="css/style.min.css" rel="stylesheet" type="text/css" />

        {/* Navbar STart */}
        <header id="topnav" className="defaultscroll sticky">
          <div className="container">
            <div className="menu-extras">
              <div className="menu-item">
                {/* Mobile menu toggle*/}
                <a
                  className="navbar-toggle"
                  id="isToggle"
                  onClick={"toggleMenu()"}
                >
                  <div className="lines">
                    <span />
                    <span />
                    <span />
                  </div>
                </a>
                {/* End mobile menu toggle*/}
              </div>
            </div>
          </div>

          {/*end container*/}
        </header>
        {/*end header*/}
        {/* Navbar End */}
        {/* Hero Start */}

        <section
          className="cm-style cm-banner home-hero home-slider-section"
          id="container-p5"
        >
          {/* <video
            className="home-section-video"
            id="video_player"
            autoPlay=""
            loop=""
            muted=""
            playsInline=""
          >
            <source
              src="https://videos.files.wordpress.com/RYYRqfQU/home-hero-video-1_hd.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video> */}

          <video
            className="home-section-video"
            id="video_player"
            autoPlay
            loop
            muted
            playsInline
            width="100%" // Set the desired width
            style={{ maxWidth: "100%", height: "auto" }}
          >
            <source
              src="https://videos.files.wordpress.com/RYYRqfQU/home-hero-video-1_hd.mp4"
              type="video/mp4"
            />
            <source
              src="https://videos.files.wordpress.com/RYYRqfQU/home-hero-video-1_hd.webm"
              type="video/webm"
            />
            Your browser does not support the video tag.
          </video>
        </section>

        {/*end section*/}
        {/* Hero End */}
        {/* About Start */}

        <div className="about-inner py-5 about-className">
          <div className="container pb-xl-5 pb-lg-3">
            <div className="row py-xl-4">
              <h1>Welcome to TREENETS TECHNOLOGY SOLUTIONN PRIVATE LIMITED</h1>
              <div className="col-lg-7 about-right-faq pr-7">
                <p align="justify">
                  Empowering Tomorrow: Transforming Human Lives with
                  Cutting-Edge Technologies
                </p>

                <p align="justify">
                  Welcome to TREENETS TECHNOLOGY SOLUTIONN PRIVATE LIMITED, a
                  dynamic force in IT and Software Development, based in Pune,
                  India since 2020. We shape the future by harnessing
                  cutting-edge, reliable, flexible, and secure technologies,
                  dedicated to transforming lives through innovative solutions
                  that seamlessly integrate technology with human experiences..
                </p>
                <p align="justify">
                  At TREENETS TECHNOLOGY SOLUTIONN, we envision technology as a
                  catalyst for positive change, empowering individuals and
                  businesses through custom solutions. Our core objective is to
                  shape a world where technology goes beyond being a tool—it
                  becomes a force for positive transformation.
                </p>

                <h4>Software Development Services We Provide:</h4>
                <ul className="w3l-right-book mt-4">
                  <li>Android, iOS App Development</li>
                  <li>Java Software Development</li>
                  <li>Angular JS Development</li>
                  <li>Spring & Spring Boot Applications</li>
                  <li>PHP Software Development</li>
                  <li>Laravel & Codeigniter Development</li>
                  <li>CMS Development (WordPress, Drupal, Joomla)</li>
                  <li>E-commerce Development (OpenCart, Magento)</li>
                </ul>
              </div>
              <div className="col-lg-5 welcome-right text-center mt-lg-0 mt-5">
                <img
                  src={company}
                  alt="about_us"
                  title="about us"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>

        <section className="section" id="about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 opt-sm-0">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6 col-6">
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="card rounded border-0 shadow overflow-hidden">
                          <img
                            src="images/about/ab01.jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                        </div>
                      </div>
                      {/*end col*/}
                      <div className="col-lg-12 col-md-12 mt-4 pt-2">
                        <div className="card rounded border-0 shadow overflow-hidden">
                          <img
                            src="images/about/ab02.jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                        </div>
                      </div>
                      {/*end col*/}
                    </div>
                    {/*end row*/}
                  </div>
                  {/*end col*/}
                  <div className="col-lg-6 col-md-6 col-6">
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="card rounded border-0 shadow overflow-hidden">
                          <img
                            src="images/about/ab03.jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                        </div>
                      </div>
                      {/*end col*/}
                      <div className="col-lg-12 col-md-12 mt-4 pt-2">
                        <div className="card rounded border-0 shadow overflow-hidden">
                          <img
                            src="images/about/ab04.jpg"
                            className="img-fluid"
                            alt="Image"
                          />
                        </div>
                      </div>
                      {/*end col*/}
                    </div>
                    {/*end row*/}
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
              </div>
              {/*end col*/}
              <div className="col-lg-6 col-md-6 col-12 order-1 order-md-2">
                <div className="section-title ms-lg-5">
                  <h6 className="text-primary font-weight-normal mb-3">
                    About Us
                  </h6>
                  <h4 className="title mb-4">Our Story : Treenets Technology Solutions</h4>
                  <p className="text-muted mb-0">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aut itaque quibusdam quas eveniet? Assumenda ducimus sint
                    unde ut amet architecto quod debitis praesentium pariatur
                    temporibus ipsa, cum quidem obcaecati sunt?
                  </p>
                  <div className="row">
                    <div className="col-lg-6 mt-4 pt-2">
                      <div className="d-flex align-items-center rounded shadow p-3">
                        <i
                          data-feather="airplay"
                          className="fea text-primary"
                        />
                        <h6 className="ms-3 mb-0">
                          <a href="/" className="text-dark">
                            Responsive
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className="col-lg-6 mt-4 pt-2">
                      <div className="d-flex align-items-center rounded shadow p-3">
                        <i
                          data-feather="download"
                          className="fea text-primary"
                        />
                        <h6 className="ms-3 mb-0">
                          <a href="/" className="text-dark">
                            Free Download
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className="col-lg-6 mt-4 pt-2">
                      <div className="d-flex align-items-center rounded shadow p-3">
                        <i data-feather="user" className="fea text-primary" />
                        <h6 className="ms-3 mb-0">
                          <a href="/" className="text-dark">
                            Support
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className="col-lg-6 mt-4 pt-2">
                      <div className="d-flex align-items-center rounded shadow p-3">
                        <i
                          data-feather="codepen"
                          className="fea text-primary"
                        />
                        <h6 className="ms-3 mb-0">
                          <a href="/" className="text-dark">
                            Development
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className="col-12 mt-4 pt-2">
                      <div className="watch-video">
                        <a href="/" className="btn btn-primary mb-2 me-2">
                          See More{" "}
                          <i
                            data-feather="chevron-right"
                            className="fea icon-sm"
                          />
                        </a>
                        <a
                          href="#"
                          data-type="youtube"
                          data-id="yba7hPeTSjk"
                          className="video-play-icon lightbox  watch title-dark text-dark mb-2"
                        >
                          <i className="mdi mdi-play play-icon-circle text-center d-inline-block me-2 rounded-pill text-white title-dark position-relative play play-iconbar" />{" "}
                          Watch Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*end col*/}
            </div>
            {/*enr row*/}
          </div>
          {/*end container*/}
          {/* Features Start */}

          {/*end container*/}
          {/* Team Start */}
          <div className="container mt-100 mt-60">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="section-title text-center mb-4 pb-2">
                  <h6 className="text-primary font-weight-normal mb-3">Team</h6>
                  <h4 className="title mb-4">Our Mind Power</h4>
                  <p className="para-desc mx-auto text-muted mb-0">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap4 html
                    page.
                  </p>
                </div>
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
            <div className="row">
              <div className="col-lg-3 col-md-6 mt-4 pt-2">
                <div className="card border-0 text-center shadow border-0 overflow-hidden rounded">
                  <img
                    src="images/client/01.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="mb-0">Cristino Murphy</h5>
                    <small>Management</small>
                  </div>
                </div>
              </div>
              {/*end col*/}
              <div className="col-lg-3 col-md-6 mt-4 pt-2">
                <div className="card border-0 text-center shadow border-0 overflow-hidden rounded">
                  <img
                    src="images/client/02.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="mb-0">Leosy Clony</h5>
                    <small>Management</small>
                  </div>
                </div>
              </div>
              {/*end col*/}
              <div className="col-lg-3 col-md-6 mt-4 pt-2">
                <div className="card border-0 text-center shadow border-0 overflow-hidden rounded">
                  <img
                    src="images/client/03.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="mb-0">Amanda Lair</h5>
                    <small>Management</small>
                  </div>
                </div>
              </div>
              {/*end col*/}
              <div className="col-lg-3 col-md-6 mt-4 pt-2">
                <div className="card border-0 text-center shadow border-0 overflow-hidden rounded">
                  <img
                    src="images/client/04.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="mb-0">Calvin Carlo</h5>
                    <small>Management</small>
                  </div>
                </div>
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
          </div>
          {/*end container*/}
          {/* Team End */}
          {/* CTA Start */}
          
          {/*end container*/}
          {/* CTA End */}
        </section>
        {/*end section*/}
        {/* About End */}
        {/* Client Start */}
        {/* <section className="py-4 bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-2 col-md-2 col-6 text-center py-4">
                <img
                  src="images/client/amazon.svg"
                  className="avatar avatar-ex-sm"
                  alt=""
                />
              </div>
              <div className="col-lg-2 col-md-2 col-6 text-center py-4">
                <img
                  src="images/client/google.svg"
                  className="avatar avatar-ex-sm"
                  alt=""
                />
              </div>
              <div className="col-lg-2 col-md-2 col-6 text-center py-4">
                <img
                  src="images/client/lenovo.svg"
                  className="avatar avatar-ex-sm"
                  alt=""
                />
              </div>
              <div className="col-lg-2 col-md-2 col-6 text-center py-4">
                <img
                  src="images/client/paypal.svg"
                  className="avatar avatar-ex-sm"
                  alt=""
                />
              </div>
              <div className="col-lg-2 col-md-2 col-6 text-center py-4">
                <img
                  src="images/client/shopify.svg"
                  className="avatar avatar-ex-sm"
                  alt=""
                />
              </div>
              <div className="col-lg-2 col-md-2 col-6 text-center py-4">
                <img
                  src="images/client/spotify.svg"
                  className="avatar avatar-ex-sm"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section> */}
        {/*end section*/}
        {/* Client End */}
        {/* Footer Start */}
        <Footer />
        {/*end footer*/}
        {/* Footer End */}
        {/* Video Popup Start */}
        <div
          className="modal fade"
          id="watchvideomodal"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content video-modal rounded overflow-hidden">
              {/* <video className="w-100" controls autoplay muted loop>
                  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"> */}
              {/*Browser does not support <video> tag */}
              {/* </video> */}
              {/*If you want to use your own video please set your files path*/}
              {/* <div className="ratio ratio-16x9">
                  <iframe src="https://www.youtube.com/embed/jNTZpfXYJa4?rel=0" title="YouTube video" allowfullscreen></iframe>
              </div> */}
              {/*If you want to use the youtube link please try the above code*/}
              <div className="ratio ratio-16x9">
                <iframe
                  src="http://player.vimeo.com/video/99025203"
                  title="Vimeo video"
                  allowFullScreen=""
                />
              </div>
              {/*If you want to use the Vimeo link please try the above code*/}
            </div>
          </div>
        </div>
        {/* Video Popup End */}
        {/* javascript */}
        {/* Icon */}
        {/* SLIDER */}
        {/* Contact */}
        {/* Tobii js */}
        {/* Main Js */}
      </>
    </div>
  );
};

export default Company;
