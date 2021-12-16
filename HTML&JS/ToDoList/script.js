const tasks = ["putzen", "tanzen", "kochen"];
printTaskList();


document.getElementById("addTask").addEventListener("click", function() {
    let newTask = document.getElementById("txtNewTask").value;
    tasks.push(newTask);
    printTaskList();

});

function printTaskList() {
    document.getElementById("taskList").innerHTML = getHTMLTasks();
}


function getHTMLTasks() {
    let html = "";
    tasks.forEach(element => {
        html += "<li>" + element + "</li>";
        console.log(element);
    });

    return html;
}