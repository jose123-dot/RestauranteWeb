const {Schema, Model} = require ('moongose');

//modelo
const puestoSchema = new Schema({
nombre: {
    type: String,
    required: true
}
}, { timestamps: true });

//exportar modelo
module.exports = Model('puesto', puestoSchema);
