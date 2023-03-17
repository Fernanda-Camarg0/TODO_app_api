import express from "express";
import usuarioController from "./controllers/usuario-controller.js";
import tarefaController from "./controllers/tarefa-controller.js";
import bd from "./infra/bd.js";

const app = express()
const port = 3000;


app.use(express.json());


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
})



tarefaController(app, bd)
usuarioController(app, bd)