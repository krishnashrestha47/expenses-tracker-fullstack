import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export const ExpensesForm = () => {
  return (
    <Form>
      <Row className="g-3 bg-warning rounded pb-3 d-flex justify-content-center">
        <Col md="2">
          <Form.Select type="text" placeholder="Last name">
            <option> --- transaction --- </option>
            <option>Income</option>
            <option>Expense</option>
          </Form.Select>
        </Col>
        <Col md="4">
          <Form.Control type="text" placeholder="Transaction Name" />
        </Col>
        <Col md="2">
          <Form.Control type="number" placeholder="Amount" />
        </Col>
        <Col md="2">
          <Form.Control type="date" placeholder="Date" />
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
