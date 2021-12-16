function create() {
    let inputfield_von = parseInt(document.getElementById("von").value);
    let inputfield_bis = parseInt(document.getElementById("bis").value);


    for (i = inputfield_von; i <= inputfield_bis; i++) {
        let output = document.getElementById("output").innerHTML = i;


    }


}