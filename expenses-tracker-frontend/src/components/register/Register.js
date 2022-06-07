import React from "react";
import { Button, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <Row className="login-comp mt-5">
      <Form>
        <h3>Register To Join Us</h3>
        <hr />
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="name" placeholder="Enter Full Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="success">Register</Button>
        <div className="text-end">
          Already a member? <Link to="/">Login</Link>
        </div>
      </Form>
    </Row>
  );
};
