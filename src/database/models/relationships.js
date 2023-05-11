const relationships = (dbcontext) => {
  const { Users, Meets, MeetUsers } = dbcontext

  Users.hasMany(Meets)
  Meets.belongsTo(Users)

  Users.belongsToMany(Meets, { through: MeetUsers })
  Meets.belongsToMany(Users, { through: MeetUsers })
}

export default relationships