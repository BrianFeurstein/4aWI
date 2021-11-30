const tasks = ["spielen", "tanzen", "singen"];

document.getElementById("taskList").innerHTML = TasksBreak();


document.getElementById("generateTask").addEventListener("click", function() {
    alert("add task")
});

function TasksBreak() {
    let html = "";
    tasks.forEach(element => {
        html += "<li>" + element + "</li>";

    });

    return html;
}