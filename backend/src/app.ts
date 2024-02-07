//dotenv

import express, { Request, Response } from "express";
const app = express();
//import cors from "cors";

//import router
import indexRoutes from "./Router/indexRoutes";
import clienteRoutes from "./Router/clienteRouter";

import dotenv from "dotenv";
dotenv.config();

//base de datos
import "./database/database";

//midleware
app.use(express.json());
//app.use(cors());

//port
app.set("port", process.env.PORT || 3000);

//routers
app.use("/", indexRoutes);
app.use("/api/cliente/", clienteRoutes);

//servidor
app.listen(process.env.PORT, () => console.log("servidor ejecutado"));
