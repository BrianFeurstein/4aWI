function rechnen() {
    let outputnumber = document.getElementById("outputnumber").innerHTML = "";
    let größe = parseInt(document.getElementById("größe").value);
    let gewicht = parseInt(document.getElementById("gewicht").value);
    let berechnung = ((größe * 1.43) / gewicht) - 3.4;
    let number = Math.round(berechnung);



    if (berechnung > 0) {

        let output = document.getElementById("output").innerHTML = "positiv";

        for (i = 0; i <= number; i++) {

            let outputnumber = document.getElementById("outputnumber").innerHTML += i + "  ";

        }
    } else if (berechnung < 0) {
        let output = document.getElementById("output").innerHTML = "negativ";
        for (i = 0; i >= number; i--) {

            let outputnumber = document.getElementById("outputnumber").innerHTML += i + "  ";

        }

    } else {
        let outputnumber = document.getElementById("outputnumber").innerHTML = 0;
    }







}