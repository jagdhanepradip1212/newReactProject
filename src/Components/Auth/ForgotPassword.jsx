import React from "react";
import { Home } from "react-feather";

const ForgotPass = () => {
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
      {/* Main Css */}
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
      {/* Back to home Start */}
      <div className="back-to-home rounded d-none d-sm-block">
        <a href="/" className="text-white rounded d-inline-block text-center">
          <Home className="fea icon-sm fea-social" />
          <i data-feather="home" className="fea icon-sm" />
        </a>
      </div>
      {/* Back to home End */}
      {/* Hero Start */}
      <section className="user-pages vh-100 d-flex align-items-center">
        <div className="bg-overlay bg-overlay-white" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8">
              <div className="text-center">
                <a href="javascript:void(0)">
                  <img src="images/logo-dark.png" height={25} alt="" />
                </a>
              </div>
              <div className="login-page bg-white shadow-lg rounded p-4 mt-4 position-relative">
                <div className="text-center">
                  <h5 className="mb-4 pb-2">Forgot Password</h5>
                </div>
                <form className="login-form">
                  <div className="row">
                    <div className="col-12">
                      <p className="text-muted">
                        Please enter your email address. You will receive a link
                        to create a new password via email.
                      </p>
                      <div className="mb-3">
                        <label className="form-label small fw-bold">
                          Email address <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          required=""
                          placeholder="Your Email :"
                        />
                      </div>
                    </div>
                    {/*end col*/}
                    <div className="col-12">
                      <button className="btn btn-primary w-100">Send</button>
                    </div>
                    {/*end col*/}
                    <div className="col-12 text-center">
                      <p className="mb-0 mt-3">
                        <small className="text-dark me-2">
                          Remember Your Password ?
                        </small>{" "}
                        <a href="/signin" className="text-dark fw-bold">
                          Sign in
                        </a>
                      </p>
                    </div>
                  </div>
                  {/*end row*/}
                </form>
                {/*end form*/}
              </div>
              {/*end login*/}
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>{" "}
        {/*end container*/}
      </section>
      {/*end section*/}
      {/* Hero End */}
      {/* Javascript */}
      {/* Feather icon */}
      {/* Main Js */}
    </>
  );
};

export default ForgotPass;
