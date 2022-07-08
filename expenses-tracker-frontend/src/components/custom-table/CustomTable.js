import React from "react";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
export const CustomTable = ({ expenses, handleOnDelete }) => {
  return (
    <ListGroup variant="flush" className="mt-5 fs-3">
      {expenses.map((item, i) => (
        <ListGroup.Item key={i} action variant="warning">
          <Row className=" d-flex justify-content-between">
            <Col className="md-6 title">{item.name}</Col>
            <Col className="text-end md-4 date">{item.date.substr(0, 10)}</Col>
            <Col className="text-end md-2 cost">
              ${item.amount} {""}
              <Button variant="danger" onClick={() => handleOnDelete(item._id)}>
                <i className="fa-solid fa-trash"></i>
              </Button>
            </Col>
          </Row>
        </ListGroup.Item>
      ))}

      <ListGroup.Item
        action
        variant="success"
        className=" d-flex justify-content-between mt-4 fw-bold"
      >
        <span className="title">Total</span>
        <span className="cost">$</span>
      </ListGroup.Item>
    </ListGroup>
  );
};
