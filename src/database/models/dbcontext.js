import sequelize from '../connection.js'
import Users from './users.js'
import Meets from './meets.js'
import MeetUsers from './meetUsers.js'
import relationships from './relationships.js'

const dbcontext = {
  Users: Users(sequelize),
  Meets: Meets(sequelize),
  MeetUsers: MeetUsers(sequelize),
}

relationships(dbcontext)



export default dbcontext