// Importer le module 'http'

const http = require("http");

// Créer un serveur HTTP

const server = http.createServer((req, res) => {
  let body="hello"

  res.statusCode = 200;

  res.setHeader("Content-Type", "text/plain");

  res.end(
    "Bonjour! Ceci est un exemple de gestionnaire d'événements en Node.js."
  );
});

// Démarrer le serveur sur le port 3000

server.listen(3000, "localhost", () => {
  console.log("Le serveur est en cours d'exécution sur http://localhost:3000");
});
