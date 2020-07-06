let size = 10;
let newElement = 1;

const init = () => {
    const btn = document.createElement('button');
    const btnReset = document.createElement('button');
    btn.textContent = "Add 10 elements to list";
    btnReset.textContent = "Delete";
    btn.style.fontSize = "32px";
    btnReset.style.fontSize = "32px";
    document.body.appendChild(btn);
    document.body.appendChild(btnReset);
    const ul = document.createElement('ul');
    ul.style.listStyle = "none";
    document.body.appendChild(ul);
    btn.addEventListener('click', createLiElements);
    btnReset.addEventListener('click', Delete);
}

const createLiElements = () => {
    for (let i = 0; i < 10; i++) {
        const li = document.createElement('li');
        li.textContent = `Task  ${newElement++}`;
        li.style.fontSize = `${size++}px`
        document.querySelector('ul').appendChild(li);

    }

}

const Delete = () => {
    document.querySelector('ul').textContent = "";
    size = 10;
    newElement = 1;
}

init()