import { postUserSchema, patchUserSchema } from "./schemas/users.js";

const validators = {
  postUserSchema,
  patchUserSchema
}

const Validator = (schema) => {
  if(!validators.hasOwnProperty(schema)) throw new Error(`'${schema}' validator is not exist`)
  return async (req, res, next) => {
    try {
      const { error, value } = await validators[schema].validate(req.body)
      if(error) res.status(400).json({
          message: 'Invalid request',
          details: error.details
      })
      req.body = value
      next()
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Internal Server Error' })
    }
  }
}

export default Validator