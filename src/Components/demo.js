import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const Navbar = () => {
  const location = useLocation();
  const isSignUp = location.pathname === "/signup";
  const isSignIn = location.pathname === "/signin";
  const isForgotPass = location.pathname === "/forgotpassword";

  if (isSignUp || isSignIn || isForgotPass) {
    return null;
  }

  const fade = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.nav style={fade} className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
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
                exact
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
              <NavLink
                className="nav-link"
                to="/howework"
                activeClassName="active"
              >
                How we work
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/blog"
                activeClassName="active"
              >
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
      </div>
    </animated.nav>
  );
};

export default Navbar;
