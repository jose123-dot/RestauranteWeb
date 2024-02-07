import { ClienteDAO } from "../DAO/clienteDAO";
import { ICliente } from "../Models/cliente";
import ErroresHttp from "../erroresHTTP";
import { query } from "express-validator";

//instancia
const clientDao = new ClienteDAO();

const ClienteService = {
  //Guardar cliente
  async saveCliente(data: ICliente) {
    if (!query(data.nombre).isEmpty || !query(data.nombre).isEmpty) {
      console.log(ErroresHttp.error400);
    } else {
      await clientDao.createCliente(data);
    }
  },

  //editar cliente
  async editCliente(_id: string, data: ICliente) {
    await clientDao.updatePost(_id, data);
  },

  //eliminar cliente
  async deleteCliente(_id: string) {
    await clientDao.deletePost(_id);
  },
};

export default ClienteService;
