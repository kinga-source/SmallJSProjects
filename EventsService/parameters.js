const move = document.querySelector('h1');
document.body.addEventListener('mousemove', function(e) {
    move.textContent = e.clientX + ", " + e.clientY;


})