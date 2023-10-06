
// Demanar any, mes, dia i comprovar que és vàlida

function dataValida() {

    let any = parseInt(prompt("Digues un any: ")),
        mes = parseInt(prompt("Digues un mes (en número): ")),
        dia = parseInt(prompt("Digues un dia: "));

    let data = new Date(any, mes - 1, dia);

    if (data.getFullYear() === any && data.getMonth() === mes - 1 && data.getDate() === dia) {
        console.log("Data introduïda: " + data.toISOString().split('T')[0]);
    } else {
        console.log("Aquesta data no és vàlida");
    }
}