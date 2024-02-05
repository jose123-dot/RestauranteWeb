import { ICliente, ClienteModel } from "../Models/cliente";
export class ClienteDAO {
  //exportar modelo

  //guardar cliente
  async createCliente(data: ICliente) {
    try {
      const newCliente = await ClienteModel.create(data);
      return newCliente;
    } catch (error) {
      console.log(error);
    }
  }

  //get all posts
  async getClientes() {
    try {
      const clientes = await ClienteModel.find({});
      return clientes;
    } catch (error) {
      console.log(error);
    }
  }

  //update
  async updatePost(id: string, data: any) {
    try {
      //pass the id of the object you want to update
      //data is for the new body you are updating the old one with
      //new:true, so the dats being returned, is the update one
      const cliente = await ClienteModel.findByIdAndUpdate({ _id: id }, data, {
        new: true,
      });
      if (!cliente) {
        return "post not available";
      }
      return cliente;
    } catch (error) {
      console.log(error);
    }
  }

  //delete
  async deletePost(id: string) {
    try {
      const cliente = await ClienteModel.findByIdAndDelete(id);
      if (!cliente) {
        return "post not available";
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export const clienteDAO = new ClienteDAO();
