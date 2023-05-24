import mongoose from "mongoose";
import express from "express";
import routerProduct from "./routers/products";
import routerCategory from "./routers/categories";
import routerAthu from "./routers/auth";
import routerComment from "./routers/comment";
import routerCart from "./routers/cart";
import routerUsers from "./routers/users";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", routerProduct);
app.use("/api", routerAthu);
app.use("/api", routerCategory);
app.use("/api", routerComment);
app.use("/api", routerCart);
app.use("/api", routerUsers);

mongoose.connect("mongodb://127.0.0.1:27017/angular-n6");

export const viteNodeApp = app;
