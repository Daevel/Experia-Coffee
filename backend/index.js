const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const mysqlConfig = {
    host: "mysql_server",
    user: "daevel",
    password: "password",
    database: "experia_coffee",
    insecureAuth: true
}
const app = express();

app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get("/", function (req, res) {
    res.send("Hello world");
})

// DB CONN
app.get("/api/connect", function (req, res) {
    con = mysql.createConnection(mysqlConfig);
    con.connect(function (err) {
        if (err) throw err;
        res.send("connected");
    });
});

// USER TASKS
app.get("/api/userList", function (req,res) {
    con.connect(function(err ) {
        if (err) throw err;
        const sql = "SELECT * FROM tbl_cliente;";
        con.query(sql, function(err, result, fields) {
            if (err) throw err;
            console.log(result);
            res.send(JSON.stringify(result));
        });
    });
});

// AUTH API
app.post("/api/auth", function(req, res) {
    const { username, password } = req.body;
    con.connect(function(err ) {
        if(err) throw err;
        const sql = "SELECT EMAIL, UTENTE_PASSWORD FROM tbl_cliente;";
        con.query(sql, function(err, result) {
            if (err) throw err;
            console.log(result);
            res.send(JSON.stringify(result));
        })
    })
})

app.listen(3000);
console.log("listening on 3000");
