const {Schema, Model} = require ('moongose');

//modelo
const menuSchema = new Schema({
descripcion: {
    type: String,
    required: true,
    max: 200,
    min: 10
},

nombre: {
    type: String,
    required: true,
    max:  50,
    min: 2
},

items: {
    type: String,
    required: true,
     max:  100,
    min: 2
},

precio: {
    type: mongoose.Decimal128,
    required: true,
}
}, { timestamps: true });

//exportar modelo
module.exports = Model('menu', menuSchema);