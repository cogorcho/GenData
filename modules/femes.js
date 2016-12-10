let path = require('path');

let fs = require('fs');
let getall = (file) => fs.readFileSync(file||datafile, 'utf-8').split('\n').sort()
let print = () => console.log(getall(datafile));

let datafile = path.join(__dirname + '/data/feme.txt');

exports.getall = getall;
exports.print = print;
