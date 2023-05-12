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

export const userExist = async ({ email }) => {
  const resp = { newUser: true }
  const match = await dbcontext.Users.findAll({
    where: {
      email,
      deleted: false,
    },
    attributes: ['isActive']
  })
  console.log('match: ', match)
  if(match.length > 0) {
    resp.newUser = false
    resp.isActive = match[0].dataValues.isActive
  }
  return resp
}

const createHashPW = async (password) => {
  return bcrypt.hash(password, SALTROUNDS)
}