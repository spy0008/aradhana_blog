import dotenv from "dotenv";
dotenv.config({
    path: "./src/.env"
});
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(cookieParser());


app.use('/api/auth', authRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on :${PORT}`);
    connectDB()
})