import React, { useState } from "react";
import { Alert, Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { postRegister } from "../../helpers/axiosHelper";
import img from "../../assets/img.jpeg";

import { useDispatch, useSelector } from "react-redux";
import { isLoadingPending, setResponse } from "./userSlice";

const initialState = {
  name: "",
  email: "",
  password: "",
};
export const Register = () => {
  const dispatch = useDispatch();

  const [formDt, setFormDt] = useState(initialState);
  // const [isLoading, setIsLoading] = useState(false);
  // const [res, setRes] = useState({});

  const { res, isLoading } = useSelector((state) => state.user);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormDt({
      ...formDt,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // setIsLoading(true);
    dispatch(isLoadingPending(true));

    //call api using axios
    const { data } = await postRegister(formDt);
    // setRes(data);
    dispatch(setResponse(data));
    // setIsLoading(false);
  };

  return (
    <Row className="login-comp mt-5">
      <Col className="col-5">
        <h2 className="fs-2 text-primary text-center">
          Keep track of your spending !
        </h2>
        <hr />
        <img src={img} alt="expenses tracker" />
      </Col>
      <Col className="col-1">
        <div className="vertical-line"></div>
      </Col>
      <Col className="col-6 d-flex justify-content-center">
        <Form onSubmit={handleOnSubmit}>
          <h3>Register To Join Us</h3>
          <hr />

          {isLoading && <Spinner variant="primary" animation="border" />}
          {res.message && (
            <Alert variant={res.status === "success" ? "success" : "danger"}>
              {res.message}
            </Alert>
          )}
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              required
              onChange={handleOnChange}
              type="text"
              name="name"
              placeholder="Enter Full Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              onChange={handleOnChange}
              type="email"
              name="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              onChange={handleOnChange}
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Register
          </Button>
          <div className="text-end">
            Already a member? <Link to="/">Login</Link>
          </div>
        </Form>
      </Col>
    </Row>
  );
};
