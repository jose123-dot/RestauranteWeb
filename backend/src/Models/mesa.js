const {Schema, Model} = require ('moongose');

//modelo
const mesaSchema = new Schema({
ubicacion: {
    type: String,
    required: true,
    max: 30,
    min: 7
},

empleado: {
    type: mongoose.ObjectId,
    ref: 'empleado'
}
}, { timestamps: true });

//exportar modelo
module.exports = Model('mesa', mesaSchema);