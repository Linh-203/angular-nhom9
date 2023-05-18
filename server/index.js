import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import productRouter from "./src/routes/product.js";
dotenv.config();

const app = express();
mongoose.connect(process.env.URL_MONGODB);

app.use(express.json());
app.use("/api", productRouter);
app.listen(process.env.PORT, () => {
  console.log("Server running");
});
