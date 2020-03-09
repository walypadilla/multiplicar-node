// requiered

// const fs = require('fs');

// const fs = require('expres'); no existe en la libreria de node, es un paquete que se instala que alguien mas hizo
// const fs = require('./fs'); son archivos que nosotros escribimos y tienen que estar en nuestro proyecto
const argv = require('./config/yargs').argv;
var colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch( comando ) {
    case 'listar':
        listarTabla( argv.base, argv.limite);
    break;
    
    case 'crear':
        crearArchivo( argv.base, argv.limite )
        .then( archivo => console.log(`Archivo creado: ${ archivo }` .green))
        .catch( e => console.log(e) );
    break;

    default:
        console.log('Comando no reconocido');
}



let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];



// let dato = '';

// for ( let i = 1; i <=10; i++) {
//     dato += (`${ base } * ${ i } = ${ base * i }\n`);
// }

// const data = new Uint8Array(Buffer.from(dato));
// fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {

//   if (err) throw err;

//   console.log(`El archivo tabla-${ base }.txt ha sido creado`);
// });

