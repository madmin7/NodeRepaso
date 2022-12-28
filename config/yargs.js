

const argv = require('yargs')
                    .option( 'b', {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla de multiplicar'
                        })
                    .option( 'f', {
                        alias: 'fin',
                        type: 'number',
                        describe: 'Hasta que numero llega la tabla'
                        })
                    .option( 'l', {
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'Listar la tabla true|false'
                        })
                    .check(( argv, option ) => {
                        const { b, base, fin, f } = argv;
                        if ( isNaN(b) || isNaN(base) || isNaN(fin) || isNaN(f)){
                            throw new Error('La base y el fin tienen que ser de tipo numero!!');
                        }
                        return true;
                    })
                    .argv;

module.exports = argv;