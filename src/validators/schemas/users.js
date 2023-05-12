import Joi from 'joi'

export const postUserSchema = Joi.object({
  nickName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  birthday: Joi.string().isoDate().required()
})