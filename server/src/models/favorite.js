import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const favoriteProductSchema = new mongoose.Schema({
  idProduct:{
    type:String,
    ref:"Products",
    required:true
  },
  
    idUser:{
        type:String,
        ref:"auth",
        required:true
    }
  
},{timestamps:true, versionKey:false})
favoriteProductSchema.plugin(mongoosePaginate)
export default mongoose.model("favoriteProducts", favoriteProductSchema)