import express from "express";
import { createComment, getCommentFromProduct, getOneComment, removeComment, updateComment } from "../controller/comment";
import { checkComment } from "../middlewares/checkComment";

const router = express.Router()
router.post("/comment", checkComment,createComment )
router.put("/comment/:id", checkComment,updateComment )
router.post("/comment/:idProduct", getCommentFromProduct )
router.get("/comment/:id", getOneComment )
router.delete("/comment/:id", checkComment,removeComment )
export default router
