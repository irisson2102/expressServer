let islocal = process.env.ISLOCAL || true
const config = islocal ? {
  user: "root",
  password: "irissonMS2102",
  server: "localhost",
  database: "imix_local",
  dialect: 'mysql',
  port: 3306,
  encrypt: true,
  reset: "FORCE",
  pool:{
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 1000
  }
} : {
  user: "dev",
  password: "Pass.word1",
  server: "AnAwsServer",
  database: "imix_local",
  dialect: 'mysql',
  port: 3306,
  encrypt: true,
  pool:{
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 1000
  }
}

export default config