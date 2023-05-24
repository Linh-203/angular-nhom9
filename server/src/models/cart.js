import mongoose from 'mongoose'

const cartSchema = new mongoose.Schema({
   userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
   },
   products: [
      {
         productId: String,
         name: String,
         price: Number,
         image: String,
         quantity: Number
      }
   ],
   totalAmount: Number
})

export default mongoose.model('cart', cartSchema)
