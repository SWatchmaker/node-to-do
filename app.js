// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const toDo = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = toDo.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = toDo.getLista();
        for (let tarea of listado) {
            console.log('============= Tarea ============='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('================================='.green);
        }
        break;

    case 'actualizar':
        let actualizado = toDo.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = toDo.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido.');
}