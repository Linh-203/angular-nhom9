import Joi from "joi";

export const productSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  images: Joi.string().required(),
  description: Joi.string().required(),
  inventoryCount: Joi.number().required(),
  categories: Joi.array().required(),
});
