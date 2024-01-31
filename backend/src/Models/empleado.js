const {Schema, Model} = require ('moongose');

//modelo
const empleadoSchema = new Schema({
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
    min: 2
},

documento: {
    type: String,
    unique: true,
    required: true
},

direccion: {
    type: String,
    required: true,
    max:  100,
    min: 10
},

telefono: {
    type: String,
    required: true,
    max:  25,
    min: 13
},

puesto: {
    type: mongoose.ObjectId,
    ref: 'puesto'
    
}


}, { timestamps: true });

//exportar modelo
module.exports = Model('empleado', empleadoSchema);
