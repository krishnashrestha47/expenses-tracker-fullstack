import React, { useEffect } from "react";
import { Button, Container, Nav, Navbar, NavLink } from "react-bootstrap";
import { Link, useNavigate, useNavigationType } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { useState } from "react";

export const TopNav = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  useEffect(() => {
    const userInfo = JSON.parse(sessionStorage.getItem("user"));

    setUser(userInfo);
  }, []);

  const handleOnLogout = () => {
    sessionStorage.removeItem("user");
    navigate("/");
  };

  return (
    <Navbar variant="dark" bg="primary" expand="md">
      <Container>
        <Navbar.Brand href="/">Expenses Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user?._id ? (
              <>
                Welcome {user.name} {"   "}
                <Button variant="dark" onClick={handleOnLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <LinkContainer to="/">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/register">
                  <NavLink>Register</NavLink>
                </LinkContainer>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
