import { ICliente, ClienteModel } from "../Models/cliente";
export class ClienteDAO {
  //guardar cliente
  async createCliente(data: ICliente) {
    try {
      return await ClienteModel.create(data);
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
