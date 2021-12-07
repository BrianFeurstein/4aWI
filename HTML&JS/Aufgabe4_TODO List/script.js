const tasks = ["spielen", "tanzen", "singen"];

document.getElementById("taskList").innerHTML = TasksBreak();


document.getElementById("generateTask").addEventListener("click", function() {

    addTasks();
});

document.getElementById("addInputfield").addEventListener("click", function() {

    newBox();

});

function TasksBreak() {
    let html = "";
    tasks.forEach(element => {
        html += "<li>" + element + "</li>";

    });

    return html;
}

function newBox() {
    var newInput = document.createElement("input");
    document.getElementById("control").appendChild(newInput);
}

function addTasks() {
    var inputTask = document.querySelector("#txtNewTask").value;

}