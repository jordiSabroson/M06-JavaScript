/* Demanar un número decimal i utilitzant divisions, restes, bucles, etc, convertir el número
 * a hexadecimal, octal i binari.
 */

function conversio() {
    let decimal = parseInt(prompt("Digues un número decimal per convertir: "));

    while (isNaN(decimal)) {
        decimal = parseInt(prompt("Introdueix un número vàlid: "));
    }

    function aBinari(decimal) {
        let binari = '';

        if (decimal == 0)
            return "0";

        while (decimal > 0) {
            binari = (decimal % 2) + binari;
            decimal = Math.floor(decimal / 2);
        }
        return binari;
    }

    function aOctal(decimal) {
        let octal = 0, i = 0;

        if (decimal == 0)
            return "0";

        while (decimal > 0) {
            let residu = decimal % 8;
            octal = octal + (residu * Math.pow(10, i++));
            decimal = Math.floor(decimal / 8);
        }
        return octal;
    }

    function aHexadecimal(decimal) {
        let hexDigits = "0123456789ABCDEF",
            hexa = "";

        if (decimal == 0)
            return "0";

        while (decimal > 0) {
            hexa = hexDigits[decimal % 16] + hexa;
            decimal = decimal >> 4;
        }
        return hexa;
    }

    console.log("-- NÚMERO: " + decimal);
    console.log("\t- En binari: " + aBinari(decimal));
    console.log("\t- En octal: " + aOctal(decimal));
    console.log("\t- En hexadecimal: " + aHexadecimal(decimal));
}