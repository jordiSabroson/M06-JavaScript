/*
 * Funció que demana a l'usuari un número de files i columnes per crear a la pàgina html una taula dinàmica
 * que amb el número corresponent de files i columnes.
 */

function taula() {
    // Preguntem les files i les columnes que tindrà la taula
    let files = parseInt(prompt("Digues un número de files: ")),
        columnes = parseInt(prompt("Ara un número de columnes: "));

    // Validar que els valors demanats siguin números
    while (isNaN(files) || isNaN(columnes)) {
        alert("número no vàlid...");
        files = parseInt(prompt("Digues un número de files: ")),
        columnes = parseInt(prompt("Ara un número de columnes: "));
    }

    // Crear un element <table> i <tbody> dins de l'HTML
    let tau = document.createElement("table");
    let tauBody = document.createElement("tbody");

    // Bucle per crear totes les cel·les
    for (let i = 0; i < files; i++) {

        // Variable que crea les files
        let row = document.createElement("tr");

        for (let a = 0; a < columnes; a++) {
            // Variable que crea les cel·les de la taula junt amb el text que omplirà la cel·la
            let cell = document.createElement("td");
            let cellText = document.createTextNode("cel·la a la fila "+i+", columna "+a);

            // Mètode per introduir el text dins la cel·la
            cell.appendChild(cellText);

            // Mètode per introduir la cel·la dins la fila (row)
            row.appendChild(cell);
        }

        // Mètode que afegeix la fila dins el table Body
        tauBody.appendChild(row);
    }

    // Mètode que posa el table Body (<tbody>) dins l'element table (<table>) de l'HTML
    tau.appendChild(tauBody);

    // Mètode que afegeix l'element <table> dins del <body> de l'HTML
    document.body.appendChild(tau);

    // Mètode que modifica el border de la taula a 2 de gruix perquè es pugui veure
    tau.setAttribute("border", "2");
}