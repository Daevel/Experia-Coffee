# Usa un'immagine di base con Node.js
FROM node:latest

# Imposta il lavoro di lavoro nel backend
WORKDIR /usr/src/app

# Copia il file package.json e package-lock.json
COPY backend/package*.json ./

# Installa le dipendenze del backend
RUN npm install

# Copia il codice del backend
COPY backend/ .

EXPOSE 3000

# Comando per avviare l'applicazione
CMD ["node", "index.js"]
