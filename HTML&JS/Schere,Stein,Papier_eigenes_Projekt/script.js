//Schere = 1
//Stein = 2
//Papier = 3

var punkte_player = 0;
var punkte_enemy = 0;



function random_number_generator() {
    let random_number = Math.floor(Math.random() * (4 - 1)) + 1;
    return random_number;

}

function schere() {

    let number = random_number_generator();
    if (number == 1) {

        document.getElementById("output").innerHTML = "Ihr habt beide Schere gewählt!";
    } else if (number == 2) {

        document.getElementById("output").innerHTML = "Der Gegner hat dich geschlagen";
        punkte_enemy++;
        document.getElementById("punkte_enemy").innerHTML = punkte_enemy;

    } else {

        document.getElementById("output").innerHTML = "Du hast den Gegner besiegt";
        punkte_player = punkte_player + 1;
        document.getElementById("punkte_player").innerHTML = punkte_player;

    }
}

function stein() {
    let number = random_number_generator();
    if (number == 1) {
        document.getElementById("output").innerHTML = "Du hast den Gegner besiegt";
        punkte_player++;
        document.getElementById("punkte_player").innerHTML = punkte_player;

    } else if (number == 2) {

        document.getElementById("output").innerHTML = "Ihr habt beide Stein gewählt";
    } else {

        document.getElementById("output").innerHTML = "Der Gegner hat dich besiegt";
        punkte_enemy++;
        document.getElementById("punkte_enemy").innerHTML = punkte_enemy;

    }

}

function papier() {

    let number = random_number_generator();
    if (number == 1) {

        document.getElementById("output").innerHTML = "Der Gegner hat dich geschlagen";
        punkte_enemy++;
        document.getElementById("punkte_enemy").innerHTML = punkte_enemy;
    } else if (number == 2) {

        document.getElementById("output").innerHTML = "Du hast den Gegner besiegt";
        punkte_player++;
        document.getElementById("punkte_player").innerHTML = punkte_player;

    } else {

        document.getElementById("output").innerHTML = "Ihr habt beide Stein gewählt";
    }
}