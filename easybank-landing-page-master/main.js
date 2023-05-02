'use strict'

const $ = document.querySelector.bind(document); 
const $$ = document.querySelectorAll.bind(document); 


const features = $('.features'); 
const articles = $('.articles'); 

const advantages = [
    {
        thumbnail: './images/icon-online.svg', 
        name: 'Online Banking', 
        detail: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.', 
    }, 
    {
        thumbnail: './images/icon-budgeting.svg', 
        name: 'Simple Budgeting', 
        detail: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.', 
    }, 
    {
        thumbnail: './images/icon-onboarding.svg', 
        name: 'Fast Onboarding', 
        detail: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.', 
    }, 
    {
        thumbnail: './images/icon-api.svg', 
        name: 'Open API', 
        detail: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.', 
    }, 
]

const latest = [
    {
        thumbnail: './images/image-currency.jpg', 
        creator: 'Claire Robinson', 
        title: 'Receive money in any currency with no fees', 
        description: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …',
    }, 
    {
        thumbnail: './images/image-restaurant.jpg', 
        creator: 'Wilson Hutton', 
        title: 'Treat yourself without worrying about money', 
        description: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …',
    }, 
    {
        thumbnail: './images/image-plane.jpg', 
        creator: 'Wilson Hutton', 
        title: 'Take your Easybank card wherever you go', 
        description: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …',
    }, 
    {
        thumbnail: './images/image-confetti.jpg', 
        creator: 'Claire Robinson', 
        title: 'Our invite-only Beta accounts are now live!', 
        description: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site …',
    }, 
]



getFeatures(); 
function getFeatures() {
    let html = advantages.map(advantage => {
        return `
            <div class="feature">
                <div>
                    <img src="${advantage.thumbnail}" alt="thumbnail">
                </div>
                <h2>${advantage.name}</h2>
                <p>${advantage.detail}</p>
            </div>
        `
    })
    features.innerHTML = html.join(''); 
}



getArticles(); 
function getArticles() {
    let html = latest.map(late => {
        return `
        <div class="article">
            <img src="${late.thumbnail}" alt="thumbnail">
            <div>
                <p class="creator">By ${late.creator}</p>
                <p class="title">${late.title}</p>
                <p class="description">${late.description}</p>
            </div>
        </div>
        `
    }) 
    articles.innerHTML = html.join(''); 
}




