import fs from "fs";
import express, { Request, Response } from "express";
import cors from "cors";
import { Registro, RequestBodyDTO } from "@shared/types";
import path from "path";
import { isDate } from "util/types";

// Apenas para inserir sem ter que mover registros pra dentro de /build por enquanto
const caminhoDB = path.join(process.cwd(), "src", "db", "registros.json");

// Iniciando app express
const app = express();

// Middleware básico de CORS
app.use(cors({ origin: "http://localhost:5173", methods: ["POST"] }));

// P popular o body
app.use(express.json());

const port = 8000;

app.post(
  "/registros",
  (req: Request<{}, {}, RequestBodyDTO>, res: Response) => {
    // Obtemos o que precisamos
    const tempoPassadoMs = req.body.tempoPassadoMs;
    const tempoPassadoSegundos = req.body.tempoPassadoSegundos;
    const dataClick = req.body.data;

    // Validando se tempoPassado é number e se dataClick é Date
    if (
      isNaN(tempoPassadoMs) ||
      isNaN(tempoPassadoSegundos) ||
      !isDate(new Date(dataClick))
    )
      return res.status(400).json("O body enviado está inválido");

    // Criamos um objeto
    const objetoRegistro: Registro = {
      tempoPassadoMs,
      data: dataClick,
      tempoPassadoSegundos,
    };

    // Lemos o arquivo
    fs.readFile(caminhoDB, "utf-8", (err, data) => {
      if (err)
        return res
          .status(500)
          .json({ message: "Algo deu errado ao obter registros" });

      // Parseamos ele
      const registros: Registro[] = JSON.parse(data || "[]");

      // inserimos o registro novo
      registros.push(objetoRegistro);

      // Escrevemos em registros.json
      fs.writeFile(caminhoDB, JSON.stringify(registros), (err) => {
        if (err)
          return res
            .status(500)
            .json({ message: "Algo deu errado ao salvar o registro" });

        //Se tudo ocorrer bem, enviamos uma resposta ao client
        res.status(200).json({ message: "Registro gravado" });
      });
    });
  }
);

app.listen(port, () => console.log(`Servidor ouvindo na porta ${port}`));
