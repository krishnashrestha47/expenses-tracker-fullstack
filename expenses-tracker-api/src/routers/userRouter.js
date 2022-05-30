import express from "express";

const router = express.Router();

// get user
router.get("/", (req, res) => {
  console.log(req.body);
  res.send("get user");
});

//register a user
router.post("/", (req, res) => {
  console.log(req.body);
  res.send("register user");
});

//login user
router.post("/login", (req, res) => {
  console.log(req.body);
  res.send("login user");
});

export default router;
