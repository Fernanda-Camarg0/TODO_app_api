import express from "express";

const app = express();

app.get('/', function (req, res){
    res.send('hello world')
})
app.get('/teste', function (req, res){
    res.send ({
        msg: 'hello world'
    })
})

app.listen(3000)