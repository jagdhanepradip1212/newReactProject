import React, { useState } from "react";

const PricingPlan = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSHovered, setIsSHovered] = useState(false);
  const [isTHovered, setIsTHovered] = useState(false);
  const [isFHovered, setIsFHovered] = useState(false);
  return (
    <div className="container mt-100 mt-60">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="section-title text-center mb-4 pb-2">
            <h4 className="title mb-4">Our Pricing Plans</h4>
            <p className="text-muted para-desc mx-auto mb-0">
              Launch your campaign and benefit from our expertise on designing
              and managing conversion centered bootstrap 5 html page.
            </p>
          </div>
        </div>
        {/*end col*/}
      </div>
      {/*end row*/}
      <div className="row align-items-center">
        <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
          <div
            className={`pricing text-center rounded overflow-hidden shadow ${
              isHovered ? "hovered" : ""
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className={`price-header ${
                isHovered ? "bg-primary" : "bg-dark"
              } pt-5 pb-5`}
            >
              <h5 className="price-title text-white">Starter</h5>
              <p
                className={`mb-0 ${isHovered ? "text-light" : "text-white-50"}`}
              >
                Suitable for Starter
              </p>
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
              <div
                className={`border-top text-center py-4 ${
                  isHovered ? "hovered" : ""
                }`}
              >
                <a
                  href="/"
                  className={`btn ${isHovered ? "btn-primary" : "btn-dark"} `}
                >
                  Free Signup
                </a>
              </div>
            </div>
          </div>
          {/*end price three*/}
        </div>
        {/*end col*/}
        <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
          <div
            className={`pricing text-center rounded overflow-hidden shadow ${
              isSHovered ? "hovered" : ""
            }`}
            onMouseEnter={() => setIsSHovered(true)}
            onMouseLeave={() => setIsSHovered(false)}
          >
            <div
              className={`price-header ${
                isSHovered ? "bg-primary" : "bg-dark"
              } pt-5 pb-5`}
            >
              <h5 className="price-title text-white">Professional</h5>
              <p
                className={`mb-0 ${
                  isSHovered ? "text-light" : "text-white-50"
                }`}
              >
                Suitable for Regular
              </p>
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
              <div
                className={`border-top text-center py-4 ${
                  isSHovered ? "hovered" : ""
                }`}
              >
                <a
                  href="/"
                  className={`btn ${isSHovered ? "btn-primary" : "btn-dark"}`}
                >
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
          <div
            className={`pricing text-center rounded overflow-hidden shadow ${
              isFHovered ? "hovered" : ""
            }`}
            onMouseEnter={() => setIsFHovered(true)}
            onMouseLeave={() => setIsFHovered(false)}
          >
            <div
              className={`price-header ${
                isFHovered ? "bg-primary" : "bg-dark"
              } pt-5 pb-5`}
            >
              <h5 className="price-title text-white">Premium</h5>
              <p
                className={`mb-0 ${
                  isFHovered ? "text-light" : "text-white-50"
                }`}
              >
                Suitable for Primium
              </p>
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
              <div
                className={`border-top text-center py-4 ${
                  isFHovered ? "hovered" : ""
                }`}
              >
                <a
                  href="/"
                  className={`btn ${isFHovered ? "btn-primary" : "btn-dark"}`}
                >
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
  );
};

export default PricingPlan;
