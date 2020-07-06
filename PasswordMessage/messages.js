const input = document.querySelector("input");
const passwords = ['one', 'Two'];
const info = ["Great", "It's working!"]

passwords.forEach((password, index) => {
    passwords[index] = password.toLowerCase();
    console.log(passwords[index]);
})

const showMessage = (e) => {
    const input = e.target.value.toLowerCase()
    passwords.forEach((password, i) => {
        if (password === input) {
            document.querySelector('div').textContent = info[i];
        }
    })
}

input.addEventListener("input", showMessage)