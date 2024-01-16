import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';

const YourNavbarComponent = () => {
  return (
    <Nav>
      <NavDropdown title="Help" id="basic-nav-dropdown">
        <NavDropdown.Item href="/faqs">Help-Center</NavDropdown.Item>
        <NavDropdown.Item>
          <NavDropdown title="Utility" id="utility-nav-dropdown">
            <NavDropdown.Item href="/contact">Terms and Conditions</NavDropdown.Item>
            <NavDropdown.Item href="/pricing">Privacy Policy</NavDropdown.Item>
          </NavDropdown>
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
};

export default YourNavbarComponent;
