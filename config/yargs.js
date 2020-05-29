const archivo = {
    demand: true,
    alias: "f",
    desc: "Path csv",
};
const pais = {
    alias: "c",
    default: "ECU",
    desc: "Codigo de pais",
};
const anio = {
    default: "1960",
    alias: "y",
    desc: "Año",
};
const argv = require("yargs")
    .command("mostrar", "Imprime en pantalla el resultado de la búsqueda", {
        archivo,
        pais,
        anio
    })
    .command("guardar", "Genera un archivo de texto con el resultado de la búsqueda", {
        archivo,
        pais,
        anio
    }).argv;
module.exports = {
    argv
};
//cambio