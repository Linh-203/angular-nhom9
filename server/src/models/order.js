import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "auth",
      required: true,
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Products",
          required: true,
        },
        quantity: {
          type: Number,
          default: 1,
        },
        priceRealtime: {
          type: Number,
          required: true,
        },
        topping: [
          {
            topppingId: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Toppings",
              required: true,
            },
            ratio: Number,
          },
        ],
      },
    ],
    total: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true, versionKey: false }
);
cartSchema.plugin(mongoosePaginate);
export default mongoose.model("Cart", orderSchema);
