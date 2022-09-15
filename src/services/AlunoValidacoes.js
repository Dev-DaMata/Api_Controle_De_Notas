import alunoDAO from "../DAO/alunoDAO.js";

const Validacoes = {

    _validaGetId : async (id, callback)=>{
        const aluno = await callback(id)
        if(aluno === undefined){
            throw new Error (`Aviso: ${id} não encontrado!`)
        }else{
            return aluno
        }
    },
    _validaGetNome : async (nome, sobrenome, callback)=>{
        const aluno = await callback(nome, sobrenome)
        if(aluno === undefined){
            throw new Error (`Aviso; ${nome, sobrenome} não encontrado!`)
        }else{
            return aluno
        }
    },
    _validaPost : async (aluno, callback)=>{
        if(aluno.nome.length < 1 || aluno.sobrenome.length < 1 || aluno.serie.length < 1){
            throw new Error ("Aviso: preencha todos os campos")
        }else{
            return aluno
        }
    },
    _validaReqBody : async (body)=>{
        if(body.nome && body.sobrenome && body.serie){
            return body
        }else{
            throw new Error ("não foi possivel atualizar essa informação")
        }
    },
}
export default Validacoes