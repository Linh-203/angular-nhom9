import express from "express";

import { create, get, getAll, removeCategory, updateCategory } from "../controller/categories";
import { checkPermission } from "../middlewares/checkPerssion";

const router = express.Router();
router.get("/categories", getAll);
router.get("/categories/:id", get);
router.post("/categories", checkPermission,create);
router.patch("/categories/:id", checkPermission,updateCategory);
router.delete("/categories/:id", checkPermission,removeCategory);

export default router;