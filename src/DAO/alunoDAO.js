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

    insereAluno: (aluno)=>{
        return new Promise((resolve, reject)=>{
            db.run(`INSERT INTO ALUNOS (NOME, SOBRENOME, SERIE)
            VALUES (?, ?, ?)`, aluno.nome, aluno.sobrenome, aluno.serie,
            (erro)=>{
                if(erro){
                    reject(erro)
                }else{
                    resolve("Aluno inserido com sucesso")
                }
            })
        })
    },

    deletaAluno: (id)=>{
        const DELETA_ALUNOS = `
        DELETE FROM ALUNOS 
        WHERE id = ?
        `
        return new Promise((resolve, reject)=>{
            db.run(DELETA_ALUNOS,
                id,(error, row)=>{
                    if(error){
                        reject(error)
                    }else{
                        resolve(row)
                    }
                }
                )
        })
    },
    
    atualizaAluno: (id, novoAluno)=>{
        const ATUALIZA_ALUNO = `
        UPDATE ALUNOS 
        SET nome = ?, sobrenome = ?, serie =?
        WHERE id = ?
        `
        return new Promise((resolve, reject)=>{
            db.run(ATUALIZA_ALUNO,
                novoAluno.nome, novoAluno.sobrenome, novoAluno.serie, id,
                (error)=>{
                    if(error){
                        reject(error)
                    }else{
                        resolve(novoAluno)
                    }
                }
                )
        })
    }
}

export default alunoDAO