import mongoose from "mongoose";

const dbConnection = () => {
  const connectionString = "mongodb://localhost:27017/expenses_tracker";
  mongoose.connect("mongodb://localhost:27017/expenses-tracker-api");
};
