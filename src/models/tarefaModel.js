import bd from "../infra/bd.js"

const TarefaModel = {
modelar : (obj) => {
    return{
        dados:{

        nome : nome.obj,
        email : email.obj,
        senha : senha.obj,
        certificado : 'Login Feito com Sucesso'

        },
        status: 200
    }
},
armazenar : (obj) => {
    bd.tarefas.push(obj)
    console.log(bd.usuarios)
    return {
        dados : { msg : 'usuario criado com sucesso'},
        status: 201
    }
}
    

}
export default TarefaModel