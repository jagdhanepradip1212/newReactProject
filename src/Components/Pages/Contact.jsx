import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "react-feather";
import Footer from "../Footer/Footer";

const Contact = () => {
  const contactPhone = process.env.REACT_APP_CONTACT_PHONE;
  const contactEmail = process.env.REACT_APP_CONTACT_EMAIL;
  return (
    <>
      <meta charSet="utf-8" />
      <title>Contact - Treenets Technology Solutions</title>
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
      {/* Main css File */}
      <link href="css/style.min.css" rel="stylesheet" type="text/css" />

      {/* Hero Start */}
      <section className="bg-half bg-light d-table w-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <div className="title-heading">
                <h4>Get In Touch !</h4>
                <p className="text-muted para-desc mx-auto mt-3 mb-0">
                  Hello, Contact now it's free.
                </p>
                <nav aria-label="breadcrumb" className="d-inline-block mt-4">
                  <ul className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                      <a href="index.html">Treenets Technology Solutions</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Contact Us
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            {/*end col*/}
            <div className="home-shape-arrow">
              <a href="#contact" className="scroll-down">
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
      <section className="section pb-0" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="contact-detail d-flex align-items-center">
                <div className="contact-icon rounded-circle bg-primary text-center">
                  <i
                    data-feather="phone"
                    className="fea icon-md-md text-white"
                  />
                </div>
                <div className="content ms-3">
                  <h5 className="title mb-0">Phone</h5>
                  <a href="tel:+152534-468-854" className="text-primary">
                    {contactPhone}
                  </a>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-4 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="contact-detail d-flex align-items-center">
                <div className="contact-icon rounded-circle bg-primary text-center">
                  <i
                    data-feather="mail"
                    className="fea icon-md-md text-white"
                  />
                </div>
                <div className="content ms-3">
                  <h5 className="title mb-0">Email Id</h5>
                  <a href="mailto:contact@example.com" className="text-primary">
                    {contactEmail}
                  </a>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="col-lg-4 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
              <div className="contact-detail d-flex align-items-center">
                <div className="contact-icon rounded-circle bg-primary text-center">
                  <i
                    data-feather="map-pin"
                    className="fea icon-md-md text-white"
                  />
                </div>
                <div className="content ms-3">
                  <h5 className="title mb-0">Map</h5>
                  <a href="#" className="video-play-icon text-primary">
                    View on Google map
                  </a>
                </div>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
          <div className="row align-items-center">
            <div className="col-md-6 order-md-1 order-2 mt-md-5 mt-4 pt-2">
              <div className="me-lg-5">
                <img
                  src="images/svg/revenue-graph-colour.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            {/*end col*/}
            <div className="col-md-6 order-md-2 order-1 mt-md-5 mt-4 pt-2">
              <div className="custom-form mt-3 p-4 shadow rounded">
                <form
                  method="post"
                  name="myForm"
                  onSubmit="return validateForm()"
                >
                  <p id="error-msg" />
                  <div id="simple-msg" />
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Your Name <span className="text-danger">*</span>
                        </label>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          className="form-control"
                          placeholder="Name :"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Your Email <span className="text-danger">*</span>
                        </label>
                        <input
                          name="email"
                          id="email"
                          type="email"
                          className="form-control"
                          placeholder="Email :"
                        />
                      </div>
                    </div>
                    {/*end col*/}
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">Subject</label>
                        <input
                          name="subject"
                          id="subject"
                          className="form-control"
                          placeholder="subject :"
                        />
                      </div>
                    </div>
                    {/*end col*/}
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Comments <span className="text-danger">*</span>
                        </label>
                        <textarea
                          name="comments"
                          id="comments"
                          rows={4}
                          className="form-control"
                          placeholder="Message :"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="d-grid">
                        <button
                          type="submit"
                          id="submit"
                          name="send"
                          className="btn btn-primary"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                    {/*end col*/}
                  </div>
                  {/*end row*/}
                </form>
              </div>
              {/*end custom-form*/}
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
        <div className="container-fluid px-0 mt-100 mt-60">
          <div className="row">
            <div className="col-12">
              <div className="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5263240807158!2d73.82026867423579!3d18.459803771029502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2954062e82d77%3A0x6080a70602439efb!2z4KS44KSoIOCkr-ClgeCkqOCkv-CkteCljeCkueCksOCljeCkuA!5e0!3m2!1smr!2sin!4v1706183942955!5m2!1smr!2sin"
               width="600"
                height="450"
                className="rounded"
                 style={{border: 0}} 
                 allowfullscreen=""
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade">

                </iframe>

                {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  className="rounded"
                  allowFullScreen=""
                /> */}
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

      {/* Footer Start */}

      <Footer />

      {/*end footer*/}
    </>
  );
};

export default Contact;
