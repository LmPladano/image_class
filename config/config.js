module.exports = 
{
  "development": {
    "username": "root",
    "password": null,
    "database": "image_class",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOSTNAME,
    "dialect": "postgres",
    "operatorsAliases": false
  }
}
