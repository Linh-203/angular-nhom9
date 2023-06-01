import Comment from "../models/comment"

 export const createComment= async(req,res)=>{

  const { idProduct, content, idUser } = req.body;
  try {
    const comment = await Comment.create(req.body);
    return res.status(200).json({
      message:"Comment created",
      comment,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
}


// // Cập nhật nội dung bình luận
 export const updateComment=async(req,res)=>{
  const { id } = req.params;
  const { content } = req.body;

  try {
  const comment =  await Comment.findByIdAndUpdate(id, {content },{
    new:true
  });

    return res.status(200).json({
      message: 'Cập nhật thành công comment',
      comment
    });
  } 
  catch (error) {
    res.status(400).json({
      message: error,
    });
  }
}

// // Xóa một bình luận
  export const removeComment= async(req,res)=>{
  const { id } = req.params;
  try {
    await Comment.findByIdAndRemove(id);
    return res.status(200).json({
      message: 'Xóa thành comment thành công',
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
}

export const getCommentFromProduct = async (req, res) => {
  const { idProduct } = req.params;
  try {
    const comment = await Comment.find({ idProduct: idProduct }).populate({
      path: 'idUser',
      select: 'name email',
    });
    if (!comment) {
      return res.status(404).json({
        message: 'Không tìm thấy bình luận',
      });
    }
    return res.status(200).json({
      message: 'Lấy thành công comment',
      comment,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};



 export const getOneComment=async (req,res)=>{
  const { id } = req.params;

  try {
    const comment = await Comment.findById(id);
    if (!comment) {
      return res.status(404).json({
        message: 'Không tìm thấy bình luận',
      });
    }
    return res.status(200).json({
     message:"Lấy thành công comment",
     comment,
    });
  }
  catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
}


