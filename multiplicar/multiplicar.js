const fs = require('fs');
var colors = require('colors');

let listarTabla = ( base, limite = 10) => {
    console.log('=============================='.green);
    console.log(`===tabla de ${ base }====`.green);
    console.log('=============================='.green);

    for ( let i = 1; i <=limite; i++) {
        console.log( `${ base } * ${ i } = ${ base * i }\n`.green);
    }

}

let crearArchivo = ( base, limite = 10 ) => {
    return new Promise( (resolve, reject) => {

        if( !Number(base) ) {
            reject(`El valor introducido ${ base } no es un numero`.red);
            return; // se pone return para que ya no siga
        }

        let dato = '';

        for ( let i = 1; i <=limite; i++) {
            dato += (`${ base } * ${ i } = ${ base * i }\n`);
        }

        const data = new Uint8Array(Buffer.from(dato));
        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {

        if (err) 
            reject(err);
        else 
            resolve(`tabla-${ base }-al-${ limite }.txt`);

        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}

