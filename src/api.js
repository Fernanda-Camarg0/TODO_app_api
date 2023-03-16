// Entidades: Tarefa,Pessoas.
// Atributos: 
// Tarefas: Estudar JS,Arrumar o quarto, Lavar a louça e fazer comida.
// Pessoas: pessoa 1, pessoa 2.
import express from "express";
import usuarioController from "./controllers/usuario-controller.js";
import tarefaController from "./controllers/tarefa-controller.js";

const app = express()
const port = 3000

usuarioController(app)
tarefaController(app)



app.listen(3000)