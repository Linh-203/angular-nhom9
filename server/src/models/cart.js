import mongoose from "mongoose";
const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'auth',
    required: true,
  },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products',
        required: true,
      },
      quantity: {
        type: Number,
        default: 1,
      },
      price:{
        type: Number,
        required:true
      }
    },
  ],
  total: {
    type: Number,
    default: 0,
  },
},
{timestamps:true, versionKey:false});

export default mongoose.model('Cart', cartSchema);
