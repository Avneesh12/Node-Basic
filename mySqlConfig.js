const mysql = require("mysql2");

const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root123",
    database:"av"
})

conn.connect();


module.exports = conn;