const dotenv = require("dotenv").config();
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

connection.query("SELECT * FROM `epytodo`", function (err, results, fields) {
    console.log({ results });
});

module.exports = connection;