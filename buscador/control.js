const colors = require("colors");
const fs = require("fs");
const csv = require("csv-parser");
let datos = [];

const lecturacsv4 = async(file) => {
    //let vector = [];
    const g = fs.createReadStream(file)
        .on("error", (err) => console.log(err)) // Abrir archivo
        .pipe(csv({ cast: true, delimiter: ';' }))
    for await (const row of g) {
        //console.log(g.length);
        for (let i = 4; i < 65; i++) {
            if (row[i] == "" || row[i] == " " || row[i] == "") {
                row[i] = "0";
            }
        }
        datos.push(row);
    }
    return 'Se ha terminado de leer el archivo 4';
};



let resultados = async(file, country, year) => {
    let doc = await lecturacsv4(file);
    //console.log("DOC", doc);
    //console.log(datos[4][0]);
    //console.log();
    let val = await validar(country, year);

    est = await calcula(country, year, datos);

    return est;
}

const validar = async(country, year) => {
    if (!Number(year)) {
        throw new Error(`año ${year} invalido`)
    }
    let i = 0;
    if (year < 1960 || year > 2019)
        throw new Error('Año no Encontrado')
    for (i = 4; i < datos.length; i++) {
        if (country === datos[i][1]) { break; }
    }
    if (i == datos.length)
        throw new Error('Codigo de Pais no encontrado')

}
const calcula = async(pais, anio, datos) => {
    for (var i = 4; i < datos.length; i++) {
        if (datos[i][1] === pais) {
            break;
        }
    }
    for (var j = 4; j < 65; j++) {
        if (datos[3][j] == anio) {
            break;
        }
    }
    men = ''
    men += `Datos : Personas que usan Internet (${datos[i][2]})`
    men += `\nPaís  : ${pais}`
    men += `\nAño   : ${anio}`
    men += `\nValor : ${Number(datos[i][j])}`
        /*
        console.log(`Datos : Personas que usan Internet (${datos[i][2]})`);
        console.log(`País  : ${pais}`);
        console.log(`Año   : ${anio}`);
        console.log(`Valor : ${Number(datos[i][j])}`);
        */
    return men;
};

module.exports = {
    resultados
};