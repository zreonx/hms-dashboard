const mysql = require("mysql");

// const db = mysql.createConnection({
//   user: "root",
//   host: "localhost",
//   password: "",
//   database: "hms_db",
// });

const db = mysql.createConnection({
  user: "u2iyzn4u9hehje7v",
  host: "b17tszdyhmsbpfychrsz-mysql.services.clever-cloud.com",
  password: "afycYYAfJYaSvfdT07Ls",
  database: "b17tszdyhmsbpfychrsz",
  port: 3306,
});

module.exports = db;
