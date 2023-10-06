/*
 * Funció que demana a l'usuari un número de files i columnes per crear a la pàgina html una taula dinàmica
 * que amb el número corresponent de files i columnes.
 */

function taula() {
    let files = parseInt(prompt("Digues un número de files: ")),
        columnes = parseInt(prompt("Ara un número de columnes: "));

    while (isNaN(files) || isNaN(columnes)) {
        alert("número no vàlid...");
        files = parseInt(prompt("Digues un número de files: ")),
        columnes = parseInt(prompt("Ara un número de columnes: "));
    }

    let body = document.getElementsByTagName("body")[0];

    let tau = document.createElement("table");
    let tauBody = document.createElement("tbody");

    for (let i = 0; i < files; i++) {
        let tr = document.createElement("tr");
        for (let a = 0; i < columnes; a++) {
            let td = document.createElement("td");
            td.appendChild(document.createTextNode("\u0020"))
            
        }
    }
}