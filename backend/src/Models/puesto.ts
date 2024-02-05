import { model, Schema } from "mongoose";

export interface Ipuesto {
  _id?: Schema.Types.ObjectId;
  nombre: string;
}
//modelo
const puestoSchema = new Schema<Ipuesto>(
  {
    nombre: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const puestoModel = model("puesto", puestoSchema);
//exportar modelo
module.exports = puestoModel;
