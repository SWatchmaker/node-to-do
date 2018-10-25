const crear_c = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
}

const act_c = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        alias: 'c',
        default: true
    }
}

const del_c = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
}

const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea.', crear_c)
    .command('actualizar', 'Actualiza una tarea existente.', act_c)
    .command('borrar', 'Borra una tarea de la lista.', del_c)
    .help()
    .argv;

module.exports = {
    argv
}