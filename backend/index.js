const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const {json} = require("express");

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
        if (err) {
            res.status(500).send({message: "Errore di connessione al database"});
        }
        res.status(200).send({message: "connected"});
    });
});

// USER TASKS
app.get("/api/userList", function (req,res) {
    con.connect(function(err) {
        if (err) throw err;
        const sql = "SELECT * FROM tbl_cliente;";
        con.query(sql, function(err, result, fields) {
            if (err) throw err;
            console.log(result);
            res.send(JSON.stringify(result));
        });
    });
});

// VIEW USER INFO
app.post("/api/viewUser", function(req, res) {
    const { username } = req.body;
    try {
        con.connect(function(err) {
            if (err) throw err;
            const dataProfileQuery = username.includes("@experiacoffee.it") ? dipendenteProfileQuery : clienteProfileQuery;
            con.query(dataProfileQuery, [username], function(err, result) {
                if (result.length === 0) {
                    res.status(404).send({ message: "Utente non trovato"});
                }
                res.status(200).json(result);
            })
        })
    } catch (err) {
        res.status(500).send({message: "Errore di connessione al database"});
    }
})

app.post("/api/changeEmail", function(req, res) {
    const { newEmail, oldEmail } = req.body;
    try {
        con.connect(function(err) {
            if (err) {
                console.error("Errore di connesione al database", err);
                res.status(500).json({ error: "Errore interno del server"});
                return;
            }
            con.query(changeEmailQuery, [newEmail, oldEmail], function(err, result) {
                if (err) {
                    console.error("Errore durante l'esecuzione della query", err);
                    res.status(500).json({ error: "Errore interno del server" });
                    return;
                }

                if (result.affectedRows === 0) {
                    res.status(404).send({ message: "Utente non modificato"});
                    return;
                }
                res.status(200).json({ message: "Utente modificato con successo"});
            })
        })
    } catch (err) {
        console.error("Errore generale:", err);
        res.status(500).json({ error: "Errore interno del server" });
    }
})

app.post("/api/changePassword", function(req, res) {
    const { password, email } = req.body;
    try {
        con.connect(function(err) {
            if (err) throw err;
            con.query(changePasswordQuery, [password, email], function(err, result) {
                if (err) {
                    console.error("Errore durante l'esecuzione della query", err);
                    res.status(500).json({ error: "Errore interno del server" });
                    return;
                }

                if (result.affectedRows === 0) {
                    res.status(404).send({ message: "Password non modificata"});
                    return;
                }
                res.status(200).json({ message: "Password modificata con successo"});
            })
        })
    } catch (err) {
        res.status(500).send({message: "Errore di connessione al database"});
    }
})

app.post("/api/createOrder", function(req, res) {
    const { email, cartID } = req.body;
    try {
        con.connect(function(err) {
            if (err) throw err;
            con.query(createOrderQuery, [cartID, email, email], function(err, result) {
                if (result.rowsAffected === 0) {
                    res.status(404).send({ message: "Password non modificata"});
                }
                res.status(200).json(result);
            })
        })
    } catch (err) {
        res.status(500).send({message: "Errore di connessione al database"});
    }
})

app.put("/api/updateOrder", function(req, res) {
    const { numeroOrdine, statoOrdine, filialeInCarico, corriereInCarico, idOrdine } = req.body;
    try {
        con.connect(function(err) {
            if (err) throw err;
            con.query(updateOrderQuery, [numeroOrdine, statoOrdine, filialeInCarico, corriereInCarico, idOrdine], function(err, result) {
                if (result.rowsAffected === 0) {
                    res.status(404).send({ message: "Password non modificata"});
                }
                res.status(200).json(result);
            })
        })
    } catch (err) {
        res.status(500).send({message: "Errore di connessione al database"});
    }
})

app.delete("/api/deleteOrder", function(req, res) {
    const { idOrdine } = req.body;
    try {
        con.connect(function(err) {
            if (err) throw err;
            con.query(deleteOrderQuery, [idOrdine], function(err, result) {
                if (result.rowsAffected === 0) {
                    res.status(404).send({ message: "Password non modificata"});
                }
                res.status(200).json(result);
            })
        })
    } catch (err) {
        res.status(500).send({message: "Errore di connessione al database"});
    }
})

app.post("/api/getOrderListByClient", function(req, res) {
    const { email } = req.body;
    try {
        con.connect(function(err) {
            if (err) throw err;
            con.query(orderListByClientQuery, [email], function(err, result) {
                if (result.rowsAffected === 0) {
                    res.status(404).send({ message: "Password non modificata"});
                }
                res.status(200).json(result);
            })
        })
    } catch (err) {
        res.status(500).send({message: "Errore di connessione al database"});
    }
})

app.get("/api/getOrderList", function(req, res) {
    try {
        con.connect(function(err) {
            if (err) throw err;
            con.query(orderListQuery, function(err, result) {
                if (result.rowsAffected === 0) {
                    res.status(404).send({ message: "Password non modificata"});
                }
                res.status(200).json(result);
            })
        })
    } catch (err) {
        res.status(500).send({message: "Errore di connessione al database"});
    }
})

app.get("/api/getWarehouseList", function(req, res) {
    try {
        con.connect(function(err) {
            if (err) throw err;
            con.query(warehouseListQuery, function(err, result) {
                if (result.rowsAffected === 0) {
                    res.status(404).send({ message: "Password non modificata"});
                }
                res.status(200).json(result);
            })
        })
    } catch (err) {
        res.status(500).send({message: "Errore di connessione al database"});
    }
})


// AUTH API
app.post("/api/auth", function(req, res) {
    const { username, password } = req.body;
    try {
        con.connect(function(err) {
            if(err) throw err;
            // check intermedio per controllare se si tratta di un dipendente oppure un cliente
            const authQuery = username.includes("@experiacoffee.it") ? dipendenteAuthQuery : clienteAuthQuery;
            con.query(authQuery, [username, password], function(err, result) {
                if (result.length === 0) {
                    res.status(404).send({message: "Credenziali utenti errate."});
                }
                res.status(200).send({username: username, password: password});
            });
        })
    } catch (err) {
        res.status(500).send({message: "Errore di connessione al database"});
    }
});

// SIGNUP API
app.post("/api/signUp", function(req,res) {
    const body = req.body;

    try {
        con.connect(function(err) {
            if(err)
                throw err;
            con.query(signupQuery, [body.NOME, body.COGNOME, body.EMAIL, body.CELLULARE, body.CITTA, body.VIA, body.N_CIVICO, body.CAP, body.UTENTE_PASSWORD, body.NUM_CARTA, body.CVV_CARTA, body.INTESTATARIO_CARTA, body.SCADENZA_CARTA, body.CODICE_FISCALE, body.DATA_DI_NASCITA], function(err, result) {
                if(err) {
                    console.error("Errore durante l'esecuzione della query", err);
                    res.status(500).json({error: "Errore interno del server"});
                } else {
                    res.status(200).json(result);
                }
            })
        })
    } catch (err) {
        console.error("Errore durante la connessione al database:", err);
        res.status(500).json({ error: "Errore interno del server"});
    }
});

app.get("/api/getProductList", function(req, res, next) {
    const body = req.body;
    try {
        con.connect(function(err) {
            if(err) throw err;
            con.query(getMarketListQuery, function(err, result) {
                if (err) {
                    console.error("Errore nella query:", err);
                    res.status(500).json({error: "Errore interno del server"});
                } else {
                    res.status(200).json(result);
                }
            });
        })
    } catch (err) {
        res.status(500).json({error: "Errore interno del server"});
    }
})

const clienteAuthQuery = "SELECT EMAIL, UTENTE_PASSWORD FROM `tbl_cliente` WHERE EMAIL = ? AND UTENTE_PASSWORD = ?";
const dipendenteAuthQuery = "SELECT EMAIL, UTENTE_PASSWORD FROM `tbl_dipendente` WHERE EMAIL = ? AND UTENTE_PASSWORD = ?";
const signupQuery = "INSERT INTO `tbl_cliente` (`NOME`, `COGNOME`, `EMAIL`,`CELLULARE`, `CITTA`, `VIA`,`N_CIVICO`, `CAP`, `UTENTE_PASSWORD`, `NUM_CARTA`, `CVV_CARTA`, `INTESTATARIO_CARTA`, `SCADENZA_CARTA`, `CODICE_FISCALE`, `DATA_DI_NASCITA`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
const getMarketListQuery = "SELECT * FROM `tbl_prodotto` ORDER BY NOME_PRODOTTO ASC";
const clienteProfileQuery = "SELECT * FROM tbl_cliente WHERE EMAIL = ?";
const dipendenteProfileQuery = "SELECT * FROM tbl_dipendente WHERE EMAIL = ?";
const changeEmailQuery = "UPDATE tbl_cliente SET EMAIL = ? WHERE EMAIL = ?";
const changePasswordQuery = "UPDATE tbl_cliente SET UTENTE_PASSWORD = ? WHERE EMAIL = ?";
const createOrderQuery = "INSERT INTO tbl_ordine (ID_ORDINE, FATTURA, NUMERO_ORDINE, ID_CARRELLO, INDIRIZZO_SPEDIZIONE) VALUES (?, 'EMPTY', 0, (SELECT ID FROM tbl_carrello WHERE EMAIL_CLIENTE = ?), (SELECT VIA FROM tbl_cliente WHERE EMAIL = ?))";
const updateOrderQuery = "UPDATE tbl_cliente c JOIN tbl_carrello ca ON c.EMAIL = ca.EMAIL_CLIENTE JOIN tbl_ordine o ON ca.ID = o.ID_CARRELLO JOIN tbl_gestito_da gda ON o.ID_ORDINE = gda.CODICE_ORDINE JOIN tbl_filiale f ON gda.ID_FILIALE = f.CODICE_ZONA_FILIALE JOIN tbl_emette_spedizione ems ON f.CODICE_ZONA_FILIALE = ems.CODICE_ZONA_FILIALE JOIN tbl_spedizione s ON ems.NUMERO_TRACCIAMENTO = s.NUMERO_TRACCIAMENTO JOIN tbl_corriere cor ON cor.P_IVA = s.P_IVA_CORRIERE SET o.NUMERO_ORDINE = ?, o.STATO_ORDINE = ?, f.NOME_FILIALE = ?, cor.NOME = ? WHERE o.ID_ORDINE = ?";
const deleteOrderQuery = "DELETE FROM tbl_ordine WHERE ID_ORDINE = ?";
const orderListByClientQuery = "SELECT o.ID_ORDINE, c.EMAIL AS ORDINATO_DA, c.VIA AS DESTINAZIONE, o.STATO_ORDINE FROM tbl_cliente c JOIN tbl_carrello crt ON c.EMAIL = crt.EMAIL_CLIENTE JOIN tbl_ordine o ON crt.ID = o.ID_CARRELLO WHERE c.EMAIL = ?";
const orderListQuery = "SELECT o.ID_ORDINE, o.NUMERO_ORDINE, o.STATO_ORDINE, c.EMAIL AS ORDINATO_DA, o.INDIRIZZO_SPEDIZIONE AS DESTINAZIONE, f.NOME_FILIALE AS FILIALE_IN_CARICO, co.NOME AS CORRIERE_IN_CARICO FROM tbl_ordine o JOIN tbl_carrello ca ON o.ID_CARRELLO = ca.ID JOIN tbl_cliente c ON ca.EMAIL_CLIENTE = c.EMAIL LEFT JOIN tbl_gestito_da g ON o.ID_ORDINE = g.CODICE_ORDINE LEFT JOIN tbl_filiale f ON g.ID_FILIALE = f.CODICE_ZONA_FILIALE LEFT JOIN tbl_emette_spedizione es ON es.CODICE_ZONA_FILIALE = f.CODICE_ZONA_FILIALE LEFT JOIN tbl_spedizione s ON s.NUMERO_TRACCIAMENTO = es.NUMERO_TRACCIAMENTO LEFT JOIN tbl_corriere co ON s.P_IVA_CORRIERE = co.P_IVA;";
const warehouseListQuery = "SELECT f.NOME_FILIALE, m.ID_PRODOTTO, m.NOME_PRODOTTO, m.QUANTITA_PRODOTTO FROM tbl_filiale f JOIN tbl_magazzino m ON f.CODICE_ZONA_FILIALE = m.CODICE_MAGAZZINO;";
app.listen(3000, () => {
    console.log(`Listening on port 3000`);
});
