import mongoose from "mongoose";
const commentSchema = mongoose.Schema({
   idUser: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'auth', 
    required: true,
  },
  idProduct: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Products', 
    required: true,
  },
  
  content: {
    type: String,
    required: true,
  },
  
},
{ timestamps: true, versionKey: false }
)

 export default mongoose.model('Comment', commentSchema);
