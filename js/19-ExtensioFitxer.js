/*
 * Es demana el nom d'un arxiu a l'usuari i es torna per consola l'extensió del arxiu
 */

function extensio() {
    let fitxer = prompt("Digues un nom d'un fitxer: ");

    // El mètode split separa un string en un array on cada lletra és un substring, però si li passem un paràmetre com per exemple
    // el ., doncs separa l'string per punts. Per exemple si li passem fitxer.txt.jpg l'array queda: [fitxer, txt, jpg]
    // El mètode .pop() agafa l'últim element d'un array i el retorna.
    let ex = fitxer.split('.').pop();
    console.log("El fitxer té la extensió: "+ex);
}