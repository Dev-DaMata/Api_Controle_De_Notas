import alunoDAO from "../DAO/alunoDAO.js"
const alunoModel = {

    pegaAluno : async ()=>{
        return await alunoDAO.pegaAluno()
    },
    pegaUmAlunoId : async (id)=>{
        return await alunoDAO.pegaUmAlunoId(id)
    },
    pegaUmAlunoNome : async (nome)=>{
        return await alunoDAO.pegaUmAlunoNome(nome)
    },
}
export default alunoModel