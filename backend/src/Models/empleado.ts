import { Schema, model, Types } from "mongoose";

export interface Iempleados {
  _id?: Types.ObjectId;
  nombre: string;
  apellido: string;
  documento: string;
  direccion: string;
  telefono: string;
  puesto: Types.ObjectId;
}
//modelo
const empleadoSchema = new Schema<Iempleados>(
  {
    nombre: {
      type: String,
      required: true,
      max: 50,
      min: 1,
    },

    apellido: {
      type: String,
      required: true,
      max: 50,
      min: 2,
    },

    documento: {
      type: String,
      unique: true,
      required: true,
    },

    direccion: {
      type: String,
      required: true,
      max: 100,
      min: 10,
    },

    telefono: {
      type: String,
      required: true,
      max: 25,
      min: 13,
    },

    puesto: {
      type: Schema.Types.ObjectId,
      ref: "puesto",
    },
  },
  { timestamps: true }
);

const EmpleadoModel = model("empleado", empleadoSchema);

//exportar modelo
module.exports = EmpleadoModel;
