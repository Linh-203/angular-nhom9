import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  size: [
    {
      nameSize: String,
    },
  ],
  categories: [
    {
      type: mongoose.Types.ObjectId,
      ref: "category",
    },
  ],
  image: String,
  desc: String,
  inventoryCount: Number,
});
productSchema.plugin(mongoosePaginate);
export default mongoose.model("product", productSchema);
