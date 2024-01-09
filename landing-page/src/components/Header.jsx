import React from "react";
import { NavDropdown, Navbar, Nav, Row } from "react-bootstrap";

function Header () {
    return (
        <Row>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Navbar.Brand id="header-title">Black<span style={{color:"red"}}><em>Friday Sales!</em></span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto header">
                <Nav.Link className="nav-link" href="#home">Home</Nav.Link>
                <Nav.Link className="nav-link" href="#about">About</Nav.Link>
                <NavDropdown title="Shop" id="basic-nav-dropdown">
                  <NavDropdown.Item className="nav-link" href="#shop">Shop</NavDropdown.Item>
                  <NavDropdown.Item className="nav-link" href="#pricing">
                    Pricing
                  </NavDropdown.Item>
                  <NavDropdown.Item className="nav-link" href="#review">Review</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="nav-link" href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
        </Row>
    )
}

export default Header;