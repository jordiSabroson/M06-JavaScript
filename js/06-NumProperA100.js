// Demanar dos números i retornar quin es més proper a 100
function proper100() {
    let un = prompt("Digues un número: ");
    let dos = prompt("Digues un altre número: ");

    if ((Math.abs)(100 - un) > (Math.abs)(100 - dos))
        console.log("El número " + dos + " és més proper a 100");
    else if ((Math.abs)(100 - un) < (Math.abs)(100 - dos))
        console.log("El número " + un + " és més proper a 100");
    else
        console.log("Els dos números estan a la mateixa distància de 100");
}


