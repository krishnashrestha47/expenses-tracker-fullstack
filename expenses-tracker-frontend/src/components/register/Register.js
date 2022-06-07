import React, { useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { postRegister } from "../../helpers/axiosHelper";

const initialState = {
  name: "",
  email: "",
  password: "",
};
export const Register = () => {
  const [formDt, setFormDt] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormDt({
      ...formDt,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    //call api using axios
    const { data } = await postRegister(formDt);
    console.log(data);
  };

  return (
    <Row className="login-comp mt-5">
      <Form onSubmit={handleOnSubmit}>
        <h3>Register To Join Us</h3>
        <hr />
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
    </Row>
  );
};
