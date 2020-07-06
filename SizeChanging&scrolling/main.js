const quadrat = document.createElement('div');
document.body.appendChild(quadrat);

let grow = true;

let size = 100;
quadrat.style.width = size + "px";

quadrat.style.height = size + "px";

window.addEventListener("scroll", function() {
    if (size >= window.innerWidth / 2) {
        grow = !grow;
    } else if (size <= 0) {
        grow = !grow;
    }

    if (grow) {
        size += 5
        quadrat.style.width = size + "px";
        quadrat.style.height = size + "px";
    } else {
        size -= 5
        quadrat.style.width = size + "px";
        quadrat.style.height = size + "px";
    }


})