import mysql2 from 'mysql2'

import config from "../config/config.js"
import sequelize from '../connection.js'
import dbcontext from '../models/dbcontext.js'
import dataInit from './init.js'

const createDatabase = async () => {
  if(config.reset == 'FORCE'){
    let conf = {
      user: config.user,
      password: config.password,
      host: config.server,
      port: config.port
    };
    try {
      const connection = await sql.createConnection(conf);
      await connection.execute(
        `DROP DATABASE IF EXISTS ${config.database};`
      );
      console.log(`Database ${config.database} dropped!`);
      await connection.execute(`CREATE DATABASE ${config.database};`);
      console.log(`Database ${config.database} created!!!`);
      connection.end()
    } catch (error) {
      console.log(error)
    }
  }
}

(async () => {
  try {
    await createDatabase()
    await sequelize.authenticate()
    await sequelize.sync({ force: true })
    await dataInit(dbcontext) // populate database
  } catch (error) {
    console.log(error)
  }
})()
