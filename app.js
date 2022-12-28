const argv = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');


console.clear();

// const [ , , argv3 = 'base=5' ] = process.argv;
// const [ , base ] = argv3.split('=');

const { base, fin, listar } = argv;

crearArchivo(base, fin, listar)
        .then( nombreArchivo => console.log(nombreArchivo.red, 'creado' ))
        .catch( err => console.log( err ))






