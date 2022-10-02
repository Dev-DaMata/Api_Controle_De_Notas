import  express  from "express";
import cors from "cors"
import alunoController from "./controllers/alunoController.js"
import provaController from "./controllers/provaController.js";
const app = express();
app.use(cors())
const port = 3000;
app.use(express.json());
alunoController(app)
provaController(app)
app.listen(port, ()=>{
    console.log(`http://localhost:${port}/`);
})