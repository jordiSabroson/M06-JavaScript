/*
 * Els codis de barres a Europa poden tenir 8 o 13 dígits (EAN8, EAN13) la xifra més a la dreta està calculada segons una
 * fòrmula on els dígits en posició imparella es multipliquen per 3 i els parells per 1.
 * Exemple: 2x3 + 5x1 + 9x3 + 3x1 + 8x3 + 5x1 + 6x3 = 88
 * El dígit final és la diferència entre el número calculat i el proper múltiple de 10
 * 65839522 -> Correcte
 * 65839521 -> Incorrecte
 */

function barras() {
    // Preguntem el número de columnes
    let num = parseInt(prompt("Introdueix un número EAN8 o EAN13: "));

    // Validar que els valors demanats siguin números
    while (isNaN(num) && num.toString().length != 8 && num.toString().length != 13) {
        alert("número no vàlid...");
        num = prompt("Introdueix un número EAN8 o EAN13: ");
    }

    
}