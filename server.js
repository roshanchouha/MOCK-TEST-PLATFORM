import express from "express";
import morgan from "morgan";
import core from "cors";
import { config } from "dotenv";
import router from "./router/router.js";
import dbconnect from "./Database/conn.js";

const app = express();


app.use(morgan('tiny'))
app.use(core())
app.use(express.json())
config();

app.use('/api',router);

app.get('/',async(req,resp)=>{
    try {
         let data = await dbconnect();
         data = await data.find({}).toArray();
         resp.send(data);
        
    } catch (error) {
         resp.json(error)
    }
})

const port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log( `server connected  to http://localhost:${port}`);
})