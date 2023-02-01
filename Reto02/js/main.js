let numAle = parseInt(prompt("Introduce cuántos números aleatorios quieres"));
let numMin = parseInt(prompt("Introduce el primer valor del rango"));
let numMax = parseInt(prompt("Introduce el segundo valor del rango"));

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

for (let i = 0; i < numAle; i++) {

console.log ("El número random generado es ", random(numMin, numMax));

}