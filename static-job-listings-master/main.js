'use strict'

import data from './data.json' assert { type: 'json' }; 

const $ = document.querySelector.bind(document); 
const $$ = document.querySelectorAll.bind(document); 



const jobs = $('.jobs'); 
const selector = $('.selector'); 




const app = {
    jobs: data.map(e => {
        return {
            ...e, 
            tags: [e.role, e.level, ...e.languages, ...e.tools], 
        }
    }),
    searchList: [], 
    render() { 
        const htmls = this.jobs.map(job => {
            // filter 
            let ok = false; 
            if (this.searchList.length) {
                if (this.searchList.every(e => job.tags.includes(e))) ok = true; 
            } else ok = true; 
            let renderThis = ok ? `
                <div class="job">
                    <div class="job-logo">
                        <img src="${job.logo}" alt="${job.company}">
                    </div>
                    <div class="job-info">
                        <div class="job-info-props">
                            <div class="job-info-props-company"> ${job.company} </div>
                            <div class="${job.new ? 'job-info-props-stat new' : ''}"> ${job.new ? 'NEW!' : ''} </div>
                            <div class="${job.new ? 'job-info-props-stat featured' : ''}"> ${job.new ? 'FEATURED' : ''} </div>
                        </div>
                        <div class="job-info-title">
                            <h1> ${job.position} </h1>
                        </div>
                        <div class="job-info-others">
                            <span> ${job.postedAt} </span><span>&#x2022;</span>
                            <span> ${job.contract} </span><span>&#x2022;</span>
                            <span> ${job.location} </span>
                        </div>
                    </div>
                    <div class="job-tags">
                        ${job.tags.map(t => `<div class="job-tags-select tag">${t}</div>`).join('')}
                    </div>
                </div>
            ` : ''
            return renderThis; 
        }); 
        jobs.innerHTML = htmls.join(''); 
    },
    search() {
        // show tags on search bar 
        let searchHTML = ''; 
        if (this.searchList.length) {
            searchHTML = this.searchList.map(find => {
                return `
                    <div class="selector-find"> 
                        <div class="selector-find-name" id="${find}"> ${find} </div> 
                        <div class="selector-find-remove" id="${find}"> 
                            <img src="./images/icon-remove.svg" alt="remove" id="${find}">
                        </div> 
                    </div>
                    <div class="selector-clear"> Clear </div>
                `
            }).join(''); 
        } 
        selector.innerHTML = searchHTML;
        this.render(); 
        this.handleEvent(); 
    }, 
    handleEvent() {        
        // add tag 
        const tags = $$('.tag'); 
        tags.forEach(tag => tag.addEventListener('click', e => {
            !app.searchList.includes(`${e.target.innerText}`) && app.searchList.push(`${e.target.innerText}`); 
            this.search(); 
        }))
        
        // delete tag 
        const removals = $$('.selector-find-remove'); 
        removals.forEach(removal => removal.addEventListener('click', rem => {
            const remDel = rem.target; 
            const remDelNum = this.searchList.indexOf(remDel.id); 
            this.searchList.splice(remDelNum, 1); 
            this.search(); 
        }))
        
        // clear tags 
        const clearAll = $$('.selector-clear'); 
        clearAll.forEach(del => del.addEventListener('click', () => {
            this.searchList = []; 
            this.search(); 
        }))

    }, 
    start() {
        // render 
        this.render(); 
        
        // event 
        this.handleEvent(); 
        

    }
}



app.start(); 



