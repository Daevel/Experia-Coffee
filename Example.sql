-- Crea il database
CREATE DATABASE IF NOT EXISTS esempio_database;
USE esempio_database;

-- Crea la tabella
CREATE TABLE IF NOT EXISTS esempio_tabella (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50),
    cognome VARCHAR(50),
    email VARCHAR(100)
    );

-- Inserisci alcuni dati di esempio nella tabella
INSERT INTO esempio_tabella (nome, cognome, email) VALUES ('Mario', 'Rossi', 'mario.rossi@example.com'),('Luca', 'Bianchi', 'luca.bianchi@example.com'),('Anna', 'Verdi', 'anna.verdi@example.com');