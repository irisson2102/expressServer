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

export const eraseUser = async ({ email }) => {
  try {
    const resp = await dbcontext.Users.update({
      deleted: true
    },{
      where:{
        email,
        isActive: false,
        deleted: false,
      }
    })
    if(resp[0] !== 1) throw Error(`${resp} updated elements`)
  } catch (error) {
    throw error
  }
}

export const deleteUser = async ({ email }) => {
  try {
    const resp = await dbcontext.Users.update({
      isActive: false
    },{
      where:{
        email,
        isActive: true,
        deleted: false,
      }
    })
    if(resp[0] !== 1) throw Error(`${resp} updated elements`)
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