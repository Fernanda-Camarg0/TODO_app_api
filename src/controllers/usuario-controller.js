const usuarioController = (app) => {

app.get('/usuarios', (req, res) => {
    res.send ("rastreamento da aplicação sendo feito com nodemon")
}),
app.post('/usuarios', (req, res) => {
 res.send (req.body)
})

}

export default usuarioController