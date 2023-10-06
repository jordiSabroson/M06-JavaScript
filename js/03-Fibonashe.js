/*
 * Funció que rep un número i mostra el següent en la successió de Fibonacci.
 */

function fibonanci(n) {
    let a = 1;
    let b = 1;
    console.log(a);
    console.log(b);
    for (let i = 2; i < n; i++) {
        let c = a + b;
        a = b;
        b = c;
        console.log(b);
    }
    
}

let n = prompt("Número de fibonaashe: ");
fibonanci(n);
