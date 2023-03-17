class UsuarioModel{
    constructor(obj){
        nome = obj.nome,
        email = obj.email
    }
    modelar(obj){
        return{
            nome : obj.nome,
            email : obj.email
        }
    }
    validar(obj){
        try{ 
        validando(obj)
        this.modelar(obj)
        } catch(error){
            return error
        }
    }

}