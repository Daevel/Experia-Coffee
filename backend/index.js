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

app.get("/api/retrieveData", function (req, res) {
    let payloadData = [
        {
            "name": "luigi",
            "surname": "avitabile",
        },
        {
            "name": "luigi",
            "surname": "d'ausilio",
        },
        {
            "name": "luigi",
            "surname": "iannace",
        }
    ]
    res.json(payloadData);
    return res.send(payloadData);
})

app.get("/api/connect", function (req, res) {
    con = mysql.createConnection(mysqlConfig);
    con.connect(function (err) {
        if (err) throw err;
        res.send("connected");
    });
});

app.get("/api/will", function (req, res) {
    res.send('{"response": "Hello world"}');
})

app.get("/api/ready", function (req, res) {
    res.send('{"response": "Great!, It works!"}');
})

app.get("/api/userList", function (req,res) {
    con.connect(function(err ) {
        if (err) throw err;
        const sql = "SELECT * FROM tbl_utente";
        con.query(sql, function(err, result, fields) {
            if (err) throw err;
            res.send(JSON.stringify(result));
        });
    });
});

app.listen(3000);
console.log("listening on 3000");
