import express,{json} from "express"
import cors from "cors"
import connectDb from "./config/dbConnection.js";
import contactRoutes from "./routes/contactRoutes.js"


connectDb();
const app = express();
const port=process.env.PORT || 3000;

app.use(json());

app.use(cors({
    origin: 'http://localhost:3001', // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Allow these headers
}));
app.use("/api",contactRoutes);
app.use('/',(req,res)=>{res.send("Hello")});

app.listen(port,()=>{
    console.log("server is listening");
})