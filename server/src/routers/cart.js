import express from "express";
import { create, getOne, removeProduct } from "../controller/cart";

const router = express.Router();
router.get("/cart/:id", getOne);
router.post("/cart/:id", create);
router.delete("/cart/:id", removeProduct);
export default router;
