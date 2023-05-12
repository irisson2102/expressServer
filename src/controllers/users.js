import { createUser, userExist } from './utils/userUtils.js'

const User = {}

User.post = async (req, res, next) => {
  const response = {
    status: 200,
    message: 'User created successfully'
  }
  try {
    const { newUser, isActive } = await userExist(req.body)
    if ( !newUser ) {
      response.status = 400
      response.message = 'User already exist'
      response.details = { isActive }
    } else {
      const { id, email, nickName } = await createUser (req.body)
      response.details = { id, email, nickName }
    }
  } catch (error) {
    response.status = 500
    response.message = 'Internal Server Error'
    console.log(error)
  }
  res.locals.response = response
  next()
}

export default User

