/*
 * Funció que demana tres números i realitza la mitja, la mitjana sobre els números
 * i mostra quin és el major i el menor.
 */

function calcular() {
    let num1 = parseInt(prompt("Número 1: "));
    let num2 = parseInt(prompt("Número 2: "));
    let num3 = parseInt(prompt("Número 3: "));

    let numeros = [num1, num2 , num3];
    numeros.sort;

    console.log("Mitja de "+num1+ " "+num2+ " "+ num3+": "+ (num1+num2+num3)/3);
    console.log("Mitjana de "+num1+ " "+num2+ " "+ num3+": "+ numeros[1]);
    console.log("Número major de "+num1+ " "+num2+ " "+ num3+": "+ numeros[2]);
    console.log("Número menor de "+num1+ " "+num2+ " "+ num3+": "+ numeros[0]);
}
