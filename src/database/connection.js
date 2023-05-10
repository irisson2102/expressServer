import { Sequelize } from "sequelize";
import config from "./config/config.js";

const sequelize = new Sequelize({
  username: config.user,
  password: config.password,
  database: config.database,
  host: config.server,
  encrypt: config.encrypt,
  port: config.port,
  dialect: config.dialect,
  pool: config.pool
})

export default sequelize

