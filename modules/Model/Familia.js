let mongoose = require('mongoose');

let familiaSchema = mongoose.Schema({
    apellido: String,
    padre: {
        apellido:   String,
        nombre  :   String,
        sexo    :   String,
        edad    :   Number,
        dni     :   String
    },
    madre: {
        apellido:   String,
        nombre  :   String,
        sexo    :   String,
        edad    :   Number,
        dni     :   String
    },
    numhijos: Number,
    hijos: [ {
        anionacto   :   Number,
        apellido    :   String,
        nombre      :   String,
        sexo        :   String,
        fnac        :   Date,
        dni         :   String
    }]
});

let Familia = mongoose.model('Familia', familiaSchema);
let getOne = () => Familia.findOne()

exports.familiaSchema = familiaSchema;
exports.Familia = Familia;
exports.getOne = getOne;