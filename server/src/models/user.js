import mongoose from "mongoose";

const auth = mongoose.Schema({
    name:String,
    email:String,
    password: String,
    role:{
        type:String,
        default:"member"
    }
})
export default mongoose.model("auth", auth)