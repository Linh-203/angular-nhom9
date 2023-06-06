import Joi from 'joi'

export const productInCartSchema = Joi.object({
   productId: Joi.string().required(),
   name: Joi.string().required(),
   price: Joi.number().required(),
   image: Joi.string().required(),
   options: Joi.object().required(),
   quantity: Joi.number().required()
})
