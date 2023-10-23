/*
 * Obtenir un número a l'atzar del 1 al 100. L'usuari l'ha d'endevinar introduint un número i el programa anirà dient 
 * si el número és major o menor. Si l'usuari introdueix un 0 sortirà un "Game Over!" i sortirà del programa.
 * Quan l'usuari encerti el número el programa dirà en quants intents l'ha endevinat
 */

function endevina() {
    let rand = Math.floor(Math.random() * (100 - 1) + 1);
    let intents = 0;
    let num;
    while (num != rand) {
        num = parseInt(prompt("Endevina el número de l'1 al 100: "));
        if (num == 0) {
            alert("GAME OVER!");
            return;
        } else if (rand > num) {
            alert("El número secret és més GRAN!");
        } else if (rand < num) {
            alert("El número secret és més PETIT!")
        }

        intents++;
    }
    alert("Felicitats! El número era el " + rand + ". Has fet " + intents + " intents.");
}