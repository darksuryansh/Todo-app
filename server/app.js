import express from "express";  
import dotenv from "dotenv";
import connectDB from "./db/Database.js";
import userRoutes from "./routes/user.js";
import todoRouters from "./routes/todo.js";
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';
import cors from "cors";

dotenv.config();  
connectDB();

const app = express();


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use("/api/users", userRoutes);
app.use("/api/todo", todoRouters);




const PORT = process.env.PORT ;




app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});