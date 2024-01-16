import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "react-feather";

const Service = () => {
  return (
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
              <a className="navbar-toggle" id="isToggle" onclick="toggleMenu()">
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
      <section className="bg-half bg-light d-table w-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <div className="title-heading">
                <h4>What We Offer ?</h4>
                <p className="text-muted para-desc mx-auto mt-3 mb-0">
                  Introduce features and what features are provide.
                </p>
                <nav aria-label="breadcrumb" className="d-inline-block mt-4">
                  <ul className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <a href="index.html">Appgen</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Services
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            {/*end col*/}
            <div className="home-shape-arrow">
              <a href="#services" className="scroll-down">
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
      <section className="section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="feature position-relative text-center">
                <div className="p-4 rounded position-relative overflow-hidden">
                  <div className="icon text-primary">
                    <i className="uim uim-download-alt" />
                    <img
                      src="images/shape-1.png"
                      className="avatar avatar-small icon-shape"
                      alt=""
                    />
                  </div>
                  <div className="content mt-4">
                    <h5>
                      <a href="javascript:void(0)" className="title text-dark">
                        Store Integration
                      </a>
                    </h5>
                    <p className="text-muted">
                      Due to its widespread use as filler text for layouts,
                      non-readability is of great importance
                    </p>
                    <a href="javascript:void(0)" className="text-primary">
                      Read More{" "}
                      <i data-feather="chevron-right" className="fea icon-sm" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-4 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="feature position-relative text-center">
                <div className="p-4 rounded position-relative overflow-hidden">
                  <div className="icon text-primary">
                    <i className="uim uim-unlock-alt" />
                    <img
                      src="images/shape-1.png"
                      className="avatar avatar-small icon-shape"
                      alt=""
                    />
                  </div>
                  <div className="content mt-4">
                    <h5>
                      <a href="javascript:void(0)" className="title text-dark">
                        Data Protection
                      </a>
                    </h5>
                    <p className="text-muted">
                      Due to its widespread use as filler text for layouts,
                      non-readability is of great importance
                    </p>
                    <a href="javascript:void(0)" className="text-primary">
                      Read More{" "}
                      <i data-feather="chevron-right" className="fea icon-sm" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-4 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
              <div className="feature position-relative text-center">
                <div className="p-4 rounded position-relative overflow-hidden">
                  <div className="icon text-primary">
                    <i className="uim uim-chart" />
                    <img
                      src="images/shape-1.png"
                      className="avatar avatar-small icon-shape"
                      alt=""
                    />
                  </div>
                  <div className="content mt-4">
                    <h5>
                      <a href="javascript:void(0)" className="title text-dark">
                        Invoice Generator
                      </a>
                    </h5>
                    <p className="text-muted">
                      Due to its widespread use as filler text for layouts,
                      non-readability is of great importance
                    </p>
                    <a href="javascript:void(0)" className="text-primary">
                      Read More{" "}
                      <i data-feather="chevron-right" className="fea icon-sm" />
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
                      <a href="javascript:void(0)" className="title text-dark">
                        Auto Responder
                      </a>
                    </h5>
                    <p className="text-muted">
                      Due to its widespread use as filler text for layouts,
                      non-readability is of great importance
                    </p>
                    <a href="javascript:void(0)" className="text-primary">
                      Read More{" "}
                      <i data-feather="chevron-right" className="fea icon-sm" />
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
                    <i className="uim uim-airplay" />
                    <img
                      src="images/shape-1.png"
                      className="avatar avatar-small icon-shape"
                      alt=""
                    />
                  </div>
                  <div className="content mt-4">
                    <h5>
                      <a href="javascript:void(0)" className="title text-dark">
                        Social Plugins
                      </a>
                    </h5>
                    <p className="text-muted">
                      Due to its widespread use as filler text for layouts,
                      non-readability is of great importance
                    </p>
                    <a href="javascript:void(0)" className="text-primary">
                      Read More{" "}
                      <i data-feather="chevron-right" className="fea icon-sm" />
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
                    <i className="uim uim-circle-layer" />
                    <img
                      src="images/shape-1.png"
                      className="avatar avatar-small icon-shape"
                      alt=""
                    />
                  </div>
                  <div className="content mt-4">
                    <h5>
                      <a href="javascript:void(0)" className="title text-dark">
                        Data Backup
                      </a>
                    </h5>
                    <p className="text-muted">
                      Due to its widespread use as filler text for layouts,
                      non-readability is of great importance
                    </p>
                    <a href="javascript:void(0)" className="text-primary">
                      Read More{" "}
                      <i data-feather="chevron-right" className="fea icon-sm" />
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
                    <a href="javascript:void(0)" className="btn btn-dark">
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
                    <a href="javascript:void(0)" className="btn btn-dark">
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
                    <a href="javascript:void(0)" className="btn btn-primary">
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
                    <a href="javascript:void(0)" className="btn btn-dark">
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
        <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-4">Happy Client's</h4>
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
          <div className="row">
            <div className="col-12 mt-4">
              <div className="tiny-three-item">
                <div className="tiny-slide">
                  <div className="customer-testi m-2">
                    <div className="content p-3 shadow rounded bg-white position-relative">
                      <ul className="list-unstyled mb-0 text-warning">
                        <li className="list-inline-item">
                          <i className="mdi mdi-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="mdi mdi-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="mdi mdi-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="mdi mdi-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="mdi mdi-star" />
                        </li>
                      </ul>
                      <p className="text-muted mt-2">
                        " According to most sources, Lorum Ipsum can be traced
                        back to a text composed by Cicero. "
                      </p>
                    </div>
                    <div className="d-flex mt-3 align-items-center">
                      <img
                        src="images/client/01.jpg"
                        className="avatar avatar-small me-3 rounded shadow"
                        alt=""
                      />
                      <p className="text-primary mb-0">
                        - Calvin Carlo{" "}
                        <small className="text-muted d-block ms-2">
                          Manager
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="tiny-slide">
                  <div className="customer-testi m-2">
                    <div className="content p-3 shadow rounded bg-white position-relative">
                      <ul className="list-unstyled mb-0 text-warning">
                        <li className="list-inline-item">
                          <i className="mdi mdi-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="mdi mdi-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="mdi mdi-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="mdi mdi-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="mdi mdi-star" />
                        </li>
                      </ul>
                      <p className="text-muted mt-2">
                        " According to most sources, Lorum Ipsum can be traced
                        back to a text composed by Cicero. "
                      </p>
                    </div>
                    <div className="d-flex mt-3 align-items-center">
                      <img
                        src="images/client/02.jpg"
                        className="avatar avatar-small me-3 rounded shadow"
                        alt=""
                      />
                      <p className="text-primary mb-0">
                        - Christa Smith{" "}
                        <small className="text-muted d-block ms-2">
                          Manager
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="tiny-slide">
                  <div className="customer-testi m-2">
                    <div className="content p-3 shadow rounded bg-white position-relative">
                      <ul className="list-unstyled mb-0 text-warning">
                        <li className="list-inline-item">
                          <i className="mdi mdi-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="mdi mdi-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="mdi mdi-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="mdi mdi-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="mdi mdi-star" />
                        </li>
                      </ul>
                      <p className="text-muted mt-2">
                        " According to most sources, Lorum Ipsum can be traced
                        back to a text composed by Cicero. "
                      </p>
                    </div>
                    <div className="d-flex mt-3 align-items-center">
                      <img
                        src="images/client/03.jpg"
                        className="avatar avatar-small me-3 rounded shadow"
                        alt=""
                      />
                      <p className="text-primary mb-0">
                        - Jemina CLone{" "}
                        <small className="text-muted d-block ms-2">
                          Manager
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="tiny-slide">
                  <div className="customer-testi m-2">
                    <div className="content p-3 shadow rounded bg-white position-relative">
                      <ul className="list-unstyled mb-0 text-warning">
                        <li className="list-inline-item">
                          <i className="mdi mdi-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="mdi mdi-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="mdi mdi-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="mdi mdi-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="mdi mdi-star" />
                        </li>
                      </ul>
                      <p className="text-muted mt-2">
                        " According to most sources, Lorum Ipsum can be traced
                        back to a text composed by Cicero. "
                      </p>
                    </div>
                    <div className="d-flex mt-3 align-items-center">
                      <img
                        src="images/client/04.jpg"
                        className="avatar avatar-small me-3 rounded shadow"
                        alt=""
                      />
                      <p className="text-primary mb-0">
                        - Smith Vodka{" "}
                        <small className="text-muted d-block ms-2">
                          Manager
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="tiny-slide">
                  <div className="customer-testi m-2">
                    <div className="content p-3 shadow rounded bg-white position-relative">
                      <ul className="list-unstyled mb-0 text-warning">
                        <li className="list-inline-item">
                          <i className="mdi mdi-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="mdi mdi-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="mdi mdi-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="mdi mdi-star" />
                        </li>
                        <li className="list-inline-item">
                          <i className="mdi mdi-star" />
                        </li>
                      </ul>
                      <p className="text-muted mt-2">
                        " According to most sources, Lorum Ipsum can be traced
                        back to a text composed by Cicero. "
                      </p>
                    </div>
                    <div className="d-flex mt-3 align-items-center">
                      <img
                        src="images/client/05.jpg"
                        className="avatar avatar-small me-3 rounded shadow"
                        alt=""
                      />
                      <p className="text-primary mb-0">
                        - Cristino Murfi{" "}
                        <small className="text-muted d-block ms-2">
                          Manager
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
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
      {/* javascript */}
      {/* Icon */}
      {/* SLIDER */}
      {/* Contact */}
      {/* Main Js */}
    </>
  );
};

export default Service;
