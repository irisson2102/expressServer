import bcrypt from 'bcrypt'
import dbcontext from "../../database/models/dbcontext.js"
import { SALTROUNDS } from "../../appConfig/constants.js"

export const createUser = async (user) => {
  const { nickName, email, password, birthday } = user
  try {
    const hashedPassword = await createHashPW(password)
    return await dbcontext.Users.create({ nickName, email, hashedPassword, birthday })
  } catch (error) {
    throw error
  }
}

const createHashPW = async (password) => {
  return bcrypt.hash(password, SALTROUNDS)
}