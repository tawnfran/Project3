require("dotenv").config();
module.exports = {
  development: {
    username: "root",
    password: process.env.MYSQLPASS,
    database: "guestlistdb",
    host: "localhost",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: "password",
    database: "guestlistdb",
    host: "localhost",
    dialect: "mysql",
    logging: false
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
  }
};


//process.env.MYSQL_PASSWORD