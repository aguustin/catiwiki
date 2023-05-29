import express from "express";
import fileUpload from "express-fileupload";
import breedsRoutes from "./routes/breedRoutes.js";
import { PORT } from "./config.js";
import { connectionDB } from "./db.js";
import morgan from "morgan";

const app = express();
connectionDB();

//settings

//middlewares
app.use(morgan("dev"));
app.use(express.text());
app.use(express.json());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir:'./images'
}))

//routes

app.use(breedsRoutes);

//listen
app.listen(PORT);
console.log("Server listen in port: ",PORT);