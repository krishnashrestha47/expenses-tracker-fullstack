import express from "express";
const app = express();

const PORT = process.env.PORT || 8000;

// setup middleware
import cors from "cors";
import morgan from "morgan";
import { userAuth } from "./src/middlewares/authMiddleware.js";

app.use(express.json()); // parse the json data coming from frontend, we can't get data without this in our req.body()
app.use(cors());
app.use(morgan("short"));

// db connection
import { dbConnection } from "./src/config/db.js";
dbConnection();

// APIs
import userRouter from "./src/routers/userRouter.js";
import expensesRouter from "./src/routers/expensesRouter.js";

app.use("/api/v1/users", userRouter);
app.use("/api/v1/expenses", userAuth, expensesRouter);

app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Not Found</h1>");
});

app.listen(PORT, (error) => {
  error && console.log(error);

  console.log(`Server is running on port ${PORT}`);
});
