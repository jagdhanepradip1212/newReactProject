import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isSignUp = location.pathname === "/signup";
  const isSignIn = location.pathname === "/signin";
  const isForgotPass = location.pathname === "/forgotpassword";

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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav list-unstyled ms-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                exact="true"
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
            {/* <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/howework"
                activeClassName="active"
              >
                How we work
              </NavLink>
            </li> */}
            {/* 
            <Nav>
              <li className="nav-item">
                <NavDropdown title="Help" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/faqs">Help-Center</NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavDropdown title="Utility" id="utility-nav-dropdown">
                      <NavDropdown.Item href="/contact">
                        Terms and Conditions
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/pricing">
                        Privacy Policy
                      </NavDropdown.Item>
                    </NavDropdown>
                  </NavDropdown.Item>
                </NavDropdown>
              </li>
            </Nav> */}

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
