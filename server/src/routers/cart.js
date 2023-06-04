import express from 'express'
import { changeQuantity, create, getOne, removeProduct } from '../controller/cart'
import { checkPermission } from '../middlewares/checkPerssion'

const router = express.Router()
router.get('/cart/:id', checkPermission, getOne)
router.post('/cart/:id', create)
router.delete('/cart/:id', removeProduct)
router.put('/cart/:id', changeQuantity)
export default router
