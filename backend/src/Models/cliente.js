const {Schema, Model} = require ('moongose');

//modelo
const clienteSchema = new Schema({
nombre: {
    type: String,
    required: true,
    max:  50,
    min: 1
},

apellido: {
    type: String,
    required: true,
    max:  50,
    min: 1
},

documento: {
    type: String,
    required: true,
    max:  30,
    min: 8
},

apodo: {
    type: String,
    max:  50,
    min: 1
}

}, { timestamps: true });

//exportar modelo
module.exports = Model('cliente', clienteSchema);
