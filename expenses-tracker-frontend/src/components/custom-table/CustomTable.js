import React from "react";
import { Button, ListGroup } from "react-bootstrap";

export const CustomTable = ({ expenses, handleOnDelete }) => {
  return (
    <ListGroup variant="flush" className="mt-5 fs-3">
      {expenses.map((item, i) => (
        <ListGroup.Item
          key={i}
          action
          variant="warning"
          className=" d-flex justify-content-between"
        >
          <span className="title">{item.name}</span>
          <span className="date">{item.date}</span>
          <span className="cost">
            ${item.amount} {""}
            <Button variant="danger" onClick={() => handleOnDelete(item._id)}>
              <i className="fa-solid fa-trash"></i>
            </Button>
          </span>
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
