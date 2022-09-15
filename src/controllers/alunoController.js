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
}

export default alunoController