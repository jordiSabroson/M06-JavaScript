/*
 * Demanar 2 strings i comprovar si tenen la mateixa longitud
 */

function longitud() {
    let text1 = prompt("1 String: "), text2 = prompt("2 String: ");

    if (text1.length == text2.length)
        console.log("Les dues strings tenen la mateixa longitud");
    else
        console.log("Aquestes strings tenen longituds diferents");
}