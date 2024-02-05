//dotenv

import express, { Request, Response } from "express";
const app = express();
import indexRoutes from "./Router/indexRoutes";
import dotenv from "dotenv";
dotenv.config();

//base de datos
require("./database/database");
app.get("/", indexRoutes);
//base de datos

//midleware
app.set("port", process.env.PORT || 3000);

//servidor
app.listen(process.env.PORT, () => console.log("servidor ejecutado"));
