import { Schema, model, Types } from "mongoose";

export interface ICliente {
  _id?: Types.ObjectId;
  nombre: string;
  apellido: string;
  documento: string;
  apodo: string;
}

//modelo
const clienteSchema = new Schema<ICliente>(
  {
    nombre: { type: String, required: true, max: 50, min: 1 },
    apellido: { type: String, required: true, max: 50, min: 1 },
    documento: { type: String, required: true, max: 30, min: 8 },
    apodo: { type: String, max: 50, min: 1 },
  },
  { timestamps: true }
);

//exportar modelo
export const ClienteModel = model("cliente", clienteSchema);
