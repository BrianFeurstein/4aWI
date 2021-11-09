//Aufgabe 2
let sum = 0;
for (i = 0; i < 101; i++) {
    if (i % 2 == 0) {
        sum += i;
    }
}
console.log(sum);

//Aufgabe 1
let x = "";
let o = "";

for (let a = 0; a < 4; a++) {
    if (a % 2 == 0) {
        console.log("X  X  X");
    } else {
        console.log("o o o o");
    }
}

//Aufgabe 3
let X = "";
let O = "";

for (let a = 0; a < 5; a++) {
    if (a % 2 == 0) {
        console.log("X x X x X");
    } else {
        console.log("X         X");
    }
}