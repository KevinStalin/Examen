const fs = require("fs");
const contr = require("./control");
let tareaPorHAcer = [];

const mostrar = (file, country, year) => {
    contr.resultados(file, country, year).then(v => console.log()).catch(msg => console.log(msg.message));
};

const guardar = (file, country, year) => {
    contr.resultados(file, country, year).then(v => escribirarchivo(country, year, v).then(m => console.log(m))).catch(msg => console.log(msg.message));
};

const escribirarchivo = async(pais, anio, data) => {

    if (!fs.existsSync('resultados')) {
        fs.mkdirSync('resultados');
    }
    fs.writeFile(`./resultados/${pais}-${anio}.txt`, data, (err) => {
        if (err) throw new Error("No se pudo grabar", err);
    });
    //console.log(data);
    return `Archivo guardado exitosamente : resultados/${pais}-${anio}.txt`
};

module.exports = {
    mostrar,
    guardar
}