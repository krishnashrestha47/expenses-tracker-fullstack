import React, { useEffect } from "react";
import { Alert, Button, Col, ListGroup, Row, Spinner } from "react-bootstrap";

import { fetchExpenses } from "../../pages/dashboard/dashboardAction";
import { useSelector, useDispatch } from "react-redux";

export const CustomTable = ({ handleOnDelete }) => {
  const dispatch = useDispatch();
  const { expenses, isLoading, res } = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(fetchExpenses());
  }, []);

  return (
    <div variant="flush" className="mt-5 fs-3">
      {isLoading && <Spinner animation="border" variant="primary" />}
      {res?.message && (
        <Alert variant={res.status === "success" ? "success" : "danger"}>
          {res.message}
        </Alert>
      )}
      <ListGroup>
        {expenses.map((item, i) => (
          <ListGroup.Item key={i} action variant="warning">
            <Row className=" d-flex justify-content-between">
              <Col className="md-6 title">{item.name}</Col>
              <Col className="text-end md-4 date">
                {item.date.substr(0, 10)}
              </Col>
              <Col className="text-end md-2 cost">
                ${item.amount} {""}
                <Button
                  variant="danger"
                  onClick={() => handleOnDelete(item._id)}
                >
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
    </div>
  );
};
