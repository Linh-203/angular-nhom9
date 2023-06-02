import express  from "express";
import { createFavorite, getAllFavorite, getFavoriteIP, getFavoriteIU, removeFavorite } from "../controller/favorite";

const router = express.Router()
router.get("/favorites", getAllFavorite)
router.post("/favorites", createFavorite)
router.get("/favorites/:id", getFavoriteIP)
router.get("/favorite/:id", getFavoriteIU)
router.delete("/favorites/:idUser/:idProduct", removeFavorite)

export default router