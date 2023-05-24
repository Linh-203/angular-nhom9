import Cart from "../models/cart"

export const addToCart = async(req, res) => {
  const { userId, productId, quantity, price } = req.body;

  try {
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({
        userId,
        products: [],
        total: 0 // Thêm giá trị mặc định cho trường total
      });
    }
    let productIndex = cart.products.findIndex(
      (product) => product.productId === productId
    );
    if (productIndex !== -1) {
      cart.products[productIndex].quantity += quantity;
    } else {
      cart.products.push({
        productId,
        quantity: parseInt(quantity),
        price: parseInt(price) // Thêm giá tiền của sản phẩm
      });
    }
    cart.total = cart.products.reduce((total, product) => {
    console.log(product.quantity, product.price);
      return total + product.quantity * product.price;
    }, 0);
    // Lưu giỏ hàng
    await cart.save();
    return res.status(200).json({
      success: true,
      cart,
    });
  } catch (error) {
    // Bắt lỗi và trả về
    return res.status(400).json({
      message: error.message, // Sửa message error
    });
  }
}
