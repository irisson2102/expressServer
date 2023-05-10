import { postUserSchema } from "./users.js";

const validators = {
  postUserSchema
}

const Validator = (squema) => {
  if(!validators.hasOwnProperty(squema)) throw new Error(`'${squema}' validator is not exist`)
  return async (req, res, next) => {
    try {
      const { error, value } = await validators[squema].validate(req.body)
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