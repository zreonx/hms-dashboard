const mysql = require("mysql");
const fs = require("fs");
const path = require("path");

// const db = mysql.createConnection({
//   user: "root",
//   host: "localhost",
//   password: "",
//   database: "hms_db",
// });

const dbServerConnection = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
});

dbServerConnection.connect((err) => {
  if (err) {
    console.error("Error connecting to the MySQL server:", err);
    return;
  }
  console.log("Connected to the MySQL server");

  dbServerConnection.query(
    "CREATE DATABASE IF NOT EXISTS hms_db",
    (err, result) => {
      if (err) {
        console.error("Error creating database:", err);
        return;
      }
      console.log("Database created or already exists");

      const db = mysql.createConnection({
        user: "root",
        host: "localhost",
        password: "",
        database: "hms_db",
      });

      db.connect((err) => {
        if (err) {
          console.error("Error connecting to the hms_db database:", err);
          return;
        }

        console.log("Connected to the hms_db database");

        const sqlFilePath = path.join(__dirname, "hms_db.sql");

        fs.readFile(sqlFilePath, "utf8", (err, data) => {
          if (err) {
            console.error("Error reading the .sql file:", err);
            return;
          }

          // Split the SQL file content into individual statements
          const sqlStatements = data
            .split(";")
            .map((stmt) => stmt.trim())
            .filter((stmt) => stmt);

          // Execute each SQL statement sequentially
          (async () => {
            for (const statement of sqlStatements) {
              try {
                await new Promise((resolve, reject) => {
                  db.query(statement, (err, results) => {
                    if (err) {
                      return reject(err);
                    }
                    resolve(results);
                  });
                });
                console.log("Executed:", statement);
              } catch (error) {
                console.error("Error executing statement:", statement, error);
              }
            }

            // Close the database connection
            db.end((err) => {
              if (err) {
                console.error("Error closing the database connection:", err);
                return;
              }
              console.log("Database connection closed");
            });
          })();
        });
      });
    }
  );
});

