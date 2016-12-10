let mongo = require('./modules/Model/mongo.js'),
    fem = require('./modules/femes.js'),
    mas = require('./modules/mascs.js'),
    aps = require('./modules/apes.js'),
    mai = require('./modules/mailers.js'),
    niveles = require('./modules/data/niveles.js'),
    util = require('./modules/util.js'),
    dbFam = require('./modules/Model/Familia.js'),
    dbPer = require('/modules/Model/Persona.js')

//-----------------------------------------------------------
// Load data arrays
//-----------------------------------------------------------
let fems = fem.getall()
let mass = mas.getall()
let apes = aps.getall()
let mais = mai.getall()
//-----------------------------------------------------------
// Get a random element from the arrays
//-----------------------------------------------------------
let afam = () => apes[util.rnum(1,apes.length)]
let nmas = () => mass[util.rnum(1,mass.length)]
let nfem = () => fems[util.rnum(1,fems.length)]
let nmai = () => mais[util.rnum(1,mais.length)]
let getNombre = (sexo) => sexo === 'F' ? nfem() : nmas()

//-----------------------------------------------------------
// Generadores de datos
//-----------------------------------------------------------
// Familia: Aun hay cosas de la edad de madre/padre q no 
// andan bien.
//-----------------------------------------------------------
let genFlia = () => {
    let familia = {};
    familia.apellido = afam();
    familia.padre = genPadre(familia);
    familia.madre = genMadre();
    familia.numhijos = util.rnum(1,4);
    familia.hijos = [];
    for (let i = 0; i < familia.numhijos; i++) {
        let anionacto = util.rnum(util.year()-13, util.year()) - 5;
        familia.hijos.push(genHijo(familia, anionacto));
    }
    return familia;
}
//-----------------------------------------------------------
// Curso: Con la data de hijos, genera los cursos
// No esta hecho
//-----------------------------------------------------------
let genCurso = (data) => { 
    data.alumnos = util.rnum(20,30);
    genFlia(data);
    //console.log(data);
}
//-----------------------------------------------------------
// Padre: 
//-----------------------------------------------------------
let genPadre = (flia) => {
    let padre = {};
    let edadbase = util.edadesBase[util.rnum(0,3)];
    let dninum = edadbase === 25 ? 30 : edadbase === 35 ? 25 : edadbase === 45 ? 15 : 10;
    padre.apellido = afam(); //flia.apellido;
    padre.nombre = getNombre('M');
    padre.sexo = 'M';
    padre.edad = edadbase +  util.plus();
    padre.dni = util.dni(dninum, dninum);
    padre.telefono = util.telefono();
    padre.email = padre.nombre + '.' + padre.apellido + '@' + nmai();
    return padre;
}
//-----------------------------------------------------------
// Madre: 
//-----------------------------------------------------------
let genMadre = () => {
    let madre = {};
    let edadbase = util.edadesBase[util.rnum(0,3)];
    let dninum = edadbase === 25 ? 30 : edadbase === 35 ? 25 : edadbase === 45 ? 15 : 10;
    madre.apellido = afam();
    madre.nombre = getNombre('F');
    madre.sexo = 'F';
    madre.edad = edadbase +  util.plus();
    madre.dni = util.dni(dninum, dninum);
    madre.telefono = util.telefono();
    madre.email = madre.nombre + '.' + madre.apellido + '@' + nmai();
    return madre;
}
//-----------------------------------------------------------
// Hijo: 
//-----------------------------------------------------------
let genHijo = (familia, nacto) => {
    let hijo = {}
    let hsexo = util.sexo();
    let mill = nacto > 2014 ? 46 : nacto > 2012 ? 42 : nacto > 2010 ? 40 : 30;
    hijo.anionacto = nacto;
    hijo.apellido = familia.apellido;
    hijo.sexo = hsexo;
    hijo.nombre =  getNombre(hsexo);
    hijo.fnac = util.fnac(nacto, nacto, util.mes());
    hijo.telefono = util.telefono();
    hijo.email = hijo.nombre + '.' + hijo.apellido + '@' + nmai();

    hijo.dni = util.dni(mill, mill + 1);
    if (hijo.dni.indexOf('NaN') > 0) {
        console.log(familia);
        console.log(nacto)
    }
    return hijo;
}

//------------------------------------------------------------------
// Mongo, pero usando el modulo
//------------------------------------------------------------------
let cargar1000 = () => {
    for (let i = 0; i < 1000; i++) {
        let flia = new dbFam.Familia(genFlia());
        flia.save( (err) => err ? console.log(err) : null);
    }
}

//cargar1000();

let o = dbFam.getOne();
console.log(o.model.schema.obj.apellido);

mongo.close();