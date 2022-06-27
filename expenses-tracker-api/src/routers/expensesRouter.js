import express from "express";
import { createExpense } from "../models/expensesModel/Expenses.Model.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to the expenses API get",
  });
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const result = await createExpense(req.body);

    result?._id
      ? res.json({
          status: "success",
          message: "Expenses created successfully",
        })
      : res.json({
          status: "error",
          message: "Error creating the expenses, try again later",
        });

    res.json({
      message: "Welcome to the expenses API post",
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.delete("/", (req, res) => {
  res.json({
    message: "Welcome to the expenses API delete",
  });
});

export default router;
