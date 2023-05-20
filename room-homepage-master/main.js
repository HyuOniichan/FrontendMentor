'use strict' 

const $ = document.querySelector.bind(document); 
const $$ = document.querySelectorAll.bind(document); 


const next = $('#next');
const prev = $('#prev');

let title = $('#title'); 
let detail = $('#detail'); 
let thumbnail = $('#thumbnail'); 

let slide = 1; 

const images = [
    {
        title: 'Discover innovative ways to decorate', 
        detail: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.', 
        thumbnail: './images/desktop-image-hero-1.jpg', 
    }, 
    {
        title: 'We are available all across the globe', 
        detail: 'With stores all over the world, it’s easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don’t hesitate to contact us today.', 
        thumbnail: './images/desktop-image-hero-2.jpg', 
    }, 
    {
        title: 'Manufactured with the best materials', 
        detail: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.', 
        thumbnail: './images/desktop-image-hero-3.jpg', 
    }, 
]


next.onclick = () => {
    if (slide >= images.length) slide = 1; 
        else slide++; 
    update(slide); 
}
prev.onclick = () => {
    if (slide <= 1) slide = images.length; 
        else slide--; 
    update(slide); 
}
    
update(slide);
function update(num) {
    thumbnail.innerHTML = `<img src="${images[num - 1].thumbnail}" alt="thumbnail">`; 
    title.innerHTML = `<h1>${images[num - 1].title}</h1>`; 
    detail.innerHTML = `<p>${images[num - 1].detail}</p>`; 
}








