let year = () => new Date().getFullYear()
let rnum = (l,h) => Math.floor(Math.random() * (h - l + 1) + l);
let nhijos = () => rnum(1,4)
let sexo = () => rnum(1,2) == 1 ? 'F' : 'M'

let edadesBase = [25, 35, 45, 55];

function lpad(num, size) {
    let s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

let millon = (d,h) => lpad(rnum(d,h),2)
let mil = () => lpad(rnum(1,999),3)
let cien = () => lpad(rnum(1,999),3)
let dni = (d,h) => millon(d,h) + mil() + cien()

let anio = (d,h) => rnum(d,h)
let mes = () => rnum(1,12)
let dia = (mes) => mes == 2 ? lpad(rnum(1,28),2) : mes == 4 || mes == 6 || mes == 9 ? lpad(rnum(1,30),2) : lpad(rnum(1,31),2)
let fnac = (d,h,m) => lpad(anio(d,h),4) + '-' + lpad(m,2) + '-' + dia(m)

let telefono = () => lpad(rnum(100,999),3) + '-' + lpad(rnum(100,999),3) + '-' + lpad(rnum(1,9999),4) 

let plus = () => rnum(0,1) == 1 ? 4 : -4

//-----------------------------------------------------
let anios = [
    { anio: 2000, dni: 45, ciclo: 'secundario', nivel: 6 },
    { anio: 2001, dni: 45, ciclo: 'secundario', nivel: 5 },
    { anio: 2002, dni: 45, ciclo: 'secundario', nivel: 4 },
    { anio: 2003, dni: 46, ciclo: 'secundario', nivel: 3 },
    { anio: 2004, dni: 46, ciclo: 'secundario', nivel: 2 },
    { anio: 2005, dni: 46, ciclo: 'secundario', nivel: 1 },
    { anio: 2006, dni: 47, ciclo: 'primario', nivel: 1 },
    { anio: 2007, dni: 47, ciclo: 'primario', nivel: 2 },
    { anio: 2008, dni: 47, ciclo: 'primario', nivel: 3 },
    { anio: 2009, dni: 48, ciclo: 'primario', nivel: 4 },
    { anio: 2010, dni: 48, ciclo: 'primario', nivel: 5 },
    { anio: 2011, dni: 48, ciclo: 'primario', nivel: 6 },
    { anio: 2012, dni: 49, ciclo: 'jardin', nivel: 1 },
    { anio: 2013, dni: 49, ciclo: 'jardin', nivel: 2 }
]

let objedad = {
    jardin : {
        hijo : { edad : {desde: 4, hasta: 5}, dni: { desde: 50, hasta: 52} },
        padre : { edad : {desde: 25, hasta: 35}, dni: { desde: 30, hasta: 32} },
        madre : { edad : {desde: 23, hasta: 30}, dni: { desde: 31, hasta: 33} }
    },
    primario : {
        hijo : { edad : {desde: 6, hasta: 12}, dni: { desde: 40, hasta: 46} },
        padre : { edad : {desde: 28, hasta: 38}, dni: { desde: 34, hasta: 38} },
        madre : { edad : {desde: 26, hasta: 36}, dni: { desde: 31, hasta: 33} }
    }
}
//--------------------------------------------------------
exports.year = year;
exports.rnum = rnum;
exports.nhijos = nhijos;
exports.sexo = sexo;
exports.edadesBase = edadesBase;
exports.millon = millon;
exports.mil = mil;
exports.cien = cien;
exports.dni = dni
exports.mes = mes;
exports.fnac = fnac;
exports.telefono = telefono;
exports.plus = plus;