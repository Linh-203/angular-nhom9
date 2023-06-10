import mongoose from 'mongoose'
import express from 'express'
import routerProduct from './routers/products'
import routerCategory from './routers/categories'
import routerAthu from './routers/auth'
import routerComment from './routers/comment'
import routerCart from './routers/cart'
import routerUsers from './routers/users'
import routerFavorite from './routers/favorite'
import uploadRouter from './routers/upload'
import cors from 'cors'
const app = express()
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))
app.use(cors())
app.use(express.json())
app.use('/api', routerProduct)
app.use('/api', routerAthu)
app.use('/api', routerCategory)
app.use('/api', routerComment)
app.use('/api', routerCart)
app.use('/api', routerUsers)
app.use('/api', routerFavorite)
app.use('/api', uploadRouter)
mongoose.connect('mongodb://127.0.0.1:27017/angular')
export const viteNodeApp = app
