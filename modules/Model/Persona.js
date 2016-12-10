let mongoose = require('mongoose');

let personaSchema = mongoose.Schema({
        apellido:   String,
        nombre  :   String,
        sexo    :   String,
        edad    :   Number,
        fnac    :   Date,
        dni     :   String,
        telefono:   String,
        email   :   String
});


let Persona = mongoose.model('Persona', personaSchema);
let getOne = () => Persona.findOne()

exports.personaSchema + personaSchema;
exports.Persona = Persona;
exports.getOne = getOne;