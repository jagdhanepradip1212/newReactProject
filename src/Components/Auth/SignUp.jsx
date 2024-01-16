import axios from "axios";
import React, { useState } from "react";
import { Home } from "react-feather";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Perform client-side validation if needed
      // ...

      // Send POST request to the server
      const response = await axios.post(
        "http://localhost:3002/register",
        formData
      );

      // Handle the server response as needed

      if (response.status === 201) {
        console.log("Responseeeeee Data:", response.data.message);
        alert("Registration successful!"); // Show a success message
      } else {
        console.log("Unexpected Response:", response);
        alert("Registration failed!"); // Show a generic failure message
      }

      console.log("responseeeee", response.data);
      console.log("meassssgeeee", response.data.message);

      // alert(response.message);
    } catch (error) {
      console.error("Error:", error);
    }
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
      {/* Main Css */}
      <link href="css/style.min.css" rel="stylesheet" type="text/css" />

      {/* Back to home Start */}
      <div className="back-to-home rounded d-none d-sm-block">
        <a href="/" className="text-white rounded d-inline-block text-center">
          <Home className="fea icon-sm fea-social" />
          <i data-feather="home" className="fea icon-sm" />
        </a>
      </div>
      {/* Back to home End */}
      {/* Hero Start */}
      <section className="bg-user-home user-pages d-flex align-items-center">
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
                  <h5 className="mb-4 pb-2">Sign Up</h5>
                </div>
                <form className="login-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label small fw-bold">
                          Full name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="fullName"
                          required=""
                          placeholder="Full Name :"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label small fw-bold">
                          Your Email <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          required=""
                          placeholder="Your Email :"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label small fw-bold">
                          Password <span className="text-danger">*</span>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          required=""
                          placeholder="Password :"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label small fw-bold">
                          Confirm Password{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          required=""
                          placeholder="Confirm Password :"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
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
                            I Accept{" "}
                            <a href="#" className="text-primary">
                              Terms And Condition
                            </a>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100">
                        Register
                      </button>
                    </div>
                    <div className="col-12 mt-4 text-center">
                      <h6>Or Signup With</h6>
                    </div>
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
                    <div className="mx-auto">
                      <p className="mb-0 mt-3">
                        <small className="text-dark me-2">
                          Already have an account ?
                        </small>{" "}
                        <a href="/signin" className="text-dark fw-bold">
                          Sign in
                        </a>
                      </p>
                    </div>
                  </div>
                </form>
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
export default Signup;
