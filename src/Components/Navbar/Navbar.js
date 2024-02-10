import React, { useState } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isSignUp = location.pathname === "/signup";
  const isSignIn = location.pathname === "/signin";
  const isForgotPass = location.pathname === "/forgotpassword";

  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  if (isSignUp || isSignIn || isForgotPass) {
    return null;
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          {/* Your Logo */}
          <div className="logo">
            <img
              src="images/logo-tree1.png"
              height={50}
              width={100}
              className="d-block mx-auto"
              alt=""
            />
          </div>
        </NavLink>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${expanded ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav list-unstyled ms-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                exact={true}
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/service"
                activeClassName="active"
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/technology"
                activeClassName="active"
              >
                Technologies
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/blog" activeClassName="active">
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/company"
                activeClassName="active"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contact"
                activeClassName="active"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* <div className="ml-auto">
          <NavLink className="btn btn-primary" to="/signup">
            Sign Up
          </NavLink>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
