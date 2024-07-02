import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import { passwordModel } from "./models/passwordModel.js";
import router from "./routes/passwords.route.js";
import dotenv from 'dotenv';
dotenv.config();
// mongoose.connect("mongodb+srv://el_hereje:1234567890Abc@hidden-passwords.llrbgvg.mongodb.net/hidden-passwords?retryWrites=true&w=majority",)
//     .then(res => console.log("connected"))
//     .catch(err => console.log(err))
mongoose.connect(process.env.MONGO_URI)
    .then(res => console.log("connected"))
    .catch(err => console.log(err))

const app = express();

app.use(cors());
app.use(express.json());

app.use("/passwords", router);

app.listen(3000, () => console.log("server started"))
