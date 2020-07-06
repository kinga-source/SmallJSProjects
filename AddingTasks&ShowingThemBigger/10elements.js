const btn = document.querySelector("button");
const tasks = document.querySelectorAll("li");
let fontSize = 10;

btn.addEventListener("click", () => {

    tasks.forEach((tasks) => {
        tasks.style.display = "inline-flex";
        tasks.style.fontSize = fontSize + "px";
    })
    fontSize++;
})