import React, { useEffect } from "react";
import {
  Alert,
  Button,
  Col,
  Form,
  ListGroup,
  Row,
  Spinner,
} from "react-bootstrap";

import {
  fetchExpenses,
  handleOnDeleteExpenses,
} from "../../pages/dashboard/dashboardAction";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

export const CustomTable = () => {
  const dispatch = useDispatch();
  const { expenses, isLoading, res } = useSelector((state) => state.dashboard);

  const [ids, setIds] = useState([]);

  useEffect(() => {
    dispatch(fetchExpenses());
  }, []);

  const handleOnDelete = async (ids) => {
    if (!window.confirm("Are you sure you want to delete?")) return;
    dispatch(handleOnDeleteExpenses(ids));
  };

  const handleOnSelect = (e) => {
    const { checked, value } = e.target;
    checked
      ? setIds([...ids, value])
      : setIds(ids.filter((id) => id !== value));
  };

  console.log(ids);

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
              <Col className="md-6 title">
                <Form.Check
                  onClick={handleOnSelect}
                  value={item._id}
                  type="checkbox"
                  label={item.name}
                />
              </Col>

              <Col className="text-end md-3 date">
                {item.date.substr(0, 10)}
              </Col>
              <Col className="text-end md-2 cost">
                ${item.amount} {""}
                <Button
                  variant="danger"
                  onClick={() => handleOnDelete([item._id])}
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
      <div className="mt-2 text-end">
        {ids.length > 0 && (
          <Button onClick={() => handleOnDelete(ids)} variant="danger">
            Delete
          </Button>
        )}
      </div>
    </div>
  );
};
