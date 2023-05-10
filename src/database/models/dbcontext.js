import sequelize from '../connection.js'
import Users from './users.js'

const dbcontext = {
  Users: Users(sequelize)
}

export default dbcontext