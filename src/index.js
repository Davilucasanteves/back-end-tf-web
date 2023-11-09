import express from "express";      // Requisição do pacote do express
import dotenv from "dotenv";
import roteadorUsuario from "./routes/usuario.js"; //importa router
import roteadorAdmin from "./routes/admin.js"; //importa router

dotenv.config();

const app = express();              // Instancia o Express
const port = 3000;                  // Define a porta

app.get("/", (req, res) => {
  res.json({
    message: "API para CRUD usuario: https://github.com/Davilucasanteves/api-node-express.git",
  });
});

app.listen(port, () => {            // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(roteadorUsuario);
app.use(roteadorAdmin);