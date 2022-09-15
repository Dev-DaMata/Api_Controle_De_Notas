import alunoDAO from "../DAO/alunoDAO.js";

const Validacoes = {

    _validaGet : async (id, callback)=>{
        const aluno = await callback(id)
        if(aluno === undefined){
            throw new Error (`Aviso: ${id} não encontrado!`)
        }else{
            return aluno
        }
    },
    _validaGetNome : async (nomeCompleto, callback)=>{
        const aluno = await callback(nomeCompleto)
        if(aluno === undefined){
            throw new Error (`Aviso; ${nomeCompleto} não encontrado!`)
        }else{
            return aluno
        }
    }
}
export default Validacoes