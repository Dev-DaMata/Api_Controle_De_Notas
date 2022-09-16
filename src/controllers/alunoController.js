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

    app.get('/aluno/nome/:nome/:sobrenome', async (req, res)=>{
        let {nome, sobrenome} = req.params
        try{
            const aluno = await Validacoes._validaGetNome(nome, sobrenome, alunoModel.pegaUmAlunoNome)
            res.status(201).json({
                "aluno": aluno,
                "msg": `O aluno ${aluno.nome} esta matriculado `,
                "erro": false
            })
        }catch(error){
            res.status(404).json({
                "msg": error.message,
                "error": true
            })
        }
    })

    app.post('/aluno', async(req, res) => {
        const aluno = req.body
        try {
            const validaBody = await Validacoes._validaReqBody(aluno)
            const insereAluno = await Validacoes._validaPost(validaBody, alunoModel.insereAluno(aluno.nome, aluno.sobrenome, aluno.serie))
            res.status(201).json({
                "msg": "Aluno inserido com sucesso",
                "nome": insereAluno,
                "error": false
            })
        }catch(e){
            res.status(404).json({
                "msg": e.message,
                "error": true
            })
        }
    })

    app.delete('/aluno/id/:id', async(req, res) =>{
        const aluno = req.params.id
        try{
            const deletaAluno = await Validacoes._validaDelete(aluno, alunoModel.deletaAluno)
            res.status(200).json({
                "msg": "aluno deletado com sucesso",
                "aluno": deletaAluno,
                "error": false
            })
        }catch(e){
                res.status(400).json({
                    "msg": e.message,
                    "error": true
                })
        }
    })
}

export default alunoController