const argv = require('./config/yargs').argv;
const busca = require('./buscador/buscar')
let comando = argv._[0];
//console.log(comando);
switch (comando) {
    case 'mostrar':
        //console.log(argv.archivo);
        //console.log(argv.country);
        //console.log(argv.year);
        busca.mostrar(argv.archivo, argv.pais, argv.anio);
        //control.publicar(argv.file, argv.country, argv.year)
        break;
    case 'guardar':
        busca.guardar(argv.archivo, argv.pais, argv.anio);
        //control.guardar(argv.file, argv.country, argv.year, argv.out);
        break;
    default:
        console.log('Comando no reconocido');
}