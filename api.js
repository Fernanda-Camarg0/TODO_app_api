// Entidades: Tarefa,Pessoas
// Atributos: 
// Tarefas: Estudar JS,Arrumar o quarto, Lavar a louça,
// Pessoas: pessoa 1, pessoa 2
import express from "express";

const app = express();

app.get('/tarefas', function (req, res){
    res.send("Arrumar o quarto(A), Lavar a louça(B), Estudar JS(C) e Fazer comida(D) ")
})
app.get('/pessoas', function (req, res){
    res.send ("Diego, Aline")
})
app.get('/prazo', function (req, res){
    res.send ("De 8 às 8:30(A), De 8:30 às 9(B),De 9 às 11:30(C), De 11:30 às 12:40(D) ")
})

app.listen(3000)