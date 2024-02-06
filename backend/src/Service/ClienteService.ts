import { ClienteDAO } from "../DAO/clienteDAO";
import { ICliente } from "../Models/cliente";
import { ErroresHttp } from "../erroresHTTP";
import { query } from "express-validator";

//instancia
const clientDao = new ClienteDAO();
const errores: ErroresHttp = new ErroresHttp();

const ClienteService = {
  //Guardar cliente
  async saveCliente(data: ICliente) {
    if (!query(data.nombre).isEmpty || !query(data.nombre).isEmpty) {
      console.log(errores.error400);
    } else {
      await clientDao.createCliente(data);
    }
  },
};

export default ClienteService;
