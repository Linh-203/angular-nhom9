import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'
const products = new mongoose.Schema(
   {
      name: {
         type: String,
         require: true,
         index: 'text'
      },
      price: {
         type: Number
      },
      image: {
         type: String
      },
      desc: {
         type: String
      },
      categoryId: {
         type: mongoose.Types.ObjectId,
         ref: 'Category'
      }
   },
   { timestamps: true, versionKey: false }
)
products.plugin(mongoosePaginate)
products.index({ name: 'text' })
export default mongoose.model('Products', products)
