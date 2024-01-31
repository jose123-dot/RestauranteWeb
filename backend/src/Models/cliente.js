const {Schema, Model} = require ('moongose');

//modelo
const clienteSchema = new Schema({
nombre: {
    type: String,
    required: true
},

apellido: {
    type: String,
    required: true
},

apodo: {
    type: String
}

}, { timestamps: true });

//exportar modelo
module.exports = Model('cliente', clienteSchema);
