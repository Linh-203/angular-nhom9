import auth from '../models/user'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
export const SinUp = async (req, res) => {
   try {
      const { name, email, password } = req.body
      const checkMail = await auth.findOne({ email })
      if (checkMail) {
         return res.status(201).json({
            message: 'Email đã tồn tại'
         })
      } else {
         const defaultAvatar =
            'https://res.cloudinary.com/diqyzhuc2/image/upload/v1683285518/hoaUi/icon_sacea8-removebg_gkhuzj.png'
         const mh = await bcrypt.hash(password, 10)
         const users = await auth.create({ ...req.body, password: mh, defaultAvatar })

         const token = jwt.sign({ _id: users._id }, 'namdeptrai', { expiresIn: '2h' })

         return res.json({
            message: 'Đăng ký thành công',
            data: users,
            token: token
         })
      }
   } catch (error) {}
}
export const signIn = async (req, res) => {
   try {
      const { email, password } = req.body
      const users = await auth.findOne({ email })
      if (!users) {
         return res.status(201).json({
            message: 'Tài khoản ko tồn tại'
         })
      } else {
         const check = await bcrypt.compare(password, users.password)
         console.log('data:', users.password)
         console.log('body:', password)
         if (!check) {
            return res.status(201).json({
               message: 'Mật khẩu ko đúng'
            })
         } else {
            const mh = await bcrypt.hash(users.password, 10)

            const token = jwt.sign({ _id: users._id }, 'namdeptrai', { expiresIn: '2h' })
            users.password = undefined
            return res.json({
               message: 'Đăng nhập thành công',
               data: users,
               token: token
            })
         }
      }
   } catch (error) {}
}
