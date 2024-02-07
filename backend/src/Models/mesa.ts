import { Schema, model } from "mongoose";

export interface Imesa {
  _id?: Schema.Types.ObjectId;
  ubicacion: string;
  empleado: Schema.Types.ObjectId;
}
//TODO: FALTA ARRRELGAR LE OCA A ORLANDO
//modelo
const mesaSchema = new Schema<Imesa>(
  {
    ubicacion: {
      type: String,
      required: true,
      max: 30,
      min: 7,
    },

    empleado: {
      type: Schema.Types.ObjectId,
      ref: "empleado",
    },
  },
  { timestamps: true }
);

const mesaModel = model("mesa", mesaSchema);
//exportar modelo
module.exports = mesaModel;
