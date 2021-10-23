const mongoose = require('mongoose');

const ContribSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    numDni: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    sueldoBase: {
        type: Number,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Contribuyente', ContribSchema);