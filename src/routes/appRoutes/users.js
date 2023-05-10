import express from 'express'
import User from '../../controllers/users.js'

const userRouter = express.Router()
userRouter.post('/', User.post)

export default userRouter