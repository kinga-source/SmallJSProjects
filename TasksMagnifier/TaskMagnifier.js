const input = document.querySelector('input');
const list = document.querySelector('ul');
const element = document.querySelectorAll('li');

const searchTask = (e) => {
 const inputText = e.target.value.toLowerCase()
 let tasks = [...element];
 console.log(tasks);
 tasks = tasks.filter(li => li.textContent.toLowerCase().includes(inputText))
 console.log(tasks);
 list.textContent = "";
 tasks.forEach(li => list.appendChild(li))
}

input.addEventListener('input', searchTask)
