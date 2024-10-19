import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import { passwordModel } from "./models/passwordModel.js";
import router from "./routes/passwords.route.js";
import { config } from 'dotenv';
config()

const app = express();

mongoose.connect(process.env.MONGO_URI)
    .then(res => console.log("connected"))
    .catch(err => console.log(err))
// await mongoose.connect(`mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:27017`)
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.log(err))


app.use(cors());
app.use(express.json());

app.use("/passwords", router);

app.listen(3000, () => console.log("server started"))
