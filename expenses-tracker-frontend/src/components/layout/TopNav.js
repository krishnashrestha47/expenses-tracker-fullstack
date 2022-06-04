import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
export const TopNav = () => {
  return (
    <Navbar bg="info" expand="md">
      <Container>
        <Navbar.Brand href="/">Expenses Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
