import alunoDAO from "../DAO/alunoDAO.js"
import {
    criaAluno,
    validaAluno,
} from "../services/Alunos/AlunosValidacoes.js"
const alunoModel = {

    pegaAluno : async ()=>{
        try{
            const dados = await alunoDAO.pegaAluno()
            return {
                "dados": dados,
                "total": dados.length,
                "status": 200
            }
        }catch (error){
            throw error
        }
    },

    pegaUmAlunoId : async (id)=>{
        try{
            const dados = await alunoDAO.pegaUmAlunoId(id)
            if(dados){
                return {
                    "dados": dados,
                    "status": 200
                }
            } else{
                return {
                    "mensagem": `Aluno de id ${id} não encontrado!`,
                    "status": 404
                }
            }
        } catch (error){
            return {
                "mensagem": error.message,
                "status": 400
            }
        }
    },
    pegaUmAlunoNome : async (nome, sobrenome)=>{
        try{
            const dados = await alunoDAO.pegaUmAlunoNome(nome, sobrenome)
            if(dados){
                return {
                    "dados": dados,
                    "status": 200
                }
            }else {
                return {
                    "mensagem": `Aluno não encontrado!`,
                    "status": 404
                }
            }
        } catch (error){
            return{
                "mensagem": error.message,
                "status": 400
            }
        }
        
    },
    insereAluno : async (aluno)=>{
        try{
            const novoAluno = criaAluno(aluno)
            const mensagem = await alunoDAO.insereAluno(novoAluno)
            return {
                "Mensagem": mensagem,
                "status": 201
            }
        } catch (error){
            return {
                "mensagem" : error.message,
                "status": 400
            }
        }
    },
    deletaAluno : async (id)=>{
        try{
            const mensagem = await alunoDAO.deletaAluno(id)
            return {
                "mensagem" : mensagem,
                "status": 200
            }
        } catch (error){
            return {
                "mensagem": error.message,
                "status": 400
            }
        }
    },
    atualizaAluno : async (id, novoAluno)=>{
        try{
            validaAluno(novoAluno)
            const mensagem = await alunoDAO.atualizaAluno(id,novoAluno)
            return{
                "mensagem": mensagem,
                "status": 200
            }
        } catch (error) {
            return {
                "mensagem" : error.message,
                "status" : 400
            }
        }
    }
    
}
export default alunoModel