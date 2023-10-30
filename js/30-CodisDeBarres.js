/*
 * Els codis de barres a Europa poden tenir 8 o 13 dígits (EAN8, EAN13) la xifra més a la dreta està calculada segons una
 * fòrmula on els dígits en posició imparella es multipliquen per 3 i els parells per 1.
 * Exemple: Número 25938562 -> 2x3 + 5x1 + 9x3 + 3x1 + 8x3 + 5x1 + 6x3 = 88. Fins a 10 van 2, que és l'ultim dígit (digit de control)
 * El dígit final és la diferència entre el número calculat i el proper múltiple de 10
 * 65839522 -> Correcte
 * 65839521 -> Incorrecte
 */

function barras() {
    // Preguntem el número de columnes
    let num = prompt("Introdueix un número EAN8 o EAN13: ");

    // Validar que els valors demanats siguin números
    while (isNaN(num) || num.length > 13) {
        alert("Número no vàlid. Introdueix un número EAN8 o EAN13: ");
        num = prompt("Introdueix un número EAN8 o EAN13: ");
    }

    // Funció que afegeix zeros a l'esquerra del codi si és més petit de 8 o de 13
    function addLeftZeroPadding(codi, max) {

        // El mètode padStart agafa el valor max que és la distància que tindrà la string i si no la té l'omple de zeros a l'esquerra
        return String(codi).padStart(max, '0');
    }

    // IF per si el número és més petit o igual a 8 o més petit o igual a 13
    if (num.length <= 8) {
        num = addLeftZeroPadding(num, 8);
    } else if (num.length <= 13) {
        num = addLeftZeroPadding(num, 13);
    }

    // Codi sense el dígit de control
    let ean = num.slice(0, -1);

    // Últim digit del codi (dígit de control)
    let digitControl = num.substring(num.length - 1);

    // Funció que comprova si el codi EAN és vàlid
    function comprovaEAN(codi) {
        let valor = 0;

        // Si és EAN8, recorre cada dígit i el multiplica per 3 i per 1
        if (num.length <= 8) {
            for (let i = 0; i < codi.length; i++) {
                valor += codi.charAt(i) * ((i % 2 == 0) ? 3 : 1);
            }

        // Si és EAN13, recorre cada dígit i el multiplica per 1 i per 3
        } else if (num.length <= 13) {
            for (let i = 0; i < codi.length; i++) {
                valor += codi.charAt(i) * ((i % 2 == 0) ? 1 : 3);
            }
        }

        // Operació per restar 10 al residu del valor extret
        let checkDigit = 10 - (valor % 10);

        // Si el valor resultant és 10, es converteix a 0
        if (checkDigit == 10) {
            checkDigit = 0;
        }
        return checkDigit;
    }

    // Si el resultat de la funció és igual al dígit de control, significa que el codi EAN és vàlid
    if (comprovaEAN(ean) == digitControl) {
        console.log("El codi " + num + " SI és correcte");
    } else {
        console.log("El codi " + num + " NO és correcte");
    }
}