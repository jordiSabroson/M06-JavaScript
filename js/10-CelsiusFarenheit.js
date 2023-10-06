/* Demanar una C o una F depenent de si són graus Celsius o Farenheit i demanar una temperatura en graus.
*  Després retornar la conversió a l'altra temperatura. 
*/

function temperatura() {
    let tipus;
    let temp;
    do {
        tipus = prompt("Introdueix una C o una F segons per convertir de l'una a l'altra: ");
        if (tipus.toUpperCase() != "C" && tipus.toUpperCase() != "F")
            alert("no és un valor correcte!");
    } while (tipus.toUpperCase() != "C" && tipus.toUpperCase() != "F");

    let graus = parseInt(prompt("Digues un número de graus de temperatura per convertir: "));

    // if per convertir de celsius a farenheit
    if (tipus.toUpperCase() == "C") {
        temp = graus * (9 / 5) + 32;
        console.log(graus + "ºC graus centígrads són " + temp + "ºF graus farenheit");

        // if per convertir de farenheit a celsius
    } else {
        temp = (graus - 32) / (9 / 5);
        console.log(graus + "ºF graus farenheit són " + temp + "ºC graus centígrads");
    }
}