import Joi from "joi";

export const productInCartSchema = Joi.object({
  _id: Joi.string().required(),
  name: Joi.string().required(),
  price: Joi.number().required(),
  image: Joi.string().required(),
  quantity: Joi.number().required(),
});
