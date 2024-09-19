// ADD TASK
function addTask() {
    let inputValue = document.querySelector("input").value;

    let li = document.createElement("li");

    li.innerHTML = inputValue + '<span onclick="removeTask(this)"><i class="fa-solid fa-ban"></i></span>';

    document.querySelector("ul").appendChild(li);

    document.querySelector('input').value = '';
}

// REMOVE TASK
function removeTask(li) {
    li.parentElement.remove()
}

// DARK MODE
const checkTheme = document.getElementById("switchTheme");

let icon = document.querySelector("i");

checkTheme.addEventListener("change", function() {
    if (this.checked) {
        dark();
    }

    else {
        light();

    }

    function dark() {
        document.body.classList.add("dark");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }

    function light() {
        document.body.classList.remove("dark");
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});