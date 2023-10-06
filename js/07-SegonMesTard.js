//Demanar hores, minuts i segons i mostrar-ho un segon més tard
function unSegonMes() {
    let hora = parseInt(prompt("Digues una hora: "));
    let minut = parseInt(prompt("Digues un minut: "));
    let segon = parseInt(prompt("Digues un segon: "));

    let data = new Date();

    data.setHours(hora);
    data.setMinutes(minut);
    data.setSeconds(segon + 1);

    console.log(data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds());
}