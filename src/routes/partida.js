//src/routes/usuario.js
import { Router } from "express";
import verificarAutenticacao from "../middlewares/autenticacao.js"; //cuidado com esses dois pontos!
//endpoints

import {
  selectPartida,
  selectPartidas,
  insertPartida,
  deletePartida,
  updatePartida,
} from "../db/index.js";

//src/routes/Partida.js
const router = Router();

router.get("/partidas", verificarAutenticacao, async (req, res) => {    //end points (router e app!)
  console.log(`Rota GET /partidas solicitada pelo Partida ${req.userId}`);//será que esse user tem pra partida?
  try {
    const partidas = await selectPartidas();
    res.json(partidas);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
});

router.get("/partida/:id", verificarAutenticacao, async (req, res) => {
  console.log("Rota GET /partida solicitada");
  try {
    const partida = await selectPartida(req.params.id);
    if (partida.length > 0) res.json(partida);
    else res.status(404).json({ message: "Partida não encontrada!" });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
});


router.post("/partida", verificarAutenticacao, async (req, res) => {
  console.log("Rota POST /partida solicitada");
  try {
    await insertPartida(req.body);
    res.status(201).json({ message: "Partida inserida com sucesso!" });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
});

//index.js
router.delete("/partida/:id", verificarAutenticacao, async (req, res) => {
  console.log("Rota DELETE /partida solicitada");
  try {
    const partida = await selectPartida(req.params.id);
    if (partida.length > 0) {
      await deletePartida(req.params.id);
      res.status(200).json({ message: "Partida excluida com sucesso!!" });
    } else res.status(404).json({ message: "Partida não encontrada!" });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
});

//index.js
router.patch("/partida", verificarAutenticacao, async (req, res) => {
  console.log("Rota PATCH /partida solicitada");
  try {
    const partida = await selectPartida(req.body.id);
    if (partida.length > 0) {
      await updatePartida(req.body);
      res.status(200).json({ message: "Partida atualizada com sucesso!" });
    } else res.status(404).json({ message: "Partida não encontrada!" });
  } catch (error) {
    console.log(error);
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
});
export default router;
