import dotenv from "dotenv";
import joi from "joi";
import Topping from "../models/topping";

dotenv.config();

const toppingSchema = joi.object({
  name: joi.string().required(),
});

export const getAll = async (req, res) => {
  try {
    const toppings = await Topping.find();
    if (!toppings) {
      return res.json({
        message: "Không tìm thấy topping",
      });
    }
    return res.json({
      message: "Lấy topping thành công",
      toppings,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
export const get = async (req, res) => {
  try {
    const topping = await Topping.findById(req.params.id);
    console.log("category", category);
    if (!topping) {
      return res.json({
        message: "Không tìm thấy danh mục",
      });
    }

    return res.json({ data: topping });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
export const create = async (req, res) => {
  try {
    // validate
    const { error } = toppingSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    const topping = await Topping.create(req.body);
    if (!topping) {
      return res.json({
        message: "Thêm danh mục không thành công",
      });
    }
    return res.json({
      message: "Thêm danh mục thành công",
      topping,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
export const remove = async (req, res) => {
  try {
    const topping = await Topping.deleteOne({ _id: req.params.id });
    return res.status(200).json({
      message: "Xóa thành công",
      data: topping,
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const update = async (req, res) => {
  try {
    const { error } = toppingSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }
    const topping = await Topping.updateOne({ _id: req.params.id }, req.body);
    return res.json({
      message: "Update thành công danh mục",
      data: topping,
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};
