import TarefaModel from "../models/tarefaModel.js"

const tarefaController = (app, bd) => {

    app.get('/tarefas', function (req, res){
        res.send ("suas tarefas aqui")
    }),
    app.post('/tarefas', function (req, res){
        const resposta = UsuarioModel.armazenar(req.body)
        res.status(resposta.status).send(resposta.dados)
    })
    
    }
    
    export default tarefaController