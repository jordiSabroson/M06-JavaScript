/* 
 * El dia de nitvella, en Pep vol saber quan falta per que arribi mitjanit.
 * Demanar una hora en format hh:mm i ficar el número de minuts fins la mitjanit. Si l'hora introduida és 00:00,
 * dir: "Bon any nou !"
 * (Exemple: 23:45 --> 15, 00:01 --> 1439, 21:30 --> 150)
 */
function mitjanit() {
    let gora = prompt("Introdueix una hora (HH:MM): ");
    let arr;
    if (gora == "00:00") {
        document.write("Bon any nou !");
    } else {
        arr = gora.split(":");
    }
    let hora = 23 - arr[0];
    let minuts = 60 - arr[1];
    minuts = minuts + hora * 60;

    document.write("Queden " + minuts + " minuts fins mitjanit.");
}