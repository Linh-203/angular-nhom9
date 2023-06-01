import FavoriteProducts from "../models/favorite"
import joi from "joi"
const validated = joi.object({
  idUser:joi.string().required(),
  idProduct:joi.string().required(),
})
export const getAllFavorite = async(req ,res)=>{
  try {
    const favoriteProduct = await FavoriteProducts.find()
    return res.status(201).json({
        message :"Lấy thành công danh sách ",
        favoriteProduct
    })
  } catch (error) {
    return res.status(404).json({
        message: error.message
    })
  }
}
export const createFavorite= async(req ,res)=>{
  try {
    const {error} = validated.validate(req.body, {abortEarly:false});
    if(error){
      return res.status(403).json({
        message: error.details.map(err => err.message)
      })
    }
    const favoriteProduct = await FavoriteProducts.create(req.body)
    if(favoriteProduct){
    return res.status(201).json({
        message :"Thêm thành công sản phẩm yêu thích  ",
        favoriteProduct
    })
  }
  return res.status(401).json({
    message: "Thêm thất bại"
  })
  } catch (error) {
    return res.status(404).json({
        message: error.message
    })
  }
}
export const getFavoriteIP = async(req ,res)=>{
  
  try {
    const {id} = req.params
    console.log(req.params);
    const favoriteProduct = await FavoriteProducts.find({idProduct:id})
    if(favoriteProduct.length>0){
    return res.status(201).json({
        message :"Lấy thành công sản phẩm yêu thích theo id sp ",
        favoriteProduct
    })
  }
  return res.status(204).json({
    message: "Ko tìm thấy sp"
  })
  } catch (error) {
    return res.status(404).json({
        message: error.message
    })
  }
}
export const getFavoriteIU = async(req ,res)=>{
  const { _order="asc",  _sort="createAt"} = req.query
  const options={
   
    sort:{
      [_sort]:_order == "desc" ? -1 : 1,
    },

  }
  try {
    const {id} = req.params
    console.log(req.params);
    const favoriteProduct = await FavoriteProducts.find({idUser:id}).populate({ path: 'idProduct',
    select: 'name price image ',})
    if(favoriteProduct){
    return res.status(201).json({
        message :"Lấy thành công sản phẩm yêu thích theo id user ",
        favoriteProduct
    })
  }
 
  } catch (error) {
    return res.status(404).json({
        message: error.message
    })
  }
}
export const removeFavorite = async(req ,res)=>{
  try {
    const {idUser} = req.params
    const {idProduct} = req.params
    console.log(req.params);
    const favoriteProduct = await FavoriteProducts.findByIdAndDelete(req.params.id)
    
    if(favoriteProduct){
    return res.status(201).json({
        message :"Xóa thành công sản phẩm yêu thích ",
        
    })
  }
  return res.status(205).json({
    message: "Xóa thất bại"
  })
  } catch (error) {
    return res.status(404).json({
        message: error.message
    })
  }
}




