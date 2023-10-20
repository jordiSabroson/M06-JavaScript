/*
 * Demanar una paraula i una posició. S'ha d'esborrar el caràcter de la posició especificada
 */

function treure() {
    let text = prompt("Digues una paraula");
    let pos = parseInt(prompt("Digues una posició de la paraula"));
    console.log(text);
    console.log(text.substring(0, pos - 1) + text.substring(pos, text.length));
}