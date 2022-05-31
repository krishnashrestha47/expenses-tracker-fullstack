import express from "express";
import { insertUser } from "../models/userModel/User.model.js";

const router = express.Router();

// get user
router.get("/", (req, res) => {
  console.log(req.body);
  res.send("get user");
});

//register a user
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const result = await insertUser(req.body);

    result?._id
      ? res.json({
          status: "success",
          message: "User registered successfully",
        })
      : res.json({
          status: "error",
          message: "User registration failed, Please try again later",
        });
  } catch (error) {
    let message = error.message;
    if (error.message.includes("duplicate key error collection")) {
      message = "User already exists with this email";
    }
    res.json({
      status: "error",
      message,
    });
  }
});

//login user
router.post("/login", (req, res) => {
  console.log(req.body);
  res.send("login user");
});

export default router;
