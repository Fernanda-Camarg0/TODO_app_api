import UsuarioModel from "../models/usuarioModel.js"
import bd from "../infra/bd.js"

const usuarioController = (app, bd) => {

app.get('/usuarios', (req, res) => {
    const resposta = (bd.usuarios)
    res.send (resposta)
}),
app.post('/usuarios', (req, res) => {
    const resposta = UsuarioModel.armazenar(req.body)
    res.send(resposta)
})

}

export default usuarioController