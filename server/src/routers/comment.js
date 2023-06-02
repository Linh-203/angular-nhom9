import express from "express";
import { createComment, getCommentFromProduct, getOneComment, removeComment, updateComment } from "../controller/comment";
import { checkComment } from "../middlewares/checkComment";

const router = express.Router()
router.post("/comment",createComment )
router.put("/comment/:id", checkComment,updateComment )
router.get("/comment/:idProduct", getCommentFromProduct )
router.post("/comment/:id", getOneComment )
router.delete("/comment/:id",removeComment )
export default router
