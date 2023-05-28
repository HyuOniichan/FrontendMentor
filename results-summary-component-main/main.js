'use strict'

import data from './data.json' assert { type : 'json' }; 

const $ = document.querySelector.bind(document); 
const $$ = document.querySelectorAll.bind(document); 

console.log(data); /* check */

const result = $('#result'); 

// const items = [$('#reaction'), $('#memory'), $('#verbal'), $('#visual')]; 
// const textColor = ['--Light-red', '--Orangey-yellow', '--Green-teal', '--Cobalt-blue']; 
// const bgColor = ['--Light-red-transparency', '--Orangey-yellow-transparency', '--Green-teal-transparency', '--Cobalt-blue-transparency']; 


const scores = data.map(e => e.score); 
const lastScore = Math.floor(scores.reduce((total, s) => total + s, 0) / scores.length); 
result.innerText = lastScore;


const menu = $('#menu'); 


const colors = ['--Light-red', '--Orangey-yellow', '--Green-teal', '--Cobalt-blue']; 


const items = data.map(i => {
    return {
        ...i,  
        color: colors[data.indexOf(i)], 
    }
})

console.log(items); 


listItems();
function listItems() {
    const html = items.map(i => {
        return `
            <div class="item" style="background: var(${i.color}-transparency);">
                <div class="item-info">
                    <div class="item-icon">
                        <img src="${i.icon}" alt="icon">
                    </div>
                    <div class="item-category">
                        <h2 style="color: var(${i.color});">${i.category}</h2>
                    </div>
                </div>
                <div class="item-score">
                    <span style="color: var(--Dark-gray-blue);">${i.score}</span>
                    <span> /100 </span>
                </div>
            </div>
        `
    })
    menu.innerHTML = html.join(''); 
}








