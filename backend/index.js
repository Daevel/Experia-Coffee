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
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
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
    try {
        con.connect(function(err ) {
            if(err) throw err;
            const sql = authQuery;
            con.query(sql, [username, password], function(err, result) {
                if (err) {
                    console.error("Errore durante l'esecuzione della query", err);
                    res.status(500).json({ error: "Errore interno del server"});
                } else {
                    console.log(result);
                    res.json(result);
                }
            });
        })
    } catch (err) {
        console.error("Errore durante la connessione al database:", err);
        res.status(500).json({ error: "Errore interno del server"});
    } finally {
        con.end(() => {
            console.log("Connection closed");
        });
    }
})

const authQuery = "SELECT EMAIL, UTENTE_PASSWORD FROM tbl_cliente WHERE EMAIL = ? AND UTENTE_PASSWORD = ?";

app.listen(3000, () => {
    console.log(`Listening on port 3000`);
});
