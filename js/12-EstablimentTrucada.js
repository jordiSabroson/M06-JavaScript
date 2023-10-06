/*
 * Una companyia telefònica cobra 10 cèntims per trucada i 5c per minut.
 * Demanar hores, minuts i segons i dir el cost de la trucada. 
 */

function trucada() {
    let hores = parseInt(prompt("Introduchi l'hori perfavori: ")),
        minuts = parseInt(prompt("Ara li minuti: ")),
        segons = parseInt(prompt("I per ultimi, li secondi: "));

    while (isNaN(hores) || isNaN(minuts) || isNaN(segons)) {
        alert("Perfavori, introduchi a nomro valito...");
        hores = parseInt(prompt("Introduchi l'hori perfavori: "));
        minuts = parseInt(prompt("Ara li minuti: "));
        segons = parseInt(prompt("I per ultimi, li secondi: "));
    }

    minuts = minuts + (hores * 60);
    minuts = Math.floor(minuts + (segons / 60));
    console.log("Durada de la trucada: " + minuts + " minuts");

    let establiment = 10;

    let preuCentims = establiment + (5 * minuts);

    let preuEuros = Math.floor(preuCentims / 100);
    preuCentims = Math.floor(preuCentims % 100);

    console.log("Costarà: " + preuEuros + "," + preuCentims + "€");

}