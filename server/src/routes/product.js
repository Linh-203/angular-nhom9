import express from "express";
import { getAll } from "../controllers/product.js";

const productRouter = express.Router();
productRouter.get("/products", getAll);

export default productRouter;
