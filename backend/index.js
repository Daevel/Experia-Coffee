const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const mysqlConfig = {
    host: "mysql_server",
    user: "daevel",
    password: "password",
    database: "experia_coffee",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}

const connection = mysql.createPool(mysqlConfig);

const app = express();

app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
    res.send("Hello world");
})

// DB CONN
app.get("/api/connect", function (req, res) {
    connection.getConnection(function (err, connection) {
        if (err) {
            return res.status(500).send({message: "Errore di connessione al database"});
        } else {
            connection.release();
            return res.status(200).send({message: "connected"});
        }
    });
});

// AUTH API
app.post("/api/auth", function(req, res) {
    const { username, password } = req.body;
    try {
            // check intermedio per controllare se si tratta di un dipendente oppure un cliente
            const authQuery = username.includes("@experiacoffee.it") ? dipendenteAuthQuery : clienteAuthQuery;
            connection.query(authQuery, [username, password], function(err, result) {
                if (err) {
                    
                    return res.status(500).send({ message: "Errore nella query del profilo dell'utente" });
                }
                if (result.length === 0) {
                    return res.status(404).send({message: "Credenziali utenti errate."});
                }
                return res.status(200).send({username: username, password: password});
            });
    } catch (err) {
        res.status(500).send({message: "Errore di connessione al database"});
    }
});


// VIEW USER INFO
app.post("/api/viewUser", function(req, res) {
    const { username } = req.body;
    try {
            const dataProfileQuery = username.includes("@experiacoffee.it") ? dipendenteProfileQuery : clienteProfileQuery;
            connection.query(dataProfileQuery, [username], function(err, result) {
                if (err) {
                    
                    return res.status(500).send({ message: "Errore nella query del profilo dell'utente" });
                }
                if (result.length === 0) {
                    return res.status(404).send({ message: "Utente non trovato"});
                }
                return res.status(200).json(result);
            })
    } catch (err) {
        res.status(500).send({message: "Errore di connessione al database"});
    }
})


app.post("/api/changeEmail", function(req, res) {
    const { newEmail, oldEmail } = req.body;
    try {

            connection.query(changeEmailQuery, [newEmail, oldEmail], function(err, result) {
                if (err) {
                    return res.status(500).json({ error: "Errore interno del server" });
                }

                if (result.affectedRows === 0) {
                    return res.status(404).send({ message: "Utente non modificato"});
                }
                return res.status(200).json({ message: "Utente modificato con successo"});
            })
    } catch (err) {
        return res.status(500).json({ error: "Errore interno del server" });
    }
})

app.post("/api/changePassword", function(req, res) {
    const { password, email } = req.body;
    try {
        const dataProfileQuery = email.includes("@experiacoffee.it") ? changeDipendentePasswordQuery : changeClientePasswordQuery;
        connection.query(dataProfileQuery, [password, email], function(err, result) {
                if (err) {
                    return res.status(500).json({ error: "Errore interno del server" });
                   
                }
                if (result.affectedRows === 0) {
                    return res.status(404).send({ message: "Password non modificata"});
                
                }
                return res.status(200).json({ message: "Password modificata con successo"});
            })
    } catch (err) {
        return res.status(500).send({message: "Errore di connessione al database"});
    }
})

app.post("/api/createOrder", function(req, res) {
    const { email, cartID } = req.body;
    try {
        connection.query(createOrderQuery, [cartID, email, email], function(err, result) {
            if(err) {
                return res.status(500).json({ error: "Errore interno del server" });
            }
                if (!result) {
                    return res.status(404).send({ message: "Errore nella creazione dell'ordine"});
                }
                return res.status(200).json(result);
            })
    } catch (err) {
        return res.status(500).send({message: "Errore di connessione al database"});
    }
})

app.put("/api/updateOrder", function(req, res) {
    const { numeroOrdine, statoOrdine, filialeInCarico, corriereInCarico, idOrdine } = req.body;
    try {
            connection.query(updateOrderQuery, [numeroOrdine, statoOrdine, filialeInCarico, corriereInCarico, idOrdine], function(err, result) {
                if (err) {
                    return res.status(500).json({ error: "Errore interno del server" });
                }
                if (!result) {
                   return res.status(404).send({ message: "Password non modificata"});
                }
                return res.status(200).json(result);
            })
    } catch (err) {
        return res.status(500).send({message: "Errore di connessione al database"});
    }
})

app.delete("/api/deleteOrder", function(req, res) {
    const { idOrdine } = req.body;
    try {
            connection.query(deleteOrderQuery, [idOrdine], function(err, result) {
                if (err) {
                    
                    return res.status(500).json({ error: "Errore interno del server" });
                }
                if (!result) {
                    return res.status(404).send({ message: "Password non modificata"});
                }
                return res.status(200).json(result);
            })
    } catch (err) {
        return res.status(500).send({message: "Errore di connessione al database"});
    }
})

app.post("/api/getOrderListByClient", function(req, res) {
    const { email } = req.body;
    try {
            connection.query(orderListByClientQuery, [email], function(err, result) {
                if(err) {
                    
                    return res.status(500).json({ error: "Errore interno del server" });
                }
                if (!result) {
                    return res.status(404).send({ message: "Password non modificata"});
                }
                return res.status(200).json(result);
            })
    } catch (err) {
        return res.status(500).send({message: "Errore di connessione al database"});
    }
})

app.get("/api/getOrderList", function(req, res) {
    try {
            connection.query(orderListQuery, function(err, result) {
                if(err) {
                    
                    return res.status(500).json({ error: "Errore interno del server" });
                }
                if (!result) {
                    return res.status(404).send({ message: "Password non modificata"});
                }
                return res.status(200).json(result);
            })
    } catch (err) {
        return res.status(500).send({message: "Errore di connessione al database"});
    }
})

app.get("/api/getWarehouseList", function(req, res) {
    try {
            connection.query(warehouseListQuery, function(err, result) {
                if(err) {
                    
                    return res.status(500).json({ error: "Errore interno del server" });
                }
                if (!result) {
                    return res.status(404).send({ message: "Password non modificata"});
                }
                return res.status(200).json(result);
            })
    } catch (err) {
        return res.status(500).send({message: "Errore di connessione al database"});
    }
})


// SIGNUP API
app.post("/api/signUp", function(req,res) {
    const body = req.body;

    try {
            connection.query(signupQuery, [body.NOME, body.COGNOME, body.EMAIL, body.CELLULARE, body.CITTA, body.VIA, body.N_CIVICO, body.CAP, body.UTENTE_PASSWORD, body.NUM_CARTA, body.CVV_CARTA, body.INTESTATARIO_CARTA, body.SCADENZA_CARTA, body.CODICE_FISCALE, body.DATA_DI_NASCITA], function(err, result) {
                if(err) {
                    
                    return res.status(500).json({error: "Errore interno del server"});
                } else {
                    return res.status(200).json(result);
                }
            })
    } catch (err) {
        
        return res.status(500).json({ error: "Errore interno del server"});
    }
});

app.get("/api/getProductList", function(req, res, next) {
    try {
            connection.query(getMarketListQuery, function(err, result) {
                if (err) {
                
                    return res.status(500).json({error: "Errore interno del server"});
                } else {
                    return res.status(200).json(result);
                }
            });
    } catch (err) {
        return res.status(500).json({error: "Errore interno del server"});
    }
})


const clienteAuthQuery = "SELECT EMAIL, UTENTE_PASSWORD FROM `tbl_cliente` WHERE EMAIL = ? AND UTENTE_PASSWORD = ?";
const dipendenteAuthQuery = "SELECT EMAIL, UTENTE_PASSWORD FROM `tbl_dipendente` WHERE EMAIL = ? AND UTENTE_PASSWORD = ?";
const signupQuery = "INSERT INTO `tbl_cliente` (`NOME`, `COGNOME`, `EMAIL`,`CELLULARE`, `CITTA`, `VIA`,`N_CIVICO`, `CAP`, `UTENTE_PASSWORD`, `NUM_CARTA`, `CVV_CARTA`, `INTESTATARIO_CARTA`, `SCADENZA_CARTA`, `CODICE_FISCALE`, `DATA_DI_NASCITA`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
const getMarketListQuery = "SELECT * FROM `tbl_prodotto` ORDER BY NOME_PRODOTTO ASC";
const clienteProfileQuery = "SELECT * FROM tbl_cliente WHERE EMAIL = ?";
const dipendenteProfileQuery = "SELECT * FROM tbl_dipendente WHERE EMAIL = ?";
const changeEmailQuery = "UPDATE tbl_cliente SET EMAIL = ? WHERE EMAIL = ?";
const changeClientePasswordQuery = "UPDATE tbl_cliente SET UTENTE_PASSWORD = ? WHERE EMAIL = ?";
const changeDipendentePasswordQuery = "UPDATE tbl_dipendente SET UTENTE_PASSWORD = ? WHERE EMAIL = ?";
const createOrderQuery = "INSERT INTO tbl_ordine (ID_ORDINE, FATTURA, NUMERO_ORDINE, ID_CARRELLO, INDIRIZZO_SPEDIZIONE) VALUES (?, 'EMPTY', 0, (SELECT ID FROM tbl_carrello WHERE EMAIL_CLIENTE = ?), (SELECT VIA FROM tbl_cliente WHERE EMAIL = ?))";
const updateOrderQuery = "UPDATE tbl_cliente c JOIN tbl_carrello ca ON c.EMAIL = ca.EMAIL_CLIENTE JOIN tbl_ordine o ON ca.ID = o.ID_CARRELLO JOIN tbl_gestito_da gda ON o.ID_ORDINE = gda.CODICE_ORDINE JOIN tbl_filiale f ON gda.ID_FILIALE = f.CODICE_ZONA_FILIALE JOIN tbl_emette_spedizione ems ON f.CODICE_ZONA_FILIALE = ems.CODICE_ZONA_FILIALE JOIN tbl_spedizione s ON ems.NUMERO_TRACCIAMENTO = s.NUMERO_TRACCIAMENTO JOIN tbl_corriere cor ON cor.P_IVA = s.P_IVA_CORRIERE SET o.NUMERO_ORDINE = ?, o.STATO_ORDINE = ?, f.NOME_FILIALE = ?, cor.NOME = ? WHERE o.ID_ORDINE = ?";
const deleteOrderQuery = "DELETE FROM tbl_ordine WHERE ID_ORDINE = ?";
const orderListByClientQuery = "SELECT o.ID_ORDINE, c.EMAIL AS ORDINATO_DA, c.VIA AS DESTINAZIONE, o.STATO_ORDINE FROM tbl_cliente c JOIN tbl_carrello crt ON c.EMAIL = crt.EMAIL_CLIENTE JOIN tbl_ordine o ON crt.ID = o.ID_CARRELLO WHERE c.EMAIL = ?";
const orderListQuery = "SELECT o.ID_ORDINE, o.NUMERO_ORDINE, o.STATO_ORDINE, c.EMAIL AS ORDINATO_DA, o.INDIRIZZO_SPEDIZIONE AS DESTINAZIONE, f.NOME_FILIALE AS FILIALE_IN_CARICO, co.NOME AS CORRIERE_IN_CARICO FROM tbl_ordine o JOIN tbl_carrello ca ON o.ID_CARRELLO = ca.ID JOIN tbl_cliente c ON ca.EMAIL_CLIENTE = c.EMAIL LEFT JOIN tbl_gestito_da g ON o.ID_ORDINE = g.CODICE_ORDINE LEFT JOIN tbl_filiale f ON g.ID_FILIALE = f.CODICE_ZONA_FILIALE LEFT JOIN tbl_emette_spedizione es ON es.CODICE_ZONA_FILIALE = f.CODICE_ZONA_FILIALE LEFT JOIN tbl_spedizione s ON s.NUMERO_TRACCIAMENTO = es.NUMERO_TRACCIAMENTO LEFT JOIN tbl_corriere co ON s.P_IVA_CORRIERE = co.P_IVA;";
const warehouseListQuery = "SELECT f.NOME_FILIALE, m.ID_PRODOTTO, m.NOME_PRODOTTO, m.QUANTITA_PRODOTTO FROM tbl_filiale f JOIN tbl_magazzino m ON f.CODICE_ZONA_FILIALE = m.CODICE_MAGAZZINO;";

app.listen(3000, () => {
    console.log(`Backend is listening on port 3000`);
});
