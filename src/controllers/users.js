import {
  userExist,
  createUser,
  eraseUser, 
  deleteUser 
} from './utils/userUtils.js'
import { handleServiceError } from './utils/generalUtils.js'

const User = {}

User.post = async (req, res, next) => {
  let response = {
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
    response = handleServiceError(error)
  }
  res.locals.response = response
  next()
}

User.overWrite = async (req, res, next) => {
  let response = {
    status: 200,
    message: 'User overwrited successfully'
  }
  try {
    const { newUser, isActive } = await userExist(req.body)
    if ( !newUser && isActive ) {
      response.status = 400
      response.message = 'User is active'    
    } else if ( !newUser && !isActive ) {
      await eraseUser(req.body)
      const { id, email, nickName } = await createUser (req.body)
      response.details = { id, email, nickName }
    } else {
      response.status = 400
      response.message = 'User not found'
    }
  } catch (error) {
    response = handleServiceError(error)
  }
  res.locals.response = response
  next()
}

User.delete = async (req, res, next) => {
  let response = {
    status: 200,
    message: 'User deleted successfully'
  }
  try {
    const { newUser, isActive } = await userExist(req.body)
    if(newUser || (!newUser && !isActive)){
      response.status = 400
      response.message = 'User not found' 
    } else {
      await deleteUser(req.body)
    }
  } catch (error) {
    response = handleServiceError(error)
  }
  res.locals.response = response
  next()
}


export default User

