import express from "express";
import cors from "cors";

// Iniciando app express
const app = express();

// Middleware básico de CORS
app.use(cors({ origin: "http://locahost:5173", methods: ["POST"] }));

const port = 8000;

app.listen(port, () => console.log(`Servidor ouvindo na porta ${port}`));
