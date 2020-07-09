const clock = () => {
    let unit = 0;
    document.body.textContent = 0 + " seconds";

    const stoper = () => {
        unit++;
        document.body.textContent = unit + " seconds";
    }

    return stoper
}

const begin = clock();

setInterval(begin, 1000);