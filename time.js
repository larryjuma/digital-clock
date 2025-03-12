
function localTime1() {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let amPm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    let greeting = document.getElementById("greeting");
    let greetingText = "";

    if (hours >= 5 && hours < 12) {
        greetingText = "Good Morning!";
        greeting.style.color = "yellow";
    }
    else if (hours >= 12 && hours < 17) {
        greetingText = "Good Afternoon!"
        greeting.style.color = "orange";
    }

    else if (hours >= 17 && hours < 20) {
        greetingText = "Good Evening!";
        greeting.style.color = "gray";
    }

    else {
        greetingText = "GoodNight!";
        greeting.style.color = "black";
    }

    greeting.innerText = greetingText;

    document.getElementById("localTime").innerHTML = `${hours}: ${minutes}: ${seconds}`;
    setInterval(localTime1, 1000)
}

localTime1();


const clickBtn = document.getElementById("clickBtn");
const addList = document.getElementById("addList");
const addTask = document.getElementById("addTask");

clickBtn.addEventListener("click", () => {
    let taskText = addTask.value.trim();
    if (!taskText) return;

    let listItems = document.createElement("li");
    listItems.textContent = taskText;
    listItems.style.color = "#FFD700";
    listItems.style.fontStyle = "italic"

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Remove";
    deleteBtn.style.margin = "10px";
    deleteBtn.style.backgroundColor = "#add8e6 ";
    deleteBtn.style.marginLeft = "50px";
    deleteBtn.addEventListener("click", () => {
        listItems.remove();
    })

    listItems.appendChild(deleteBtn)
    addList.appendChild(listItems);
    addTask.value = "";
})


