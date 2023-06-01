import mongoose from 'mongoose'

const auth = mongoose.Schema({
   name: String,
   email: String,
   password: String,
   role: {
      type: String,
      default: 'member'
   },
   defaultAvatar: String,
   avatar: String
})
export default mongoose.model('auth', auth)
