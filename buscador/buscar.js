const fs = require("fs");
const contr = require("./control");
let tareaPorHAcer = [];

const mostrar = (file, country, year) => {
    contr.resultados(file, country, year).then(v => console.log(v)).catch(msg => console.log(msg.message));
};

const guardar = (file, country, year) => {
    contr.resultados(file, country, year).then(v => escribirarchivo(country, year, v).then(m => console.log(m))).catch(msg => console.log(msg.message));
};

const escribirarchivo = async(pais, anio, data) => {
    //let data = JSON.stringify(vect);
    fs.writeFile(`./resultados/${pais}-${anio}.txt`, data, (err) => {
        if (err) throw new Error("No se pudo grabar", err);
    });
    return `Archivo guardado exitosamente `
};

module.exports = {
    mostrar,
    guardar
}