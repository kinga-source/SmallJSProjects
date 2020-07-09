const ending = new Date('2020-07-28 18:34:00').getTime();

const D = document.querySelector('span.d');
const H = document.querySelector('span.h');
const M = document.querySelector('span.m');
const S = document.querySelector('span.s');

setInterval(() => {
 const actuallyTime = new Date().getTime();
 const time = ending - actuallyTime;
 const days = Math.floor((ending / (1000 * 60 * 60 * 24)) - (actuallyTime/ (1000 * 60 * 60 * 24)));
 console.log(days);

 let hours = Math.floor((ending / (1000 * 60 * 60) - actuallyTime / (1000 * 60 * 60)) % 24);
 hours = hours < 10 ? `0${hours}` : hours;

 const minutes = Math.floor((ending/ (1000 * 60) - actuallyTime / (1000 * 60)) % 60);

 const secs = Math.floor((ending / 1000 - actuallyTime / 1000) % 60);

 D.textContent = days;
 H.textContent = hours;
 M.textContent = minutes;
 S.textContent = secs;
}, 1000)
