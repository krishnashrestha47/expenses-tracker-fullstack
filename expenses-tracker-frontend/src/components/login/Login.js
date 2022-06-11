import React, { useRef, useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { postLogin } from "../../helpers/axiosHelper";

export const Login = () => {
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

    //if login success, store user data in session storage and redirect to dashboard page
    if (data.status === "success") {
      const { name, email, _id } = data.user;
      sessionStorage.setItem("user", JSON.stringify({ name, email, _id }));
    }
    //else show the error message
    setError(data.message);
  };

  return (
    <Row className="login-comp mt-5">
      <Form>
        <h3>Welcome Back</h3>
        <hr />
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
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
    </Row>
  );
};
