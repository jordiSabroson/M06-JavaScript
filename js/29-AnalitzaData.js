/*
 * Obtenir la data actual i mostrar:
 *      1) Avui és dd del mm del aaaa
 *      2) Han passat n setmanes de l'any
 *      3) El % de dies transcorreguts és nn,nn%
 *      4) Queden un nn.nn% de dies a l'any
 *      5) Ara són les hh:mm:ss
 *      6) El % del dia que ha passat és nn,nn%
 *      7) Queda un % de nn,nn% del dia
*/

function analitzarData() {
    // Data del dia d'avui
    let data = new Date();

    // Data del 1 de gener d'aquest any
    let dataInici = new Date(data.getFullYear(), 0, 1);

    // Data del dia d'avui però amb les hores, minuts, segons i milisegons a 0
    let dataAvui = new Date();
    dataAvui.setHours(0);
    dataAvui.setMinutes(0);
    dataAvui.setSeconds(0);
    dataAvui.setMilliseconds(0);

    // Exercici 1
    document.write("1) Avui és " + data.getDate() + " del " + (data.getMonth() + 1) + " del " + data.getFullYear() + "<br>");

    // Exercici 2
    let numSetmanes = Math.round(Math.abs((dataInici.getTime() - data.getTime()) / 604800000));
    document.write("2) Han passat " + numSetmanes + " setmanes  de l'any<br>");

    // Exercici 3
    let numDies = Math.abs((dataInici.getTime() - data.getTime()) / 86400000);
    let percentatgeDies = ((numDies * 100) / 365).toFixed(2);
    document.write("3) El % de dies transcorreguts és " + percentatgeDies + "%<br>");

    // Exercici 4
    let percentatgeQueda = (100 - percentatgeDies).toFixed(2);
    document.write("4) Queda un " + percentatgeQueda + "% de dies a l'any<br>");

    // Exercici 5
    document.write("5) Ara són les " + data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds() + "<br>");

    //Exercici 6
    let diaPassat = Math.abs((dataAvui.getTime() - data.getTime()));
    let perDia = ((diaPassat * 100) / 86400000).toFixed(2);
    document.write("6) El % del dia que ha passat és " + perDia + "%<br>");

    // Exercici 7
    let diaQueda = (100 - perDia).toFixed(2);
    document.write("7) Queda un % de " + diaQueda + " del dia d'avui");
}