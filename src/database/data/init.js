import bcrypt from 'bcrypt'
import _USERS from './initUsers.js'
import config from '../config/config.js'
import { SALTROUNDS } from '../../appConfig/constants.js'

const userIterator = async(user) => {
  const newUser = { ...user }
  const hashedPassword = await bcrypt.hash(user.password, SALTROUNDS)
  newUser.hashedPassword = hashedPassword
  delete newUser.password
  return newUser
}


const dataInit = async ({
  Users
}) => {
  if(config.reset == 'FORCE'){
    for (const iterator of _USERS) {
      await Users.create(await userIterator(iterator))
    }
    console.log('Database populated!')
  }
}

export default dataInit