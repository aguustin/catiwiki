import mongoose from "mongoose";
import { MOONGOSE_URI } from "./config.js";

export const connectionDB = () => {
    try {
        mongoose.set('strictQuery', false);
        mongoose.connect(MOONGOSE_URI, {useNewUrlParser: true});
        console.log("db is connect");
    } catch (error) {
        console.log(error);
    }
}