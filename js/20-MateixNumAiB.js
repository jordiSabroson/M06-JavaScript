/*
 * Demanar un text a l'usuari i dir si té el mateix número de lletres A i B 
 */

function aIb() {
    let text = prompt("Introdueix un text per saber si té el mateix nombre de lletres a i b");
    let a = 0, b = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i].toUpperCase() == "A")
            a++;
        else if (text[i].toUpperCase() == "B")
            b++;
    }

    if (a == b)
        console.log("El text té el mateix nombre de lletres A i B" + "\n\t· Lletres A: " + a + "\n\t· Lletres B: " + b);
    else if (a < b)
        console.log("El text té més lletres B" + "\n\t· Lletres A: " + a + "\n\t· Lletres B: " + b);
    else
        console.log("El text té més lletres A" + "\n\t· Lletres A: " + a + "\n\t· Lletres B: " + b);
}