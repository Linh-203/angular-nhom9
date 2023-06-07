import Products from '../models/product'
import joi from 'joi'
import Category from '../models/categories'
const validateproduct = joi.object({
   name: joi.string().required(),
   price: joi.number().required(),
   image: joi.string().required(),
   desc: joi.string().required(),
   categoryId: joi.string().required()
})

export const getAll = async (req, res) => {
   const { _page = 1, _order = 'asc', _limit = 10, _sort = 'createAt', _q = '' } = req.query
   const options = {
      page: _page,
      limit: _limit,
      sort: {
         [_sort]: _order == 'desc' ? -1 : 1
      },
      collation: { locale: 'vi', strength: 1 }
   }
   // const query = {};
   // if (q !== "") {
   //   query.name = { $regex: q, $options: "i" };
   // }
   try {
      //find().populate('categoryId')
      const optionsSearch = _q !== '' ? { $text: { $search: _q } } : {}
      const products = await Products.paginate(optionsSearch, options)
      if (products.length === 0) {
         return res.jon({
            message: 'Ko có sản phẩm'
         })
      } else {
         return res.json(products)
      }
   } catch (error) {
      return res.status(400).json({
         message: error.message
      })
   }
}

export const get = async (req, res) => {
   try {
      const products = await Products.findById(req.params.id).populate({
         path: 'categoryId',
         populate: { path: 'name' }
      })

      if (!products) {
         return res.jon({
            message: 'Ko có sản phẩm'
         })
      } else {
         return res.json(products)
      }
   } catch (error) {
      return res.status(400).json({
         message: error.message
      })
   }
}

export const create = async (req, res) => {
   try {
      const { error } = validateproduct.validate(req.body, { abortEarly: false })
      if (error) {
         return res.status(400).json({
            message: error.details[0].message
         })
      }
      const products = await Products.create(req.body)
      await Category.findByIdAndUpdate(products.categoryId, {
         $addToSet: {
            products: products._id
         }
      })
      return res.json({
         message: 'Đã thêm',
         data: products
      })
   } catch (error) {
      return res.status(400).json({
         message: error
      })
   }
}

export const update = async (req, res) => {
   try {
      const { categoryId } = req.body
      const product = await Products.findById(req.params.id)

      // Update new category
      await Category.findByIdAndUpdate(product.categoryId, {
         $pull: {
            products: product._id
         }
      })
      await Category.findByIdAndUpdate(categoryId, {
         $addToSet: {
            products: product._id
         }
      })

      // Remove product from old category

      const updatedProduct = await Products.findByIdAndUpdate(req.params.id, req.body, {
         new: true
      })

      return res.json({
         message: 'Đã update',
         data: updatedProduct
      })
   } catch (error) {
      return res.status(400).json({
         message: error
      })
   }
}

export const remove = async (req, res) => {
   try {
      const { id } = req.params

      // Remove product from category
      const product = await Products.findById(id)
      if (product.categoryId) {
         await Category.findByIdAndUpdate(product.categoryId, {
            $pull: {
               products: product._id
            }
         })
      }

      // Remove product data
      const deletedProduct = await Products.findByIdAndDelete(id)

      return res.json({
         message: 'Đã xóa',
         data: deletedProduct
      })
   } catch (error) {
      return res.status(400).json({
         message: error
      })
   }
}
