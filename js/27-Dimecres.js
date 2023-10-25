/*
 * Demanar a l'usuari dos anys entre 2000 i 2050 (per exemple 2004 i 2039) i dir el primer any entre els dos que comença 
 * en dimecres.
 */

function dimecres() {
    let any1 = parseInt(prompt("Digues un any entre 2000 i 2050: "));
    let any2 = parseInt(prompt("Ara digues un altre any entre 2000 i 2050: "));

    while (isNaN(any1) || isNaN(any2) || any1 < 2000 || any1 > 2050 || any2 < any1 || any2 > 2050) {
        alert("número no vàlid...");
        any1 = parseInt(prompt("Digues un any entre 2000 i 2050: "));
        any2 = parseInt(prompt("Ara digues un altre any entre 2000 i 2050: "));
    }

    // Variable per mantenir el valor del any1 ja que al imprimir-se dins del bucle sortia modificat
    let realAny1 = any1;

    // Formatar el any introduit en objecte data a l'1 de gener
    let data1 = new Date(any1, 0, 1);

    // Mètode per rebre el dia. Si és dimecres retorna un 3
    let dia1 = data1.getDay();

    // Bucle que itera entre l'interval dels anys introduits
    for (let i = any1; i <= any2; i++) {
        
        // Si el mètode getDay() retorna un 3, s'acaba el bucle i retorna el document write 
        if (dia1 == 3) {
            document.write("El primer any entre " + realAny1 + " i " + any2 + " que comença en dimecres és: " + any1);
            return;
        }

        // A cada iteració s'incrementa l'any 
        any1++;
        data1 = new Date(any1, 0, 1);
        dia1 = data1.getDay();
    }

    // Si s'acaba el bucle i no hi ha cap any es retorna això
    document.write("No hi ha cap any entre " + realAny1 + " i " + any2 + " que començi en dimecres");
}