import provaDAO from "../DAO/provaDAO.js"

const provaModel ={
    pegaProva: async ()=>{
        try{
            const dados = await provaDAO.pegaProva()
            return{
                "dados": dados,
                "total": dados.length,
                "status": 200
            }
        }catch (error){
            throw error
        }
    }
}

export default provaModel