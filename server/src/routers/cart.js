import express from "express";
import { addToCart } from "../controller/cart";


const router = express.Router()
router.post("/cart",addToCart )
export default router
