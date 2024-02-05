import mongoose from "mongoose";

console.log(process.env.URL_SERVER);
mongoose
  .connect("mongodb://localhost/restaurantedb")
  .then(() => console.log("base de datos conectada"))
  .catch((err) => console.log(err));
