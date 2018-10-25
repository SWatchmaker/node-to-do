const fs = require('fs');

let listaPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listaPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) { throw new Error('No se puedo guardar la tarea en la DB.', err); }
    });
}

const cargarDB = () => {
    try {
        listaPorHacer = require('../db/data.json');
    } catch (e) {
        listaPorHacer = [];
    }
}

const crear = (descripcion) => {
    cargarDB();
    let toDo = {
        descripcion,
        completado: false
    };

    listaPorHacer.push(toDo);
    guardarDB();
    return listaPorHacer;
}

const getLista = () => {
    cargarDB();
    return listaPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listaPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listaPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let index = listaPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listaPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    getLista,
    actualizar,
    borrar
}