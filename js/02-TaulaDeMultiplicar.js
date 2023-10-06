/*
 * Programa que rep un número i mostra la seva taula de multiplicar del 1 al 10 per consola.
 */

let num = prompt("Escriu un número: ");
if (isNaN(num)) {
    alert("Introdueix un numbru vàlid !!");
    location.reload();
} else {
    for (let i = 1; i <= 10; i++)
        console.log(`${num} * ${i} = ${num*i}`);
}
