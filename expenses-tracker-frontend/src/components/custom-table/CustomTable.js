import React, { useEffect } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Form,
  ListGroup,
  Row,
} from "react-bootstrap";

import {
  fetchExpenses,
  handleOnDeleteExpenses,
} from "../../pages/dashboard/dashboardAction";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

export const CustomTable = () => {
  const dispatch = useDispatch();
  const { expenses, res } = useSelector((state) => state.dashboard);

  const [ids, setIds] = useState([]);
  const [display, setDisplay] = useState("all");

  useEffect(() => {
    dispatch(fetchExpenses());
    res.status === "success" && setIds([]);
  }, [res]);

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

  const incomeArg = expenses.filter((item) => item.type === "income");
  const expenseArg = expenses.filter((item) => item.type === "expenses");

  const transactions = {
    all: expenses,
    income: incomeArg,
    expenses: expenseArg,
  };

  return (
    <div variant="flush" className="mt-5 fs-3">
      <div className="btn-group pb-3">
        <ButtonGroup aria-label="Basic example">
          <Button
            variant="primary"
            onClick={() => {
              setDisplay("all");
            }}
          >
            All
          </Button>
          <Button
            variant="success"
            onClick={() => {
              setDisplay("income");
            }}
          >
            Income
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              setDisplay("expenses");
            }}
          >
            Expenses
          </Button>
        </ButtonGroup>
      </div>

      <div>
        {display === "all" ? "All transactions" : `All ${display} transactions`}{" "}
      </div>

      <ListGroup>
        {transactions[display].map((item, i) => (
          <ListGroup.Item key={item._id} action variant="warning">
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
                {item.type === "expenses" ? "-" : ""}${item.amount} {""}
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
          <span className="cost">
            $
            {expenses.reduce(
              (a, b) => (b.type === "income" ? a + b.amount : a - b.amount),
              0
            )}
          </span>
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
