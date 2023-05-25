import jwt from "jsonwebtoken";
import User from "../models/user";
export const checkPermission = async (req, res, next) => {
    try {
        // kiểm tra xem user có đăng nhập không
        if (!req.headers.authorization) {
           res.status(400).json({
            message: "Bạn chưa đăng nhập",
           })
        }

        // lấy jwt token từ header
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, "namdeptrai", async (err, payload) => {
            if (err) {
                if (err.name === "JsonWebTokenError") {
                    return res.status(401).json({
                        message: "Bạn chưa đăng nhập !",
                        //Token không hợp lệ
                    });
                }
                if (err.name === "TokenExpiredError") {
                    
                    return res.status(402).json({
                        message: "Token hết hạn",
                    });
                }
            }
            // lấy thông tin user từ database
            const user = await User.findById(payload._id);
            // kiểm tra xem user có đủ quyền để thực hiện hành động đó không
            if (user.role != "admin") {
                return res.status(403).json({
                    message: "Bạn không có quyền để thực hiện hành động này",
                });
            }
            // lưu thông tin user vào request để sử dụng trong các middleware khác
            req.user = user;

            next();
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};