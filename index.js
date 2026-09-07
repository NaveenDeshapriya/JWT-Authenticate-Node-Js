import express from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import cors from "cors";
import { router } from "./route/route.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({
    extended:true
}));
dotenv.config();


app.use("/api/v1",router);


app.post("/api/v1", (req, res) => {});


app.listen(process.env.PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    }

    console.log("server ready");

});