import express, { Request, Response, json } from "express";
import { ICliente } from "../Models/cliente";
import clienteService from "../Service/ClienteService";

//ejemplo
const ClienteController = {
  //guardar cliente
  async saveCliente(req: Request, res: Response) {
    await clienteService.saveCliente(req.body);
    res.send(req.body);
  },
};

export default ClienteController;
