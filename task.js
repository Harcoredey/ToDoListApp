const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const searchBox = document.getElementById("search-box");


function addTask(){
    if(inputBox.value === ''){
        alert("Dont Say!!! Biko write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }    
    inputBox.value = "";
    saveData();
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTasks(){
    listContainer.innerHTML = localStorage.getItem("data");
}

function searchTasks(){
    const search = searchBox.value.toLowerCase();
    const tasks = listContainer.getElementsByTagName("li");
    Array.from(tasks).forEach(task =>{
        const taskText = task.innerText.toLowerCase();
        if (taskText.includes(search)){
            task.style.display = "block";
        } else{
            task.style.display = "none";
        }
    });
}
searchBox.addEventListener("input", searchTasks);

showTasks();