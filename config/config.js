module.exports = 
{
  development: {
    username: " ",
    password: null,
    database: " ",
    host: "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: false
  },

    production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: "postgres",
    operatorsAliases: false
  }
}
