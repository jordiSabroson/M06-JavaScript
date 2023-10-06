function boto() {
    alert("la babaji");
}

function boto2() {
    alert("o la fortinait");
}

function cuidao() {
    alert(document.getElementById("cosa").value);
}

function taula() {
    let numbru = document.getElementById("cosa2").value;
    if (isNaN(numbru)) {
        alert("Introdueix un numbru vàlid !!");
    } else {
        for (let i = 1; i <= 10; i++)
            console.log(numbru * i);
    }
}

