import { Sequelize } from "sequelize";

const MeetUsers = ( sequelize ) => {
  const meetUser = sequelize.define('MeetUsers', {
    id: {
      primaryKey: true,
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.DataTypes.UUIDV4,
      allowNull: false
    },
    leaveAt: {
      type: Sequelize.DataTypes.DATE,
      allowNull: true
    },
    isActve: {
      type: Sequelize.DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    }
  })

  return meetUser
}

export default MeetUsers