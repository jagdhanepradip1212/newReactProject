import React from "react";
// import { Facebook, Instagram, Linkedin, Twitter } from "react-feather";
import Footer from "../../Footer/Footer";
import "../Services/Services.css";
import backgroundImage from "../../../assets/services.png";
import AptFooter from "../../Footer/aptFooter";
import HomePricingPlan from "../Home/HomePricingPlan";
import OurServices from "./OurServices";



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
         
          <div className="menu-extras">
            <div className="menu-item">
              {/* Mobile menu toggle*/}
              {/* <a className="navbar-toggle" id="isToggle" onClick="toggleMenu()">
                <div className="lines">
                  <span />
                  <span />
                  <span />
                </div>
              </a> */}
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

      <OurServices />

    

      <HomePricingPlan />

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
