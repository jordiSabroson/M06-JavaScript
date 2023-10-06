/*
 * Programa que demana un preu a pagar i uns diners per pagar aquest preu.
 * Després retorna la combinació del mínim canvi en bitllets, monedes i cèntims d'euro.
 */

function canvi() {
    let preu = parseFloat(prompt("Digues un preu: ")),
        diners = parseFloat(prompt("Ara digues quan pagaràs (ha de ser més que el preu): "));

    while (isNaN(preu) || isNaN(diners)) {
        alert("número no vàlid...");
        preu = parseFloat(prompt("Digues un preu: ")),
        diners = parseFloat(prompt("Ara digues quan pagaràs (ha de ser més que el preu): "));
    }

    console.log("Preu a pagar: "+preu+"\nQuantitat pagada: "+diners);

    let euros = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01];

    let canvi = diners - preu;
    canvi.toFixed(2);
    let residu = canvi;
    
    for (let i=0; i < euros.length; i++) {
        if(parseInt(canvi/euros[i]) > 0) {
            console.log(parseInt(canvi / euros[i])+" de "+euros[i]);
            canvi = canvi%euros[i];
        }
    }
    console.log("Total canvi: "+residu);

}