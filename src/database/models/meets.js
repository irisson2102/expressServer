import { Sequelize } from "sequelize"

const Meets = (sequelize) => {
  const meet =sequelize.define('Meets', {
    id: {
      primaryKey: true,
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.DataTypes.UUIDV4,
      allowNull: false
    },
    description: {
      type: Sequelize.DataTypes.STRING,
      allowNull: true,
    }
  })

  return meet
}

export default Meets