import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
// import Logout from './Logout';
import Registration from "./Registration";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <HeaderStyles>
      <Navbar dark sticky="top" expand="md">
        <div className="left-navbar-container">
          <NavbarBrand className="mr-auto" href="/">
            <img
              src="/assets/images/niftyfeed-logo.png"
              alt="NiftyFeed"
              className="Logo"
            />
          </NavbarBrand>
        </div>
        <div className="right-navbar-container">
          <NavbarToggler onClick={toggleNav} />
          <Collapse isOpen={isNavOpen} navbar className="Nav-Item">
            <Nav navbar>
              <NavItem>
                <NavLink className="Nav-Home" to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="Nav-About" to="/about">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="Nav-Contact" to="/contact">
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <Registration />
        </div>
      </Navbar>
    </HeaderStyles>
  );
};

const HeaderStyles = styled.div`
  .left-navbar-container {
    flex: 20%
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    padding-right: 260px;
    gap: 10px;
  }
  .right-navbar-container {
    flex: 10%;
    display: flex;
    justify-content: flex-end;
    padding-left: 200px;
    gap: 100px;
  }
  .Logo {
    width: 160%;
  }
  .Nav-Item {
    text-align: center;
  }
`````;

export default Header;
