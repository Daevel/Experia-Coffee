# Usa un'immagine di base con Node.js
FROM node:14

# Imposta il lavoro di lavoro nel backend
WORKDIR /app/backend

# Copia il file package.json e package-lock.json
COPY ./backend/package*.json ./

# Installa le dipendenze del backend
RUN npm install

# Copia il codice del backend
COPY ./backend .

# Cambia il lavoro di lavoro nel frontend
WORKDIR /app/frontend

# Copia il codice del frontend
COPY ./frontend .

# Esponi la porta 3000 per il server Express
EXPOSE 3000

# Comando per avviare l'applicazione
CMD ["node", "/app/backend/server.js"]
