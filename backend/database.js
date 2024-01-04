const mysql = require("mysql");
const env = require("dotenv");

var con = mysql.createConnection({
    host: process.env["DB_HOSTNAME"],
    user: process.env["DB_USERNAME "],
    password: process.env["DB_PASSWORD"],

});

con.connect(function(err) {
    if (err) throw err;
    console.log("Database connected successfully!");
})