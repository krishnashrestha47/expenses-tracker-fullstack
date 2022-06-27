import React from "react";
import { ListGroup } from "react-bootstrap";

export const CustomTable = () => {
  return (
    <ListGroup variant="flush" className="mt-5 fs-3">
      <ListGroup.Item
        action
        variant="warning"
        className=" d-flex justify-content-between"
      >
        <span className="title">TV Shopping</span>
        <span className="cost">$2000</span>
      </ListGroup.Item>
      <ListGroup.Item
        action
        variant="warning"
        className=" d-flex justify-content-between"
      >
        <span className="title">TV Shopping</span>
        <span className="cost">$2000</span>
      </ListGroup.Item>
      <ListGroup.Item
        action
        variant="warning"
        className=" d-flex justify-content-between mt-4 fw-bold"
      >
        <span className="title">TV Shopping</span>
        <span className="cost">$2000</span>
      </ListGroup.Item>
    </ListGroup>
  );
};
