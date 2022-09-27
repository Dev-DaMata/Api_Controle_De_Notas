import alunoDAO from "../DAO/alunoDAO.js";
import alunoModel from "../models/alunoModel.js";
import Validacoes from "../services/AlunoValidacoes.js";

const alunoController = (app) => {
    app.get("/aluno", async (req, res) => {
        try {
            const todosAlunos = await alunoModel.pegaAluno();
            res.status(todosAlunos.status).json({
                Alunos: todosAlunos.dados,
                erro: false,
            });
        } catch (error) {
            res.status(404).json({
                msg: error.message,
                erro: true,
            });
        }
    });

    app.get("/aluno/id/:id", async (req, res) => {
        const id = req.params.id;
        try {
            const aluno = await Validacoes._validaGetId(id, alunoModel.pegaUmAlunoId);
            if (aluno.status === 200) {
                res.status(aluno.status).json({
                    aluno: aluno.dados,
                    erro: false,
                });
            } else {
                res.status(aluno.status).json({
                    mensagem: aluno.mensagem,
                    erro: true,
                });
            }
        } catch (error) {
            res.status(404).json({
                msg: error.message,
                error: true,
            });
        }
    });

    app.get("/aluno/nome/:nome/:sobrenome", async (req, res) => {
        let {
            nome,
            sobrenome
        } = req.params;
        try {
            const aluno = await Validacoes._validaGetNome(
                nome,
                sobrenome,
                alunoModel.pegaUmAlunoNome
            );
            if (aluno.status === 200) {
                res.status(201).json({
                    aluno: aluno.dados,
                    erro: false,
                });
            } else {
                res.status(aluno.status).json({
                    mensagem: aluno.mensagem,
                    erro: true,
                });
            }
        } catch (error) {
            res.status(404).json({
                msg: error.message,
                error: true,
            });
        }
    });

    app.post('/aluno', async(req,res)=>{
        const aluno = req.body
        try{
            const validaBody = await Validacoes._validaReqBody(aluno)
            const insereAlunos = await Validacoes._validaPost(validaBody, alunoModel.insereAluno)
            res.status(201).json({
                "msg": "Aluno inserido com sucesso",
                "nome": insereAlunos,
                "erro": false
            })
        } catch (error){
            res.status(400).json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.delete('/aluno/id/:id', async(req, res)=>{
        const aluno = req.params.id
        try{
            const {status, mensagem} = await alunoDAO.pegaAluno(aluno)
            if(status === 404){
                res.status(404).json({
                    "mensagem": mensagem,
                    "erro": true
                })
            }else{
                const resposta = await alunoModel.deletaAluno(aluno)
                res.status(resposta.status).json({
                    "mensagem": "O aluno foi excluido do banco de dados da escola com sucesso!",
                    "erro": false
                })
            }
        } catch (error) {
            res.status(400).json({
                "mensagem": error.menssage,
                "erro": true
            })
        }
    });


    app.put("/aluno/id/:id", async (req, res) => {
        const body = req.body;
        const id = req.params.id;
        try {
            const {status, mensagem} = await alunoModel.pegaUmAlunoId(id)
            if(status === 404){
                res.status(404).json({
                    "mensagem": mensagem,
                    "erro": true
                })
            }else {
                const resposta = await alunoModel.atualizaAluno(id, body)
                res.status(resposta.status).json({
                    "mensagem": resposta.mensagem,
                    "erro": false
                })
            }
        } catch (error){
            res.status(400).json({
                "mensagem": error.mensagem,
                "erro": true
            })
        }
    });
};

export default alunoController;