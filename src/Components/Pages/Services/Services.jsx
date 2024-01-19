import React from "react";
// import { Facebook, Instagram, Linkedin, Twitter } from "react-feather";
import Footer from "../../Footer/Footer";
import "../Services/Services.css";
import backgroundImage from "../../../assets/services.png";
import AptFooter from "../../Footer/aptFooter";
import android from "../../../assets/services/android_logo.png";
import web from "../../../assets/services/develop.jpg";
import QA from "../../../assets/services/qa.png";
import seo from "../../../assets/services/seo.jpg";
import php from "../../../assets/services/php.png";
import spring from "../../../assets/services/spring.png";
import iot from "../../../assets/services/iot.png";
import ios from "../../../assets/services/ios.png";
import native from "../../../assets/services/native.png";
import code from "../../../assets/services/code.png";

// import web from "../../assets/web3.jpg";
// import "../Pages/Services.css";

const Service = () => {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "650px",
  };
  return (
    <>
      <meta charSet="utf-8" />
      <title>Services - Treenets Technology Solutions</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="App and Saas Landing Template" />
      <link
        media="all"
        href="https://www.aptlogica.com/wp-content/cache/autoptimize/css/autoptimize_2f9dbe091aeec00f382beb4706c25aa9.css"
        rel="stylesheet"
      />
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
      {/* Main css File */}
      <link href="css/style.min.css" rel="stylesheet" type="text/css" />

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
              <a className="navbar-toggle" id="isToggle" onClick="toggleMenu()">
                <div className="lines">
                  <span />
                  <span />
                  <span />
                </div>
              </a>
              {/* End mobile menu toggle*/}
            </div>
          </div>

          {/*end navigation*/}
        </div>
        {/*end container*/}
      </header>
      {/*end header*/}
      {/* Navbar End */}
      {/* Hero Start */}
      <section
        className="bg-half bg-light d-table w-100 position-relative"
        style={sectionStyle}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <div className="title-heading">
                <nav
                  aria-label="breadcrumb"
                  className="d-inline-block mt-4"
                ></nav>
              </div>
            </div>

            <div className="home-shape-arrow">
              <a href="#services" className="scroll-down">
                <i className="mdi mdi-arrow-down arrow-icon bg-light text-dark h5" />
              </a>
            </div>
          </div>
        </div>{" "}
      </section>
      {/*end section*/}
      {/* Hero End */}
      {/* About Start */}

      <section className="banner-bottom-w3layouts bg-li py-5" id="services">
        <div className="container py-xl-5 py-lg-3">
          <h3 className="tittle text-center font-weight-bold">Our Services</h3>
          <p className="sub-tittle text-center mt-3 mb-sm-5 mb-4"></p>
          <div className="row pt-lg-4">
            <div className="col-lg-3 about-in text-center">
              <div className="card">
                <div className="card-body">
                  <h6>Android App Development</h6>
                  <img
                    src={android}
                    alt="Android App Development"
                    class="img-fluid mt-md-5 mt-4"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 about-in text-center my-lg-0 my-3">
              <div className="card active">
                <div className="card-body">
                  <h6>Customized Project Development</h6>
                  <a
                    href="customized-project-development.php"
                    className="btn button-style mt-md-6 mt-4"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 about-in text-center ">
              <div className="card">
                <div className="card-body">
                  <h6>WebSite Design And Development</h6>
                  <img
                    src={web}
                    alt="WebSite Design"
                    class="img-fluid mt-md-5 mt-4"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 about-in text-center my-lg-0 my-3">
              <div className="card">
                <div className="card-body">
                  <h6>QA and Testing</h6>
                  <img
                    src={QA}
                    alt="QA and Testing"
                    class="img-fluid mt-md-5 mt-4"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row pt-lg-4">
            <div className="col-lg-3 about-in text-center">
              <div className="card">
                <div className="card-body">
                  <h6>SEO and SEM</h6>
                  <img
                    src={seo}
                    alt="SEO and TEsting"
                    class="img-fluid mt-md-5 mt-4"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 about-in text-center my-lg-0 my-3">
              <div className="card active">
                <div className="card-body">
                  <h6>Php Laravel Development</h6>
                  <img
                    src={php}
                    alt="Php Laravel Development"
                    class="img-fluid mt-md-5 mt-4"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 about-in text-center">
              <div className="card">
                <div className="card-body">
                  <h6>Java Spring Development</h6>
                  <img
                    src={spring}
                    alt="Java Spring Development"
                    class="img-fluid mt-md-5 mt-4"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 about-in text-center my-lg-0 my-3">
              <div className="card">
                <div className="card-body">
                  <h6>Internet of Things(IoT)</h6>
                  <img
                    src={iot}
                    alt="Internet of Things"
                    class="img-fluid mt-md-5 mt-4"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row pt-lg-4">
            <div className="col-lg-3 about-in text-center">
              <div className="card">
                <div className="card-body">
                  <h6>IT Consultancy Service</h6>
                  <a
                    href="it-consultancy-servies.php"
                    className="btn button-style mt-md-5 mt-4"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 about-in text-center">
              <div className="card">
                <div className="card-body">
                  <h6>IOS Development</h6>
                  <img
                    src={ios}
                    alt="IOS Development"
                    class="img-fluid mt-md-5 mt-4"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 about-in text-center my-lg-0 my-3">
              <div className="card active">
                <div className="card-body">
                  <h6>Codeigniter</h6>
                  <img
                    src={code}
                    alt="Codeigniter"
                    class="img-fluid mt-md-5 mt-4"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 about-in text-center my-lg-0 my-3">
              <div className="card active">
                <div className="card-body">
                  <h6>React Native</h6>
                  <img
                    src={native}
                    alt="React Native"
                    class="img-fluid mt-md-5 mt-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <script src="js/custom.js"></script>
      </section>

      {/* <section className="section need-section" style={{ paddingTop: "0px" }}>
        <img
          src={web}
          alt="service-bg"
          style={{ display: "none", visibility: "hidden" }}
        />
        <noscript>
          <img src={web} alt="service-bg" />
        </noscript>
        <div className="floating-text ">
          <h2
            className="head02 text-white wow bounceInLeft"
            data-wow-offset="300"
          >
            Everything You Need<span>To Be Future-Ready</span>
          </h2>
        </div>
      </section> */}

      <section className="section" id="services">
        {/*end container*/}
        <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-4">Our Pricing Plans</h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  Launch your campaign and benefit from our expertise on
                  designing and managing conversion centered bootstrap4 html
                  page.
                </p>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
              <div className="pricing text-center rounded overflow-hidden shadow">
                <div className="price-header bg-dark pt-5 pb-5">
                  <h5 className="price-title text-white">Starter</h5>
                  <p className="mb-0 text-white-50">Suitable for Starter</p>
                </div>
                <div className="d-flex justify-content-center bg-light border-bottom py-4">
                  <span className="h6 mb-0">$</span>
                  <span className="price h4 mb-0 ms-1">0.00</span>
                  <span className="h6 align-self-end mb-1">/mo</span>
                </div>
                <div className="pricing-features text-start">
                  <ul className="feature list-unstyled py-4 p-3 mb-0">
                    <li className="feature-list text-muted">
                      <i
                        data-feather="arrow-right-circle"
                        className="fea icon-sm text-dark me-2"
                      />
                      Full Access
                    </li>
                    <li className="feature-list text-muted mt-2">
                      <i
                        data-feather="arrow-right-circle"
                        className="fea icon-sm text-dark me-2"
                      />
                      Enhanced Security
                    </li>
                    <li className="feature-list text-muted mt-2">
                      <i
                        data-feather="arrow-right-circle"
                        className="fea icon-sm text-dark me-2"
                      />
                      Source Files
                    </li>
                    <li className="feature-list text-muted mt-2">
                      <i
                        data-feather="arrow-right-circle"
                        className="fea icon-sm text-dark me-2"
                      />
                      1 Domain Free
                    </li>
                    <li className="feature-list text-muted mt-2">
                      <i
                        data-feather="arrow-right-circle"
                        className="fea icon-sm text-dark me-2"
                      />
                      Free Appointments
                    </li>
                    <li className="feature-list text-muted mt-2">
                      <i
                        data-feather="arrow-right-circle"
                        className="fea icon-sm text-dark me-2"
                      />
                      Free Installment
                    </li>
                  </ul>
                  <div className="border-top text-center py-4">
                    <a href="/" className="btn btn-dark">
                      Free Signup
                    </a>
                  </div>
                </div>
              </div>
              {/*end price three*/}
            </div>
            {/*end col*/}
            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
              <div className="pricing text-center rounded overflow-hidden shadow">
                <div className="price-header bg-dark pt-5 pb-5">
                  <h5 className="price-title text-white">Professional</h5>
                  <p className="mb-0 text-white-50">Suitable for Regular</p>
                </div>
                <div className="d-flex justify-content-center bg-light border-bottom py-4">
                  <span className="h6 mb-0">$</span>
                  <span className="price h4 mb-0 ms-1">9.99</span>
                  <span className="h6 align-self-end mb-1">/mo</span>
                </div>
                <div className="pricing-features text-start">
                  <ul className="feature list-unstyled py-4 p-3 mb-0">
                    <li className="feature-list text-muted">
                      <i
                        data-feather="arrow-right-circle"
                        className="fea icon-sm text-dark me-2"
                      />
                      Full Access
                    </li>
                    <li className="feature-list text-muted mt-2">
                      <i
                        data-feather="arrow-right-circle"
                        className="fea icon-sm text-dark me-2"
                      />
                      Enhanced Security
                    </li>
                    <li className="feature-list text-muted mt-2">
                      <i
                        data-feather="arrow-right-circle"
                        className="fea icon-sm text-dark me-2"
                      />
                      Source Files
                    </li>
                    <li className="feature-list text-muted mt-2">
                      <i
                        data-feather="arrow-right-circle"
                        className="fea icon-sm text-dark me-2"
                      />
                      1 Domain Free
                    </li>
                    <li className="feature-list text-muted mt-2">
                      <i
                        data-feather="arrow-right-circle"
                        className="fea icon-sm text-dark me-2"
                      />
                      Free Appointments
                    </li>
                    <li className="feature-list text-muted mt-2">
                      <i
                        data-feather="arrow-right-circle"
                        className="fea icon-sm text-dark me-2"
                      />
                      Free Installment
                    </li>
                  </ul>
                  <div className="border-top text-center py-4">
                    <a href="/" className="btn btn-dark">
                      Subscribe Now
                    </a>
                  </div>
                </div>
              </div>
              {/*end price three*/}
            </div>
            {/*end col*/}
            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
              <div className="pricing text-center rounded overflow-hidden shadow-lg bg-light">
                <div className="price-header bg-primary pt-5 pb-5">
                  <h5 className="price-title text-white">Standerd</h5>
                  <p className="mb-0 text-light">Suitable for Business</p>
                </div>
                <div className="d-flex justify-content-center bg-light border-bottom py-5">
                  <span className="h6 mb-0">$</span>
                  <span className="price h4 mb-0 ms-1">19.99</span>
                  <span className="h6 align-self-end mb-1">/mo</span>
                </div>
                <div className="pricing-features text-start">
                  <ul className="feature list-unstyled py-4 p-3 mb-0">
                    <li className="feature-list text-muted">
                      <i
                        data-feather="arrow-right-circle"
                        className="fea icon-sm text-primary me-2"
                      />
                      Full Access
                    </li>
                    <li className="feature-list text-muted mt-2">
                      <i
                        data-feather="arrow-right-circle"
                        className="fea icon-sm text-primary me-2"
                      />
                      Enhanced Security
                    </li>
                    <li className="feature-list text-muted mt-2">
                      <i
                        data-feather="arrow-right-circle"
                        className="fea icon-sm text-primary me-2"
                      />
                      Source Files
                    </li>
                    <li className="feature-list text-muted mt-2">
                      <i
                        data-feather="arrow-right-circle"
                        className="fea icon-sm text-primary me-2"
                      />
                      1 Domain Free
                    </li>
                    <li className="feature-list text-muted mt-2">
                      <i
                        data-feather="arrow-right-circle"
                        className="fea icon-sm text-primary me-2"
                      />
                      Free Appointments
                    </li>
                    <li className="feature-list text-muted mt-2">
                      <i
                        data-feather="arrow-right-circle"
                        className="fea icon-sm text-primary me-2"
                      />
                      Free Installment
                    </li>
                  </ul>
                  <div className="border-top text-center py-5">
                    <a href="/" className="btn btn-primary">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
              {/*end price three*/}
            </div>
            {/*end col*/}
            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
              <div className="pricing text-center rounded overflow-hidden shadow">
                <div className="price-header bg-dark pt-5 pb-5">
                  <h5 className="price-title text-white">Premium</h5>
                  <p className="mb-0 text-white-50">Suitable for Premium</p>
                </div>
                <div className="d-flex justify-content-center bg-light border-bottom py-4">
                  <span className="h6 mb-0">$</span>
                  <span className="price h4 mb-0 ms-1">29.99</span>
                  <span className="h6 align-self-end mb-1">/mo</span>
                </div>
                <div className="pricing-features text-start">
                  <ul className="feature list-unstyled py-4 p-3 mb-0">
                    <li className="feature-list text-muted">
                      <i
                        data-feather="arrow-right-circle"
                        className="fea icon-sm text-dark me-2"
                      />
                      Full Access
                    </li>
                    <li className="feature-list text-muted mt-2">
                      <i
                        data-feather="arrow-right-circle"
                        className="fea icon-sm text-dark me-2"
                      />
                      Enhanced Security
                    </li>
                    <li className="feature-list text-muted mt-2">
                      <i
                        data-feather="arrow-right-circle"
                        className="fea icon-sm text-dark me-2"
                      />
                      Source Files
                    </li>
                    <li className="feature-list text-muted mt-2">
                      <i
                        data-feather="arrow-right-circle"
                        className="fea icon-sm text-dark me-2"
                      />
                      1 Domain Free
                    </li>
                    <li className="feature-list text-muted mt-2">
                      <i
                        data-feather="arrow-right-circle"
                        className="fea icon-sm text-dark me-2"
                      />
                      Free Appointments
                    </li>
                    <li className="feature-list text-muted mt-2">
                      <i
                        data-feather="arrow-right-circle"
                        className="fea icon-sm text-dark me-2"
                      />
                      Free Installment
                    </li>
                  </ul>
                  <div className="border-top text-center py-4">
                    <a href="/" className="btn btn-dark">
                      Buy Premium
                    </a>
                  </div>
                </div>
              </div>
              {/*end price three*/}
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
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
      {/* <Footer /> */}
      <AptFooter />
      {/*end footer*/}
      {/* Footer End */}
      {/* javascript */}
      {/* Icon */}
      {/* SLIDER */}
      {/* Contact */}
      {/* Main Js */}
    </>
  );
};

export default Service;
