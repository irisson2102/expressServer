import { Sequelize } from 'sequelize'

const Users = (sequelize) => {
  const user = sequelize.define('Users', {
    uuid: {
      type: Sequelize.DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.DataTypes.UUIDV4
    },
    nickName: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    hashPassword:{
      type: Sequelize.DataTypes.STRING(60),
      allowNull: false
    },
    birthday: {
      type: Sequelize.DataTypes.DATE,
      allowNull: false
    },
    isVerified: {
      type: Sequelize.DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    deleted: {
      type: Sequelize.DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    }
  })

  return user
}

export default Users