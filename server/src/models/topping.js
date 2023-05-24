import mongoose from "mongoose";

const toppingSchema = mongoose.Schema(
  {
    name: String,
  },
  { timestamps: true, versionKey: false }
);
export default mongoose.model("auth", auth);
