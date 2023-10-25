/*
 * Demanar una paraula i dir si és pentavocàlica, és a dir que té les 5 vocals.
 */

function pentavocal() {
    let paraula = prompt("Digues una paraula per veure si té les 5 vocals: ");

    // Expressió regular amb cada vocal amb tots els accents i dièresis
    let vocals = [/[àáäa]/gi, /[èéëe]/gi, /[ìíïi]/gi, /[òóöo]/gi, /[ùúüu]/gi];

    // El bucle itera sobre la longitud de les vocals
    for (let i = 0; i < vocals.length; i++) {

        // El mètode .match retorna true si la paraula coincideix amb les vocals. Si en acabar d'iterar no hi ha cap
        // coincidència, retorna false i s'executa l'else.
        if (paraula.match(vocals[i])) {
            continue;
        } else {
            document.write("La paraula" + paraula + " NO és pentavocàlica.");
            return;
        }
    }

    // Si el bucle ha iterat fins al final vol dir que ha donat true tota l'estona i per tant la paraula té totes les vocals.
    document.write("La paraula " + paraula + " SI és pentavocàlica.");
}