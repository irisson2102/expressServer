import { Sequelize } from 'sequelize'

const Users = (sequelize) => {
  const user = sequelize.define('Users', {
    id: {
      primaryKey: true,
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.DataTypes.UUIDV4,
      allowNull: false
    },
    nickName: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    },
    hashedPassword:{
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
    isActive: {
      type: Sequelize.DataTypes.BOOLEAN,
      defaultValue: true,
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