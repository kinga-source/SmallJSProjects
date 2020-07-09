const imageSlot = [{
    img: "ImageSlotBanner/img1.jpg",
    text: 'Lorem Ipsum'
},
    {
        img: "ImageSlotBanner/img2.jpg",
        text: 'Lorem Ipsum2'
    },
    {
        img: "ImageSlotBanner/img3.jpg",
        text: 'Lorem Ipsum3'
    }];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')]

const time = 1000;
let active = 0;

const nextDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const nextSlide = () => {
    active++;
    if (active === imageSlot.length) {
        active = 0;
    }
    image.src = imageSlot[active].img;
    h1.textContent = imageSlot[active].text;
    nextDot()
}
let indexInterval = setInterval(nextSlide, time)

const changingImagesWithKey = (e) => {
    console.log(e.keyCode);
    if (e.keyCode === 37 || e.keyCode === 39) {
        clearInterval(indexInterval)
        e.keyCode === 37 ? active-- : active++;
        if (active === imageSlot.length) {
            active = 0;
        } else if (active < 0) {
            active = imageSlot.length - 1;
        }
        image.src = imageSlot[active].img;
        h1.textContent = imageSlot[active].text;
        nextDot();
        indexInterval = setInterval(nextSlide, time)
    }
}
window.addEventListener('keydown', changingImagesWithKey)