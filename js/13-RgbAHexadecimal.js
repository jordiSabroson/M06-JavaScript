/*
 * Programa que demana tres números a l'usuari i els retorna en format hexadecimal 
 * i representant un color RGB.
 */

function rgb() {
    let primer = parseInt(prompt("Vue voule pushe une numegé: ")),
        segon = parseInt(prompt("A segue numegé: ")),
        tercer = parseInt(prompt("I per ultimi, a mua numegé: "));

    while (isNaN(primer) || isNaN(segon) || isNaN(tercer)) {
        alert("Vu vule puté a valide numegé...");
        primer = parseInt(prompt("Vue voule pushe une numegé: ")),
            segon = parseInt(prompt("A segue numegé: ")),
            tercer = parseInt(prompt("I per ultimi, a mua numegé: "));
    }

    primer = primer.toString(16).toUpperCase();
    segon = segon.toString(16).toUpperCase();
    tercer = tercer.toString(16).toUpperCase();

    // Funció que agafa la variable d i si és mes petita de 10, la retorna amb un 0 davant
    // Utilitza l'interrogant per fer un boolean ( si d < 10 retona true:false)

    function zero(d) {
        return (d < 10) ? '0' + d.toString() : d.toString();
    }

    console.log("#" + zero(primer) + zero(segon) + zero(tercer));

}