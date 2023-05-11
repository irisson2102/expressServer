import { createUser } from './utils/userUtils.js'
const User = {}

User.post = async (req, res, next) => {
  const response = {
    status: 200,
    message: 'User created successfully'
  }
  try {
    const { id, email, nickName } = await createUser (req.body)
    response.details = { id, email, nickName }
  } catch (error) {
    if ( error.name === 'SequelizeUniqueConstraintError'){
      response.status = 400
      response.message = 'User already exist'   
    } else {
      response.status = 500
      response.message = 'Internal Server Error'
      console.log(error)
    }
  }
  res.locals.response = response
  next()
}

export default User

