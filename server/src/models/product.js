import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const products = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
    },
    image: {
      type: String,
    },
    desc: {
      type: String,
    },
    categoryId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
      },
    ],
  },
  { timestamps: true, versionKey: false }
);
products.plugin(mongoosePaginate);
export default mongoose.model("Products", products);