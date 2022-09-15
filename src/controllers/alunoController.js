import alunoModel from "../models/alunoModel.js";
import Validacoes from "../services/AlunoValidacoes.js";

const alunoController = (app) =>{

    app.get('/aluno', async (req, res)=>{
        try{
            const todosAlunos = await alunoModel.pegaAluno()
            res.status(200).json({
                "Alunos": todosAlunos,
                "erro": false
            })
        }catch(error){
            res.status(404).json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.get('/aluno/id/:id', async (req, res) =>{
        const id = req.params.id
        try{
            const aluno = await Validacoes._validaGetId(id, alunoModel.pegaUmAlunoId)
            res.status(201).json({
                "aluno": aluno,
                "msg": `O Aluno ${aluno.nomeCompleto} esta matriculado na escola`,
                "erro": false
            })
        }catch(error){
            res.status(404).json({
                "msg": error.message,
                "error": true
            })
        }
    })
}

export default alunoController