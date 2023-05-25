import joi from "joi";
export const signupSchema = joi.object({
    name: joi.string(),
    email: joi.string().email().required().messages({
        "string.email": "Email không hợp lệ",
        "string.empty": "Email không được để trống",
        "any.required": "Trường email là bắt buộc",
    }),
    password: joi.string().required().min(6).messages({
        "string.empty": "Password không được để trống",
        "any.required": "Trường password là bắt buộc",
        "string.min": "Password phải có ít nhất {#limit} ký tự",
    }),
    confirmPassword: joi.string().valid(joi.ref("password")).required().messages({
        "any.only": "Password không khớp",
        "string.empty": "Confirm password không được để trống",
        "any.required": "Trường confirm password là bắt buộc",
    }),
});

export const signinSchema = joi.object({
    email: joi.string().email().required().messages({
        "string.email": "Email không hợp lệ",
        "string.empty": "Email không được để trống",
        "any.required": "Trường email là bắt buộc",
    }),
    password: joi.string().required().min(6).messages({
        "string.empty": "Password không được để trống",
        "string.min": "Password phải có ít nhất {#limit} ký tự",
        "any.required": "Trường password là bắt buộc",
    }),
});