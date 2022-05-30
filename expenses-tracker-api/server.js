import express from "express";
const app = express();

const PORT = process.env.PORT || 8000;

// setup middleware
import cors from "cors";
import morgan from "morgan";

app.use(express.json()); // parse the json data coming from frontend, we can't get data without this in our req.body()
app.use(cors());
app.use(morgan("short"));

app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Not Found</h1>");
});

app.listen(PORT, (error) => {
  error && console.log(error);

  console.log(`Server is running on port ${PORT}`);
});
