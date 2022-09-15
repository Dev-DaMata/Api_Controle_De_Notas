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

    pegaUmAlunoNome: (nome, sobrenome)=>{
        const PEGA_UM_ALUNO = `
        SELECT * FROM ALUNOS
        WHERE (nome = ? AND sobrenome = ?)
        `
        return new Promise((resolve, reject) =>{
            db.get(PEGA_UM_ALUNO, nome,sobrenome,(error, row)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(row)
                }
            })
        })
    },

    insereAluno: (nome, sobrenome, serie)=>{
        const INSERE_ALUNOS = `
        INSERT INTO ALUNOS (nome, sobrenome, serie)
        VALUES (?,?,?)
        `
        return new Promise((resolve, reject)=>{
        db.run(INSERE_ALUNOS,
        nome,sobrenome,serie,
            (error)=>{
                if(error)
                    reject(error)
                else
                    resolve(nome, sobrenome, serie)
            }
            )
        })
    },
}

export default alunoDAO