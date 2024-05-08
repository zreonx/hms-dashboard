const mysql = require("mysql");

// const db = mysql.createConnection({
//   user: "root",
//   host: "localhost",
//   password: "",
//   database: "hms_db",
// });

const db = mysql.createConnection({
  user: process.env.USER,
  host: process.env.HOST,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.PORT,
});

module.exports = db;
