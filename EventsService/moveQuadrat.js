const quadrat = document.querySelector('div');
let divX = 350;
let divY = 150;
quadrat.style.left = divX + "px";
quadrat.style.top = `${divY}px`;

let printActive = false;
let insertDivX;
let insertDivY;

quadrat.addEventListener('mousedown', (e) => {
    quadrat.style.backgroundColor = "darkviolet";
    quadrat.style.borderRadius = "50%";
    printActive = !printActive;
    insertDivX = e.offsetX;
    insertDivY = e.offsetY;
    console.log(insertDivX, insertDivY);

})
quadrat.addEventListener('mousemove', (e) => {
    if (printActive) {
        divX = e.clientX - insertDivX;
        divY = e.clientY - insertDivY;
        quadrat.style.left = `${divX}px`;
        quadrat.style.top = `${divY}px`;
    }
})

quadrat.addEventListener('mouseup', () => {
    quadrat.style.backgroundColor = "black";
    printActive = !printActive;
})