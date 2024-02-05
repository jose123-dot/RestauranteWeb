import { Schema, model } from "mongoose";

export interface Imenu {
  _id?: Schema.Types.ObjectId;
  descripcion: string;
  nombre: string;
  item: string;
  precio: Schema.Types.Decimal128;
}

//modelo
const menuSchema = new Schema(
  {
    descripcion: {
      type: String,
      required: true,
      max: 200,
      min: 10,
    },

    nombre: {
      type: String,
      required: true,
      max: 50,
      min: 2,
    },

    items: {
      type: String,
      required: true,
      max: 100,
      min: 2,
    },

    precio: {
      type: Schema.Types.Decimal128,
      required: true,
    },
  },
  { timestamps: true }
);

const MenuModel = model("menu", menuSchema);

//exportar modelo
module.exports = MenuModel;
