// Funció que rep una quantitat de dies i ho converteix a anys, mesos i dies
function convertirDies() {
    let dies = parseInt(prompt("Introdueix una quantitat de dies: "));

    let anys = Math.floor(dies / 365);
    let residuDies = dies % 365;
    let mesos = Math.floor(residuDies / 30);
    let residuDiesMesos = residuDies % 30;

    console.log(dies + " número de dies són: " + "\n\t" + anys + " anys" + "\n\t" + mesos + " mesos" + "\n\t" + residuDiesMesos + " dies");
}
