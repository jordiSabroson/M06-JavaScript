/*
 * Programa que demana un preu a pagar i uns diners per pagar aquest preu.
 * Després retorna la combinació del mínim canvi en bitllets, monedes i cèntims d'euro.
 */

function canvi() {
    let preu = parseInt(prompt("Digues un preu: ")),
        diners = parseInt(prompt("Ara digues quan pagaràs (ha de ser més que el preu): "));

    while (isNaN(preu) || isNaN(diners)) {
        alert("número no vàlid...");
        preu = parseInt(prompt("Digues un preu: ")),
        diners = parseInt(prompt("Ara digues quan pagaràs (ha de ser més que el preu): "));
    }

    

}