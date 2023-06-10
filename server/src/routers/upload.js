import express from 'express'
import multer from 'multer'
import { deleteImage, updateImage, uploadImage } from "../controller/upload"
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import cloudinary from '../config/cloudinary'

const router = express.Router()

const storage = new CloudinaryStorage({
   cloudinary: cloudinary,
   params: {
      folder: 'angular',
      format: 'png'
   }
})

const upload = multer({ storage: storage })

router.post('/images/upload', upload.array('images', 10), uploadImage)
router.delete('/images/:publicId', deleteImage)
router.put('/images/:publicId', upload.array('images', 10), updateImage)

export default router