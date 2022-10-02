import db from "../database/db-sqlite.js"

const provaDAO ={
    pegaProva: ()=>{
        const PEGA_PROVA = `
        SELECT * FROM PROVAS
        `
        return new Promise((resolve, reject)=>{
            db.all(PEGA_PROVA, (error,row)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(row)
                }
            })
        })
    },

}

export default provaDAO