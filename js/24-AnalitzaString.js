/*
 * Demanar un text i mostrar: 
 *      - El text en majúscules
 *      - en minúscules
 *      - longitud total
 *      - nombre de paraules
 *      - vocals que conté
 *      - el número de vocals
 *      - restar la primera lletra de la frase per línea (Ex: hola, ola, la, a, ), pero en vertical
 * Mostrar els resultats amb document.write
 */

function patxuru() {
    let text = prompt("Introdueix un text");

    // Expressió regular que conté totes les vocals, la g vol dir global i la i fa que ignori majúscules o minuscules
    let vocals = /[àáäaèéëeìíïiòóöoùúüu]/gi;

    let a = 0, e = 0, I = 0, o = 0, u = 0;

    document.write("TEXT ORIGINAL:  " + text + "<br>");
    document.write("1) En majúscules:  " + text.toUpperCase() + "<br>");
    document.write("2) En mínuscules:  " + text.toLowerCase() + "<br>");
    document.write("3) Longitud total: " + text.length + "<br>");
    document.write("4) Número de paraules: " + text.split(" ").length + "<br>");

    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) == "a")
            a++;
        else if (text.charAt(i) == "e")
            e++;
        else if (text.charAt(i) == "i")
            I++;
        else if (text.charAt(i) == "o")
            o++;
        else if (text.charAt(i) == "u")
            u++;
    }

    document.write("5) Vocals que conté: " + "<br>A: " + a + "<br>E: " + e + "<br>I: " + I + "<br>O: " + o + "<br>U: " + u + "<br>");
    document.write("6) Número de vocals: " + text.match(vocals).length + "<br>");
    document.write("7) La frase en " + text.length + " línies on cada línea li falta una lletra al davant: " + "<br>");
    for (let i = 0; i < text.length; i++) {
        document.write(text.substring(i) + "<br>");
    }

}