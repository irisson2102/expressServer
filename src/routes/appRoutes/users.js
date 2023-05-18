import express from 'express'
import User from '../../controllers/users.js'
import Validator from '../../validators/index.js'

const userRouter = express.Router()
userRouter.post('/',            Validator('postUserSchema'), User.post)
userRouter.delete('/',          Validator('patchUserSchema'), User.delete)
userRouter.patch('/overWrite',  Validator('postUserSchema'), User.overWrite)

export default userRouter