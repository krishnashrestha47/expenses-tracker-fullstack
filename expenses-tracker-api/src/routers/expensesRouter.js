import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Welcome to the expenses API get",
  });
});

router.post("/", (req, res) => {
  res.json({
    message: "Welcome to the expenses API post",
  });
});

router.delete("/", (req, res) => {
  res.json({
    message: "Welcome to the expenses API delete",
  });
});

export default router;
