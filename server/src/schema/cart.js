import Joi from 'joi'

export const optionsCartSchema = Joi.object({
   quantity: Joi.number().required(),
   options: Joi.object({
      size: Joi.string(),
      ice: Joi.string(),
      sugar: Joi.string()
   })
})
