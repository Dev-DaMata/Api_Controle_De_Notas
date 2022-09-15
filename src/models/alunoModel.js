import alunoDAO from "../DAO/alunoDAO.js"
const alunoModel = {

    pegaAluno : async ()=>{
        return await alunoDAO.pegaAluno()
    },
    pegaUmAlunoId : async (id)=>{
        return await alunoDAO.pegaUmAlunoId(id)
    },
    pegaUmAlunoNome : async (nome, sobrenome)=>{
        return await alunoDAO.pegaUmAlunoNome(nome,sobrenome)
    },
    insereAluno : async (nome, sobrenome, serie)=>{
        console.log(nome);
        return await alunoDAO.insereAluno(nome, sobrenome, serie)
    }
}
export default alunoModel