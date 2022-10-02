import provaDAO from "../DAO/provaDAO.js";
import provaModel from "../models/provaModel.js";


const provaController = (app)=>{
    app.get("/provas", async(req, res)=>{
        try{
            const todasProvas = await provaModel.pegaProva();
            res.status(todasProvas.status).json({
                "Provas": todasProvas.dados,
                "erro": false,
            });
        } catch (error){
            res.status(404).json({
                "msg": error.message,
                "erro": true
            });
        }
    });

}

export default provaController