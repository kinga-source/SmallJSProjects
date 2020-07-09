let begin = 0;
const clicker = () => {
    begin++;
    document.body.textContent = `You have clicked ${begin} times`;
}
document.addEventListener('click', clicker)


