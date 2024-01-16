import React from "react";
import { Home } from "react-feather";

const SignIn = () => {
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
                  <h5 className="mb-4 pb-2">Sign In</h5>
                </div>
                <form className="login-form">
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-3 position-relative">
                        <label className="form-label small fw-bold">
                          Your Email <span className="text-danger">*</span>
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
                      <div className="mb-3 position-relative">
                        <label className="form-label small fw-bold">
                          Password <span className="text-danger">*</span>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          required=""
                          placeholder="Password :"
                        />
                      </div>
                    </div>
                    {/*end col*/}
                    <div className="col-12">
                      <div className="d-flex justify-content-between">
                        <div className="mb-3 d-inline-block">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label small fw-bold"
                              htmlFor="flexCheckDefault"
                            >
                              Remember me
                            </label>
                          </div>
                        </div>
                        <p className="forgot-pass mb-0">
                          <a
                            href="/forgotpassword"
                            className="text-dark small fw-bold"
                          >
                            Forgot password ?
                          </a>
                        </p>
                      </div>
                    </div>
                    {/*end col*/}
                    <div className="col-12 mb-0">
                      <button className="btn btn-primary w-100">Sign in</button>
                    </div>
                    {/*end col*/}
                    <div className="col-12 mt-4 text-center">
                      <h6 className="mb-0">Or Login With</h6>
                    </div>
                    {/*end col*/}
                    <div className="col-12">
                      <div className="row">
                        <div className="col-sm-6 mt-4">
                          <a href="#" className="btn w-100 btn-light">
                            <i className="mdi mdi-facebook text-primary" />{" "}
                            Facebook
                          </a>
                        </div>
                        <div className="col-sm-6 mt-4">
                          <a href="#" className="btn w-100 btn-light">
                            <i className="mdi mdi-google text-danger" /> Google
                          </a>
                        </div>
                      </div>
                    </div>
                    {/*end col*/}
                    <div className="col-12 text-center">
                      <p className="mb-0 mt-3">
                        <small className="text-dark me-2">
                          Don't have an account ?
                        </small>{" "}
                        <a href="/signup" className="text-dark fw-bold">
                          Sign Up
                        </a>
                      </p>
                    </div>
                    {/*end col*/}
                  </div>
                  {/*end row*/}
                </form>
                {/*end form*/}
              </div>
              {/*end login*/}
            </div>
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
export default SignIn;
