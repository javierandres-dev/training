const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const pacientesSchema = new Schema({
    nombre: {
        type: String,
        trim: true,
    },
    propietario: {
        type: String,
        trim: true
    },
    fecha: {
        type: String,
        trim: true
    },
    telefono: {
        type: String,
        trim: true
    },
    hora: {
        type: String,
        trim: true
    },
    sintomas: {
        type: String,
        trim: true
    }
});

module.exports  = mongoose.model('Paciente', pacientesSchema);
