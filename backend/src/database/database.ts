import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/restaurantedb")
  .then(() => console.log("base de datos conectada"))
  .catch((err) => console.log(err));
