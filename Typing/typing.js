const newText = document.querySelector('.text');
const cursor = document.querySelector('.cursor');
const txt = ['Mam trzy latka trzy i pół brodą sięgam ponad stół .Mam fartuszek z muchomorkiem do przedszkola chodzę z workiem .Pantofelki ładnie zmieniam myję rączki do jedzenia. Zjadam wszystko z talerzyka tańczę, kiedy gra muzyka.Umiem wierszyk o koteczku o tchórzliwym koziołeczku I o piesku co był w polu nauczyłam się w przedszkolu.', 'Wpadła gruszka do fartuszka,A za gruszką dwa jabłuszka, A śliweczka wpaść nie chciała, Bo śliweczka niedojrzała!']

let enabledLetter = -5;
let enabledText = 0;

const WriteLetters = () => {
    if (enabledLetter >= 0) {
        newText.textContent += txt[enabledText][enabledLetter];
    }
    enabledLetter++;
    if (enabledLetter === txt[enabledText].length) {

        enabledText++;
        if (enabledText === txt.length) return;

        return setTimeout(() => {
            enabledLetter = -15;
            newText.textContent = '';
            WriteLetters();
        }, 2000)


    }
    setTimeout(WriteLetters, 100)

}

WriteLetters();
const cursorAnimation = () => {
    cursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);