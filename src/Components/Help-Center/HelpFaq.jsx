import React, { useState } from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "react-feather";

const HelpFaq = () => {
  const accordionData = [
    {
      question: "How does our Appgen work?",
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
    {
      question: "What is the main process to open an account?",
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
    {
      question: "How to make unlimited data entry?",
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
    {
      question: "Is Appgen safer to use with my account?",
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
  ];
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveAccordion(index === activeAccordion ? null : index);
  };
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

      {/* Loader End */}
      {/* Navbar STart */}
      <header id="topnav" className="defaultscroll sticky">
        <div className="container">
          {/* Logo container*/}

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
                <h4>About Appgen</h4>
                <p className="text-muted para-desc mx-auto mt-3 mb-0">
                  Brief information and story of Appgen Application
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
                      Faqs
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            {/*end col*/}
            <div className="home-shape-arrow">
              <a href="#faqs" className="scroll-down">
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
      <section className="section" id="faqs">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
              <img
                src="images/svg/app-user-monochrome.svg"
                className="img-fluid"
                alt=""
              />
            </div>

            <div className="col-lg-6 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="accordion mt-4 pt-2" id="buyingquestion">
                {accordionData.map((item, index) => (
                  <div
                    key={index}
                    className={`accordion-item rounded shadow overflow-hidden ${
                      index === activeAccordion ? "show" : ""
                    }`}
                  >
                    <h2 className="accordion-header" id={`heading${index}`}>
                      <button
                        className="accordion-button border-0 bg-light"
                        type="button"
                        onClick={() => handleAccordionClick(index)}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div
                      className={`accordion-collapse border-0 collapse ${
                        index === activeAccordion ? "show" : ""
                      }`}
                      aria-labelledby={`heading${index}`}
                      data-bs-parent="#buyingquestion"
                    >
                      <div className="accordion-body text-muted bg-white">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                ))}
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
                  designing and managing conversion centered bootstrap4 html
                  page.
                </p>
                <a
                  href="contact.html"
                  className="btn btn-primary mt-4 scroll-down"
                >
                  <i className="mdi mdi-phone" /> Contact us
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
                      <i
                        data-feather="linkedin"
                        className="fea icon-sm fea-social"
                      />
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
      {/* Contact */}
      {/* Main Js */}
    </>
  );
};
export default HelpFaq;
