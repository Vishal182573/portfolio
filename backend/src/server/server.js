import express,{json} from "express"
import cors from "cors"
import connectDb from "./config/dbconnection.js";
import contactRoutes from "./routes/contactRoutes.js"


connectDb();
const app = express();
const port=3000;

app.use(json());

app.use(cors({
    origin: 'https://portfolio-sigma-sand-36.vercel.app', // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Allow these headers
}));
app.use("/api",contactRoutes);

app.listen(port,()=>{
    console.log("server is listening");
})