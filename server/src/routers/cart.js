import express from 'express'
import { changeOptions, create, getOne, removeProduct } from '../controller/cart'

const router = express.Router()
router.get('/cart/:id', getOne)
router.post('/cart/:id', create)
router.delete('/cart/:id', removeProduct)
router.put('/cart/:id', changeOptions)
export default router
