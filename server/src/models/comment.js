import mongoose from "mongoose";
const commentSchema = mongoose.Schema({
   idUser: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'auth', // Nếu bạn muốn liên kết với 1 collection khác, thí dụ là Post
    required: true,
  },
  idProduct: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Products', // Nếu bạn muốn liên kết với 1 collection khác, thí dụ là Post
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
