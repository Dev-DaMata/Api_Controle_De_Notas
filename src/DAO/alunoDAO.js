import db from "../database/db-sqlite.js"

const alunoDAO ={
    pegaAluno: ()=>{
        const PEGA_ALUNO = `
        SELECT * FROM ALUNOS
        `
        return new Promise((resolve, reject)=>{
            db.all(PEGA_ALUNO, (error,row)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(row)
                }
            })
        })
    },

    pegaUmAlunoId: (id)=>{
        const PEGA_UM_ALUNO = `
        SELECT * FROM ALUNOS
        WHERE id = ?
        `
        return new Promise((resolve, reject)=>{
            db.get(PEGA_UM_ALUNO, id, (error, row)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(row)
                }
            })
        })
    },

    pegaUmAlunoNome: (nomeCompleto)=>{
        const PEGA_UM_ALUNO = `
        SELECT * FROM ALUNOS
        WHERE nomeCompleto = ?
        `
        return new Promise((resolve, reject) =>{
            db.get(PEGA_UM_ALUNO, nomeCompleto,(error, row)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(row)
                }
            })
        })
    },


}

export default alunoDAO