document.getElementById("addInputfield").addEventListener("click", function() {

    newInputField();

});

document.getElementById("deleteInputfields").addEventListener("click", function() {
    deleteInputfields();
});

document.getElementById("addToCart").addEventListener("click", function() {
    addToCart();
});

function addToCart() {

}

function deleteInputfields() {
    document.getElementById("inputfields").innerHTML = "";
}

function newInputField() {
    var newInput = document.createElement("input");
    document.getElementById("inputfields").appendChild(newInput);
}