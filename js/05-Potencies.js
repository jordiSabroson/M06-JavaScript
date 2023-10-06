/*
 * Programa que demana un número base i un exponent per calcular la seva potència.
 */

let base = prompt("Número base per calcular la seva potència: ");
let exponent = prompt("Número exponent per calcular sobre la base");
let auxBase = base;

console.time();
console.log("Resultat amb el Math pow:  " + Math.pow(base, exponent));
console.timeEnd();

console.time();
for (let i = 1; i < exponent; i++)
    auxBase *= base;
console.log("Resultat amb el bucle: " + auxBase);
console.timeEnd();


