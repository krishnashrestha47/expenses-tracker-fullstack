import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const initialState = {
  name: "",
  amount: "",
  date: "",
};

export const ExpensesForm = () => {
  const [formDt, setFormDt] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormDt({
      ...formDt,
      [name]: value,
    });
  };
  console.log(formDt);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(formDt);
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Row className="g-3 bg-warning rounded pb-3 d-flex justify-content-center">
        <Col md="2">
          <Form.Select type="text" placeholder="Last name">
            <option> --- transaction --- </option>
            <option>Income</option>
            <option>Expense</option>
          </Form.Select>
        </Col>
        <Col md="4">
          <Form.Control
            type="text"
            name="name"
            placeholder="Transaction Name"
            onChange={handleOnChange}
            required
          />
        </Col>
        <Col md="2">
          <Form.Control
            type="number"
            name="amount"
            placeholder="Amount"
            onChange={handleOnChange}
            required
          />
        </Col>
        <Col md="2">
          <Form.Control
            type="date"
            name="date"
            placeholder="Date"
            onChange={handleOnChange}
            required
          />
        </Col>
        <Col md="1">
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
