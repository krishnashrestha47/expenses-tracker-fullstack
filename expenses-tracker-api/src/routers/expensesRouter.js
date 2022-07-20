import express from "express";
import {
  createExpense,
  deleteExpenses,
  deleteManyExpenses,
  getExpenses,
} from "../models/expensesModel/Expenses.Model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { authorization } = req.headers;
    //Model- get all expenses of userId - authorization
    const expenses = await getExpenses({ userId: authorization });
    res.json({
      status: "success",
      expenses,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const { authorization } = req.headers;
    const result = await createExpense({ ...req.body, userId: authorization });

    result?._id
      ? res.json({
          status: "success",
          message: "Expenses created successfully",
          result,
        })
      : res.json({
          status: "error",
          message: "Error creating the expenses, try again later",
        });
  } catch (error) {
    console.log(error);
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.delete("/", async (req, res) => {
  try {
    const ids = req.body;
    const { authorization } = req.headers; // user id

    const data = await deleteManyExpenses(authorization, ids);

    data?.deletedCount
      ? res.json({
          status: "success",
          message: "Expense deleted successfully",
        })
      : res.json({
          status: "error",
          message: "Expense delete failed",
        });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

export default router;
