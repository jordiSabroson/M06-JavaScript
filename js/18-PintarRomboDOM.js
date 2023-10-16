/*
 * Funció que demana a l'usuari el número de columnes que tindrà una taula. A partir d'aquest número (per exemple 5), 
 * crear una taula de 5 columnes i pintar la fila del mig sencera. Després crear un rombo a partir d'aquesta línea central.
 * Només s'admeten números senars.
 */

function rombo() {
    // Preguntem el número de columnes
    let num = parseInt(prompt("Introdueix el número columnes (ha de ser un número senar): "));

    // Validar que els valors demanats siguin números
    while (isNaN(num) || num % 2 == 0) {
        alert("número no vàlid...");
        num = parseInt(prompt("Introdueix el número de columnes (ha de ser un número senar): "));
    }

    // Crear un element <table> i <tbody> dins de l'HTML
    let tau = document.createElement("table");
    let tauBody = document.createElement("tbody");

    // Mètode per arrodonir la meitat del número cap amunt
    let meitat = num / 2;
    meitat = Math.ceil(meitat);

    // Funció per crear les cel·les
    function cell(tr, color) {
        // Variable que crea les cel·les de la taula junt amb el text que omplirà la cel·la
        let cell = document.createElement("td");
        let cellText = document.createTextNode(" ");

        // Mètode per introduir el text dins la cel·la
        cell.appendChild(cellText);

        // Mètode per introduir la cel·la dins la fila (row)
        tr.appendChild(cell);

        // Altura i amplada de les cel·les en píxels junt amb el color del fons que passem com a paràmetre
        cell.style.width = "20px";
        cell.style.height = "20px";
        cell.style.backgroundColor = color;
    }

    // Variables auxiliars pels bucles per pintar les caselles
    let enBlanc = 1, vermelles = 1, enBlancRombo = 1, vermellesRombo = num-2;

    // Bucle per crear totes les cel·les de la meitat superior
    for (let i = 0; i < meitat; i++) {

        // Variable que crea les files
        let row = document.createElement("tr");

        // Número de caselles blanques
        let blanques = (num - enBlanc) / 2;
        enBlanc += 2;

        // Bucle for per imprimir les caselles blanques a l'esquerra de la piràmide
        for (let a = 0; a < blanques; a++) {

            // Crida a la funció per crear les cel·les
            cell(row, "white");
        }

        // Bucle for per imprimir la piràmide
        for (let b = 0; b < vermelles; b++) {
            cell(row, "red");
        }

        // Increment del valor de caselles vermelles
        vermelles += 2;

        // Bucle for per imprimir les caselles blanques a la dreta de la piràmide
        for (let c = 0; c < blanques; c++) {
            cell(row, "white");
        }

        // Mètode que afegeix la fila dins el table Body
        tauBody.appendChild(row);
    }

    // Bucle per crear la part inferior del rombo
    for (let o=0; o < meitat-1; o++) {  // Comença a iterar pel valor de la meitat -1 ja que no volem repetir la línea del mig del rombo

        let row = document.createElement("tr");

        // Variable que agafa el valor introduit i el resta al valor introduit menys 1 al principi (exemple: 5 - (5-1) = 1)
        let blanquesRombo = (num - (num-enBlancRombo));
        // Increment del valor que es resta (exemple: 5 - (5-2) = 2)
        enBlancRombo +=1;
        
        for (let s = 0; s < blanquesRombo; s++) {
            cell(row, "white");
        }

        for (let f = 0; f < vermellesRombo; f++) {
            cell(row, "red");
        }
        vermellesRombo -= 2;

        for (let d = 0; d < blanquesRombo; d++) {
            cell(row, "white");
        }
        tauBody.appendChild(row);
    }


    // Mètode que posa el table Body (<tbody>) dins l'element table (<table>) de l'HTML
    tau.appendChild(tauBody);

    // Mètode que afegeix l'element <table> dins del <body> de l'HTML
    document.body.appendChild(tau);

    // Mètode que modifica els atributs de la taula perque es vegi
    tau.setAttribute("border", "1");
}