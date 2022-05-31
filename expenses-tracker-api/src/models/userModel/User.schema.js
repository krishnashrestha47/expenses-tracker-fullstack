import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: 1,
    },
    password: {
      type: String,
      required: true,
      minlength: [6, "Password must be atleast 6 characters"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema);
