import express from "express";
import { signIn, SinUp } from "../controller/auth";

const authRouter = express.Router()
authRouter.post("/signUp", SinUp )
authRouter.post("/signIn", signIn )
export default authRouter
