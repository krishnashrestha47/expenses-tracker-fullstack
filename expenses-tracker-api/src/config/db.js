import mongoose from "mongoose";

export const dbConnection = () => {
  try {
    const connectionString = "mongodb://localhost:27017/expenses_tracker_v1";
    const connection = mongoose.connect(connectionString);

    connection && console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};
