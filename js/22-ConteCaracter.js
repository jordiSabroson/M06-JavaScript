/*
 * Demanar a l'usuari un text i un caràcter. Després s'ha de dir si el caràcter està contingut en el text de 2 a 4 vegades
 */

function conte() {
    let text = prompt("Introdueix un text: ");
    let lletra = prompt("Ara una lletra: ");
    let contador = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i] == lletra) {
            contador++;
        }
    }
    if (contador > 4 || contador < 2) {
        console.log("La lletra "+lletra+" NO apareix al text de 2 a 4 vegades");
    } else {
        console.log("La lletra "+lletra+" SI apareix al text de 2 a 4 vegades");
    }
}