let numFact = parseInt(prompt("Introduce un número"));
let resulFact = 0;
let i = numFact


// for (let i = 1; numFact >= i; i--) {
//     numFact * i
// }
do {
    resulFact = numFact * (i - 1);
}

while (i >= 2){
    // resulFact = (numFact * i);
    i--;
    resulFact = resulFact * (numFact * i - 1);
}

console.log(resulFact);

//numFact x numFact -1 x numFact -2...