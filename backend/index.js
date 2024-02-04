const express = require("express");
const mysql = require('mysql');
const app = express();
const port = require("dotenv");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'experia_coffee',
});

connection.connect();

app.get("/", function (req, res) {
    res.send('{ "response": "Hello from Tech web daevel"}');
})

app.get("/will", function (req, res) {
    res.send('{"response": "Hello world"}');
})

app.get("/ready", function (req, res) {
    res.send('{"response": "Great!, It works!"}');
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});

module.exports = app;
