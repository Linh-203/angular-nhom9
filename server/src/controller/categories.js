import dotenv from 'dotenv'
import joi from 'joi'
import Product from '../models/product'
import Category from '../models/categories'

dotenv.config()

const categorySchema = joi.object({
   name: joi.string().required()
})

export const getAll = async (req, res) => {
   try {
      const categories = await Category.find().populate('products')
      if (!categories) {
         return res.json({
            message: 'Không tìm thấy sản phẩm'
         })
      }
      return res.json({
         message: 'Lấy sản phẩm thành công',
         categories
      })
   } catch (error) {
      return res.status(400).json({
         message: error
      })
   }
}
export const get = async (req, res) => {
   try {
      const category = await Category.findById(req.params.id).populate('products')
      console.log('category', category)
      if (!category) {
         return res.json({
            message: 'Không tìm thấy danh mục'
         })
      }

      return res.json(category)
   } catch (error) {
      return res.status(400).json({
         message: error
      })
   }
}
export const create = async (req, res) => {
   try {
      // validate
      const { error } = categorySchema.validate(req.body)
      if (error) {
         return res.status(400).json({
            message: error.details[0].message
         })
      }
      const category = await Category.create(req.body)
      if (!category) {
         return res.json({
            message: 'Thêm danh mục không thành công'
         })
      }
      return res.json({
         message: 'Thêm danh mục thành công',
         category
      })
   } catch (error) {
      return res.status(400).json({
         message: error
      })
   }
}
export const removeCategory = async (req, res) => {
   try {
      const { id } = req.params
      const category = await Category.findById(id)

      // Nếu tìm thấy danh mục mặc định, chuyển các sản phẩm sang danh mục đó
      const defaultCategory = await Category.findOne({ name: 'defaultCategory' })
      if (defaultCategory) {
         await Product.updateMany({ categoryId: req.params.id }, { $set: { categoryId: defaultCategory._id } })
      }

      const deleteCategory = await Category.findByIdAndDelete(id)
      return res.status(200).json({
         message: 'Xóa thành công',
         category: deleteCategory
      })
   } catch (error) {
      return res.status(400).json(error)
   }
}

export const updateCategory = async (req, res) => {
   try {
      const { error } = categorySchema.validate(req.body)
      if (error) {
         return res.status(400).json({
            message: error.details[0].message
         })
      }
      const category = await Category.updateOne({ _id: req.params.id }, req.body)
      return res.json({
         message: 'Update thành công danh mục',
         data: category
      })
   } catch (error) {
      return res.status(400).json(error)
   }
}
