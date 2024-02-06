//dotenv

import express, { Request, Response } from "express";
const app = express();
import bodyparser from "body-parser";
import indexRoutes from "./Router/indexRoutes";
import clienteRoutes from "./Router/clienteRouter";

import dotenv from "dotenv";
dotenv.config();

//base de datos
require("./database/database");

//midleware
app.use(bodyparser.json());
app.set("port", process.env.PORT || 3000);

//routers
app.use("/", indexRoutes);
app.use("/api/cliente/", clienteRoutes);

//base de datos

//servidor
app.listen(process.env.PORT, () => console.log("servidor ejecutado"));
