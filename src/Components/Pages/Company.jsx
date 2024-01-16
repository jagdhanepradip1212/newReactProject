import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "react-feather";

const Company = () => {
  return (
    <div>
      <>
        <meta charSet="utf-8" />
        <title>Appgen - App &amp; Saas Landing Template</title>
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
        {/* Loader Start */}
        {/* <div id="preloader">
          <div id="status">
            <div className="logo">
              <img
                src="images/logo-dark.png"
                height={25}
                className="d-block mx-auto"
                alt=""
              />
            </div>
            <div className="sk-chase mt-4">
              <div className="sk-chase-dot" />
              <div className="sk-chase-dot" />
              <div className="sk-chase-dot" />
              <div className="sk-chase-dot" />
              <div className="sk-chase-dot" />
              <div className="sk-chase-dot" />
            </div>
          </div>
        </div> */}
        {/* Loader End */}
        {/* Navbar STart */}
        <header id="topnav" className="defaultscroll sticky">
          <div className="container">
            {/* Logo container*/}
            {/* <div>
              <a className="logo" href="index.html">
                <img src="images/logo-dark.png" height={22} alt="" />
              </a>
            </div> */}
            {/* <div className="buy-button">
              <a href="signup.html" className="btn btn-primary">
                Signup
              </a>
            </div> */}
            {/*end login button*/}
            {/* End Logo container*/}
            <div className="menu-extras">
              <div className="menu-item">
                {/* Mobile menu toggle*/}
                <a
                  className="navbar-toggle"
                  id="isToggle"
                  onclick="toggleMenu()"
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
        <section className="bg-half bg-light d-table w-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 text-center">
                <div className="title-heading">
                  <h4>About Appgen</h4>
                  <p className="text-muted para-desc mx-auto mt-3 mb-0">
                    Brief information and story of Appgen Application
                  </p>
                  <nav aria-label="breadcrumb" className="d-inline-block mt-4">
                    <ul className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                        <a href="index.html">Appgen</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        About us
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              {/*end col*/}
              <div className="home-shape-arrow">
                <a href="#about" className="scroll-down">
                  <i className="mdi mdi-arrow-down arrow-icon bg-light text-dark h5" />
                </a>
              </div>
            </div>
            {/*end row*/}
          </div>{" "}
          {/*end container*/}
        </section>
        {/*end section*/}
        {/* Hero End */}
        {/* About Start */}
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
                  <h4 className="title mb-4">Our Story : Appgen</h4>
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
                          <a href="javascript:void(0)" className="text-dark">
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
                          <a href="javascript:void(0)" className="text-dark">
                            Free Download
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className="col-lg-6 mt-4 pt-2">
                      <div className="d-flex align-items-center rounded shadow p-3">
                        <i data-feather="user" className="fea text-primary" />
                        <h6 className="ms-3 mb-0">
                          <a href="javascript:void(0)" className="text-dark">
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
                          <a href="javascript:void(0)" className="text-dark">
                            Development
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className="col-12 mt-4 pt-2">
                      <div className="watch-video">
                        <a
                          href="javascript:void(0)"
                          className="btn btn-primary mb-2 me-2"
                        >
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
          <div className="container mt-100 mt-60">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="section-title text-center mb-4 pb-2">
                  <h6 className="text-primary font-weight-normal mb-3">
                    Work Process
                  </h6>
                  <h4 className="title mb-4">How It Works ?</h4>
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
              <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                <div className="feature position-relative text-center">
                  <div className="p-4 rounded position-relative overflow-hidden">
                    <div className="icon text-primary">
                      <i className="uim uim-key-skeleton-alt" />
                      <img
                        src="images/shape-1.png"
                        className="avatar avatar-small icon-shape"
                        alt=""
                      />
                    </div>
                    <div className="content mt-4">
                      <h5>
                        <a
                          href="javascript:void(0)"
                          className="title text-dark"
                        >
                          Create Account
                        </a>
                      </h5>
                      <p className="text-muted">
                        Due to its widespread use as filler text for layouts,
                        non-readability is of great importance
                      </p>
                      <a href="javascript:void(0)" className="text-primary">
                        Read More{" "}
                        <i
                          data-feather="chevron-right"
                          className="fea icon-sm"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*end col*/}
              <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                <div className="feature position-relative text-center">
                  <div className="p-4 rounded position-relative overflow-hidden">
                    <div className="icon text-primary">
                      <i className="uim uim-signal-alt-3" />
                      <img
                        src="images/shape-1.png"
                        className="avatar avatar-small icon-shape"
                        alt=""
                      />
                    </div>
                    <div className="content mt-4">
                      <h5>
                        <a
                          href="javascript:void(0)"
                          className="title text-dark"
                        >
                          Data Analysis
                        </a>
                      </h5>
                      <p className="text-muted">
                        Due to its widespread use as filler text for layouts,
                        non-readability is of great importance
                      </p>
                      <a href="javascript:void(0)" className="text-primary">
                        Read More{" "}
                        <i
                          data-feather="chevron-right"
                          className="fea icon-sm"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*end col*/}
              <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                <div className="feature position-relative text-center">
                  <div className="p-4 rounded position-relative overflow-hidden">
                    <div className="icon text-primary">
                      <i className="uim uim-flip-v" />
                      <img
                        src="images/shape-1.png"
                        className="avatar avatar-small icon-shape"
                        alt=""
                      />
                    </div>
                    <div className="content mt-4">
                      <h5>
                        <a
                          href="javascript:void(0)"
                          className="title text-dark"
                        >
                          Show Result
                        </a>
                      </h5>
                      <p className="text-muted">
                        Due to its widespread use as filler text for layouts,
                        non-readability is of great importance
                      </p>
                      <a href="javascript:void(0)" className="text-primary">
                        Read More{" "}
                        <i
                          data-feather="chevron-right"
                          className="fea icon-sm"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
          </div>
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
          <div className="container mt-100 mt-60">
            <div
              className="py-5 px-4 bg-primary rounded-pill"
              style={{ background: 'url("images/map.png") center center' }}
            >
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                    <h4 className="title text-white mb-4">
                      Subscribe our Newsletter
                    </h4>
                    <p className="text-white-50 mx-auto para-desc mb-0">
                      Launch your campaign and benefit from our expertise on
                      designing and managing conversion centered bootstrap4 html
                      page.
                    </p>
                  </div>
                </div>
                {/*end col*/}
                <div className="col-lg-8">
                  <div className="text-center subcribe-form mt-4 pt-2">
                    <form>
                      <div className="form-group mb-0">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="rounded-pill"
                          placeholder="Your Email Id"
                        />
                        <button
                          type="submit"
                          className="btn btn-pills btn-success"
                        >
                          Subscribe Now
                        </button>
                      </div>
                    </form>
                    {/*end form*/}
                  </div>
                  {/*end subscribe form*/}
                </div>
                {/*end col*/}
              </div>
              {/*end row*/}
            </div>
            {/*end div*/}
          </div>
          {/*end container*/}
          {/* CTA End */}
        </section>
        {/*end section*/}
        {/* About End */}
        {/* Client Start */}
        <section className="py-4 bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-2 col-md-2 col-6 text-center py-4">
                <img
                  src="images/client/amazon.svg"
                  className="avatar avatar-ex-sm"
                  alt=""
                />
              </div>
              {/*end col*/}
              <div className="col-lg-2 col-md-2 col-6 text-center py-4">
                <img
                  src="images/client/google.svg"
                  className="avatar avatar-ex-sm"
                  alt=""
                />
              </div>
              {/*end col*/}
              <div className="col-lg-2 col-md-2 col-6 text-center py-4">
                <img
                  src="images/client/lenovo.svg"
                  className="avatar avatar-ex-sm"
                  alt=""
                />
              </div>
              {/*end col*/}
              <div className="col-lg-2 col-md-2 col-6 text-center py-4">
                <img
                  src="images/client/paypal.svg"
                  className="avatar avatar-ex-sm"
                  alt=""
                />
              </div>
              {/*end col*/}
              <div className="col-lg-2 col-md-2 col-6 text-center py-4">
                <img
                  src="images/client/shopify.svg"
                  className="avatar avatar-ex-sm"
                  alt=""
                />
              </div>
              {/*end col*/}
              <div className="col-lg-2 col-md-2 col-6 text-center py-4">
                <img
                  src="images/client/spotify.svg"
                  className="avatar avatar-ex-sm"
                  alt=""
                />
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
          </div>
          {/*end container*/}
        </section>
        {/*end section*/}
        {/* Client End */}
        {/* Footer Start */}
        <footer className="bg-dark py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 mb-3">
                <div className="text-center">
                  <a className="logo logo-footer" href="#">
                    <img src="images/logo-light.png" height={25} alt="" />
                  </a>
                  <p className="text-muted para-desc mx-auto mt-3">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap4 html
                    page.
                  </p>
                  <ul className="list-unstyled social-icon social mb-0 mt-4">
                    <li className="list-inline-item">
                      <a href="javascript:void(0)" className="rounded">
                        <Facebook className="fea icon-sm fea-social" />
                        <i
                          data-feather="facebook"
                          className="fea icon-sm fea-social"
                        />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="javascript:void(0)" className="rounded">
                        <Instagram className="fea icon-sm fea-social" />
                        <i
                          data-feather="instagram"
                          className="fea icon-sm fea-social"
                        />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="javascript:void(0)" className="rounded">
                        <Twitter className="fea icon-sm fea-social" />
                        <i
                          data-feather="twitter"
                          className="fea icon-sm fea-social"
                        />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="javascript:void(0)" className="rounded">
                        <Linkedin className="fea icon-sm fea-social" />
                        {/* <i
                        data-feather="linkedin"
                        className="fea icon-sm fea-social"
                      /> */}
                      </a>
                    </li>
                  </ul>
                  {/*end icon*/}
                </div>
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
          </div>
          {/*end container*/}
          {/* Back to top */}
          <a href="#" className="back-to-top" id="back-to-top" title="Top">
            <i className="mdi mdi-arrow-up icons bg-light text-dark"> </i>
          </a>
          {/* Back to top */}
        </footer>
        {/*end footer*/}
        <footer className="footer-bar bg-dark">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <p className="mb-0 footer-text para-desc mx-auto">
                  © <span className="text-reset">Appgen</span>. Design with{" "}
                  <i className="mdi mdi-heart text-danger" /> by{" "}
                  <a
                    href="http://shreethemes.in"
                    target="_blank"
                    className="text-reset"
                  >
                    Shreethemes
                  </a>
                  .
                </p>
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
          </div>
          {/*end container*/}
        </footer>
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
              {/* <video class="w-100" controls autoplay muted loop>
                  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"> */}
              {/*Browser does not support <video> tag */}
              {/* </video> */}
              {/*If you want to use your own video please set your files path*/}
              {/* <div class="ratio ratio-16x9">
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
