function addTask(){

    var task = document.getElementById("task").value;

    if(task == ""){
        alert("Enter a task");
        return;
    }

    var li = document.createElement("li");

    li.innerHTML = task;

    var btn = document.createElement("button");

    btn.innerHTML = "Delete";

    btn.className = "delete";

    btn.onclick = function(){
        li.remove();
    };

    li.appendChild(btn);

    document.getElementById("list").appendChild(li);

    document.getElementById("task").value = "";
}