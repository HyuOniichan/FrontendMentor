'use strict'

const $ = document.querySelector.bind(document); 
const $$ = document.querySelectorAll.bind(document); 


// 7 days (1 week) = 604800000ms
const endTime = new Date().getTime() + 604800000; 


const day = $('#day'); 
const hour = $('#hour'); 
const minute = $('#minute'); 
const second = $('#second'); 

const moveDay = $('#move-day');
const moveHour = $('#move-hour');
const moveMin = $('#move-min');
const moveSec = $('#move-sec');


function calculate(n) {
    const day = n / 86400000; 
    const hour = (day - Math.floor(day)) * 24; 
    const min = (hour - Math.floor(hour)) * 60; 
    const sec = (min - Math.floor(min)) * 60; 
    if (sec < 0) return [0, 0, 0, 0]; 
    return [Math.floor(day), Math.floor(hour), Math.floor(min), Math.floor(sec)]; 
}


function timer() {
    let currentTime = new Date().getTime(); 
    let displayTime = endTime - currentTime; 
    let counter = calculate(displayTime); 
    day.innerText = `${counter[0] >= 10 ? counter[0] : '0' + counter[0]}`; 
    hour.innerText = `${counter[1] >= 10 ? counter[1] : '0' + counter[1]}`; 
    minute.innerText = `${counter[2] >= 10 ? counter[2] : '0' + counter[2]}`; 
    second.innerText = `${counter[3] >= 10 ? counter[3] : '0' + counter[3]}`; 
}


function effects(moving, number) {
    moving.style = `transition: all 1s ease; transform: rotateX(-180deg); background-color: var(--Dark-desaturated-blue);`
    number.style = 'opacity: 0;'
    setTimeout(() => {
        number.style = 'opacity: 1;'
        moving.style = ''
    }, 500);
}


setInterval(timer, 1000)

setInterval(() => effects(moveSec, second), 1000)
setInterval(() => effects(moveMin, minute), 60000)
setInterval(() => effects(moveHour, hour), 3600000)
setInterval(() => effects(moveDay, day), 86400000)

