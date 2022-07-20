import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { handleOnPost } from "../../pages/dashboard/dashboardAction";

const initialState = {
  name: "",
  amount: "",
  date: "",
};

export const ExpensesForm = () => {
  const dispatch = useDispatch();
  const [formDt, setFormDt] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormDt({
      ...formDt,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(handleOnPost(formDt));
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Row className="g-3 bg-warning rounded pb-3 d-flex justify-content-center">
        <Col md="2">
          <Form.Select required name="type" onChange={handleOnChange}>
            <option> --- transaction --- </option>
            <option value="income">Income</option>
            <option value="expenses">Expense</option>
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
