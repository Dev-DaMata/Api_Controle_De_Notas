import  express  from "express";
import cors from "cors"


const app = express();
app.use(cors())
const port = 3000;
app.use(express.json());

app.listen(port, ()=>{
    console.log(`http://localhost:${port}/`);
})