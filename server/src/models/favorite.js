import mongoose from "mongoose";

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
export default mongoose.model("favoriteProducts", favoriteProductSchema)