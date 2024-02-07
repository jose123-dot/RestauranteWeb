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
  //editar cliente
  async editCliente(req: Request, res: Response) {
    await clienteService.editCliente(req.body._id, req.body);
    res.send(req.body);
  },
  //eliminar cliente
  async deleteCliente(req: Request, res: Response) {
    await clienteService.deleteCliente(req.body._id);
    res.send(req.body);
  },
};

export default ClienteController;
