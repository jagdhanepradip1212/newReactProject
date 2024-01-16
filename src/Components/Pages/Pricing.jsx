import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "react-feather";

const Pricing = () => {
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
          </div>
          <div className="buy-button">
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
                <h4>Pricing Plans</h4>
                <p className="text-muted para-desc mx-auto mt-3 mb-0">
                  I also have Medium plan available
                </p>
                <nav aria-label="breadcrumb" className="d-inline-block mt-4">
                  <ul className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <a href="index.html">Appgen</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="index.html">Pages</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Pricing
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            {/*end col*/}
            <div className="home-shape-arrow">
              <a href="#blog" className="scroll-down">
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
      {/* Start pricing */}
      <section className="section" id="price">
        <div className="container">
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
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="faq-container">
                <h6 className="question">
                  <i
                    data-feather="help-circle"
                    className="fea icon-ex-md text-primary me-2"
                  />{" "}
                  How our <span className="text-primary">Appgen</span> work ?
                </h6>
                <p className="answer text-muted mt-3 mb-0">
                  Due to its widespread use as filler text for layouts,
                  non-readability is of great importance: human perception is
                  tuned to recognize certain patterns and repetitions in texts.
                </p>
              </div>
            </div>
            {/*end col*/}
            <div className="col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="faq-container">
                <h6 className="question">
                  <i
                    data-feather="help-circle"
                    className="fea icon-ex-md text-primary me-2"
                  />{" "}
                  What is the main process open account ?
                </h6>
                <p className="answer text-muted mt-3 mb-0">
                  If the distribution of letters and 'words' is random, the
                  reader will not be distracted from making a neutral judgement
                  on the visual impact
                </p>
              </div>
            </div>
            {/*end col*/}
            <div className="col-md-6 col-12 mt-4 pt-2">
              <div className="faq-container">
                <h6 className="question">
                  <i
                    data-feather="help-circle"
                    className="fea icon-ex-md text-primary me-2"
                  />{" "}
                  How to make unlimited data entry ?
                </h6>
                <p className="answer text-muted mt-3 mb-0">
                  Furthermore, it is advantageous when the dummy text is
                  relatively realistic so that the layout impression of the
                  final publication is not compromised.
                </p>
              </div>
            </div>
            {/*end col*/}
            <div className="col-md-6 col-12 mt-4 pt-2">
              <div className="faq-container">
                <h6 className="question">
                  <i
                    data-feather="help-circle"
                    className="fea icon-ex-md text-primary me-2"
                  />{" "}
                  Is <span className="text-primary">Appgen</span> safer to use
                  with my account ?
                </h6>
                <p className="answer text-muted mt-3 mb-0">
                  The most well-known dummy text is the 'Lorem Ipsum', which is
                  said to have originated in the 16th century. Lorem Ipsum is
                  composed in a pseudo-Latin language which more or less
                  corresponds to 'proper' Latin.
                </p>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
          <div className="row mt-md-5 pt-md-3 mt-4 pt-2 justify-content-center">
            <div className="col-12 text-center">
              <div className="section-title">
                <h4 className="title mb-4">Have Question ? Get in touch!</h4>
                <p className="text-muted para-desc mx-auto">
                  Launch your campaign and benefit from our expertise on
                  designing and managing conversion centered bootstrap 5 html
                  page.
                </p>
                <a
                  href="#subscribe"
                  className="btn btn-primary mt-4 scroll-down"
                >
                  Subscribe Now
                </a>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* End pricing */}
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
        <a href="/" className="back-to-top" id="back-to-top" title="Top">
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
      {/* Main Js */}
    </>
  );
};
export default Pricing;
