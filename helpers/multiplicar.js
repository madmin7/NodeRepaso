const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, fin = 10, listar = false ) => {
    try {
        console.log('=========================='.green);
        console.log(`   tabla del: ${ colors.blue( base ) }   `);
        console.log('=========================='.green);
    
        let salida = '';
        let consola = '';
    
        for( let i = 0; i <= fin; i++ ){
            const res = base * i;
            salida += `${ i } x ${ base } = ${ res }\n`.rainbow;
            consola += `${ i } x ${ base } = ${ res }\n`;
        }
        
        if( listar ) console.log(salida);
    
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, consola);
    
        return `Tabla-${ base }.txt`;
        
    } catch (err) {
        console.error(err);
    }
}

module.exports = {
    crearArchivo
}