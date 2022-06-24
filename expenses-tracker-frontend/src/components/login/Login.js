import React, { useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/img.jpeg";
import { postLogin } from "../../helpers/axiosHelper";

export const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleOnSubmit = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email || !password) {
      return alert("Please enter your email and password");
    }
    setLoading(true);
    const { data } = await postLogin({ email, password });
    setLoading(false);
    console.log(data);

    if (data.status === "success") {
      const { name, email, _id } = data.user;

      //if login success, store user data in session storage and redirect to dashboard page
      sessionStorage.setItem("user", JSON.stringify({ name, email, _id }));
      navigate("/dashboard");
    }
    //else show the error message
    setError(data.message);
  };

  return (
    <Row className="login-comp mt-5">
      <Col className="col-12 col-md-6">
        <h2 className="fs-2 text-primary text-center">
          Keep track of your spending !
          <hr />
        </h2>
        <img src={img} alt="Image" />
      </Col>
      <Col className="col-0 col-md-1">
        <div className="vertical-line"></div>
      </Col>
      <Col className="col-12 col-md-6 d-flex justify-content-center">
        <Form>
          <h3>Welcome Back</h3>
          <hr />
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button onClick={handleOnSubmit} variant="primary">
            Login
          </Button>
          <div className="text-end">
            New here? <Link to="/register">Register</Link>
          </div>
        </Form>
      </Col>
    </Row>
  );
};
