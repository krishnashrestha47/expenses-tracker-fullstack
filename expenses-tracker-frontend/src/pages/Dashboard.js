import React, { useEffect } from "react";
import { useState } from "react";
import { Alert, Col, Row, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CustomTable } from "../components/custom-table/CustomTable";
import { ExpensesForm } from "../components/expenses-form/ExpensesForm";
import { MainLayout } from "../components/layout/MainLayout";
import { getExpense, postExpense } from "../helpers/axiosHelper";

export const Dashboard = () => {
  const navigate = useNavigate();

  const [resp, setResp] = useState({
    status: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (!user?._id) {
      navigate("/");
    }
    fetchExpenses();
  }, [navigate]);

  const fetchExpenses = async () => {
    const data = await getExpense();
    console.log(data);
    data?.status === "success" && setExpenses(data.expenses);
  };

  const handleOnPost = async (formDt) => {
    console.log("submit", formDt);

    setIsLoading(true);
    const data = await postExpense(formDt);
    setIsLoading(false);
    setResp(data);
    //call the api
  };

  console.log(expenses);

  return (
    <div>
      <MainLayout>
        <div>Dashboard</div>
        <hr />
        <Row className="mb-3">
          <Col>
            {isLoading && <Spinner variant="primary" animation="border" />}
            {resp?.message && (
              <Alert variant={resp.status === "success" ? "success" : "danger"}>
                {resp.message}
              </Alert>
            )}
          </Col>
        </Row>
        <ExpensesForm handleOnPost={handleOnPost} />
        <CustomTable expenses={expenses} />
      </MainLayout>
    </div>
  );
};
