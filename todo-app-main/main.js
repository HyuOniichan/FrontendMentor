"use strict";  



const sun = document.getElementById("sun"); 
const moon = document.getElementById("moon"); 


const headerCheck = document.getElementById("headerCheck"); 
const headerOK = document.getElementById("headerOK"); 
const addTodo = document.getElementById("addTodo"); 


const number = document.getElementById("number"); 


const listNote = document.getElementById("listNote"); 


let ok = 1; 


let sm = 1; //change background 


let stat = 1; //change status (all/ active/ completed) 


let editAll = document.querySelector(".main-edit-menu-all")
let editAct = document.querySelector(".main-edit-menu-active") 
let editComp = document.querySelector(".main-edit-menu-comp") 






let list = [{
    title: 'Jog around the park 3x', 
    id: 1,
    on: 0,  //not completed 
}, {
    title: '10 minutes meditation', 
    id: 2,
    on: 0,  
}, {
    title: 'Read for 1 hour', 
    id: 3,
    on: 0,  
}, {
    title: 'Pick up groceries', 
    id: 4,
    on: 0,  
}, {
    title: 'Complete Todo App on Frontend Mentor', 
    id: 5,
    on: 0,  
}]; 


//use draggable in html to drag and drop todos 





changeBg(); //set dark theme as default 
function changeBg() {
    if (sm) {
        sm = 0; 
        sun.style = ""; 
        moon.style = "display: none; "
        document.querySelector(".box").style = ""; 
        document.querySelector(".container").style = ""; 
        document.querySelector(".footer").style = ""; 
        document.querySelector(".header-note").style = ""; 
        document.querySelector(".main-edit").style = ""; 
        addTodo.style = "";
    } else {
        sm = 1; 
        sun.style = "display: none; "
        moon.style = ""; 
        document.querySelector(".box").style = "background: url(images/bg-desktop-light.jpg) no-repeat; "
        document.querySelector(".container").style = "background: hsl(0, 0%, 98%); "
        document.querySelector(".footer").style = "color: hsl(236, 9%, 61%); " 
        document.querySelector(".header-note").style = "background-color: hsl(236, 33%, 92%); " 
        document.querySelector(".main-edit").style = "background-color: hsl(0, 0%, 98%); " 
        addTodo.style = "color: hsl(235, 19%, 35%);"
    }
    showList(stat);
}




function check() {
    if (ok == 1) {
        addList(); 
        ok = 0; 
        headerCheck.style = "background-color: hsl(220, 98%, 61%); "
        headerOK.style = "visibility: visible; "
    } else {
        ok = 1; 
        headerCheck.style = ""
        headerOK.style = ""
    }
}

const makeNew = () => {
    addTodo.value = ""; 
    ok = 0; 
    check(); 
}






function showList(num) {
    listNote.innerHTML = ''; 
    number.innerText = list.length; 
    list.forEach(
        added => {
            if (num == 1 || (num == 2 && added.on == 0) || (num == 3 && added.on == 1)) {
                let element = document.createElement('div'); 
                if (sm) element.style = 'width: 100%; background-color: hsl(0, 0%, 98%); padding: 15px; display: flex; lex-direction: row; align-items: center; gap: 15px; '
                    else element.style = 'width: 100%; background-color: hsl(235, 24%, 19%); padding: 15px; display: flex; lex-direction: row; align-items: center; gap: 15px; '
                listNote.appendChild(element); 
                
                if (added.on) {
                    let element2 = document.createElement('button'); 
                    element2.style = 'background: url(images/icon-check.svg) no-repeat center; padding: 10px; border-radius: 50%; border: 1px solid hsl(220, 98%, 61%); background-color: hsl(220, 98%, 61%); transition: all 0.15s; '
                    element2.id = added.id; 
                    element2.onclick = checked;
                    element2.onmouseover = hovCheck;
                    element2.onmouseout = unHovCheck;  
                    element.appendChild(element2); 
                } else {
                    let element2 = document.createElement('button'); 
                    element2.style = 'padding: 10px; border-radius: 50%; border: 1px solid hsl(233, 14%, 35%); background-color: transparent; transition: all 0.15s; '
                    element2.id = added.id; 
                    element2.onclick = checked;
                    element2.onmouseover = hovCheck;
                    element2.onmouseout = unHovCheck;  
                    element.appendChild(element2); 
                }
                
                let element3 = document.createElement('div'); 
                element3.innerText = added.title; 
                if (added.on) {
                    if (sm) element3.style = 'flex: 1; color: hsl(234, 39%, 85%); background: transparent; border: none; font-size: 14px; padding: 5px 0; text-decoration: line-through; '
                        else element3.style = 'flex: 1; color: hsl(235, 19%, 35%); background: transparent; border: none; font-size: 14px; padding: 5px 0; text-decoration: line-through; '
                } else {
                    if (sm) element3.style = 'flex: 1; color: hsl(235, 19%, 35%); background: transparent; border: none; font-size: 14px; padding: 5px 0; '
                        else element3.style = 'flex: 1; color: hsl(234, 39%, 85%); background: transparent; border: none; font-size: 14px; padding: 5px 0; '
                }
                element.appendChild(element3); 
    
                let element4 = document.createElement('div'); 
                element4.style = "background: url(images/icon-cross.svg) no-repeat center; padding: 10px; margin-right: 25px; "
                element4.id = added.id; 
                element4.onclick = removed; 
                element4.onmouseover = hovDel; 
                element.appendChild(element4); 

            }
        }
    ); 
}





//remove slashes to have confirm box 
function addList() {
    //if (confirm("Add this one?")) {
        let newTitle = addTodo.value; 
        if (newTitle == '') {
            alert("Please enter new todo!")
            return 
        }
        const newId = '' + new Date().getTime(); 
        list.push({
            title: newTitle, 
            id: newId, 
            on: 0, 
        }); 
        showList(stat); 
    //} else return; 
}



function removed(event) { 
    let del = event.target.id; 
    list = list.filter(remove => {
        if (remove.id == del) return false; 
            else return true; 
    }); 
    showList(stat); 
}


function removedAll() {
    list = list.filter(added => {
        if (added.on) return false; 
            else return true; 
    })
    showList(stat); 
}






function hovCheck(event) {
    const butt = event.target; 
    const eff = butt.id 
    list.forEach(added => {
        if (added.id == eff) {
            if (added.on) {
                butt.style = 'cursor: pointer; background: url(images/icon-check.svg) no-repeat center; padding: 10px; border-radius: 50%; border: 1px solid hsl(220, 98%, 61%); background-color: hsl(220, 98%, 61%); transition: all 0.15s; '
            } else {
                butt.style = 'cursor: pointer; padding: 10px; border-radius: 50%; border: 1px solid hsl(220, 98%, 61%); background-color: transparent; transition: all 0.15s; '
            }
        }
    })
}

function unHovCheck(event) {
    const butt = event.target; 
    const eff = butt.id 
    list.forEach(added => {
        if (added.id == eff) {
            if (added.on) {
                butt.style = 'background: url(images/icon-check.svg) no-repeat center; padding: 10px; border-radius: 50%; border: 1px solid hsl(220, 98%, 61%); background-color: hsl(220, 98%, 61%); transition: all 0.15s; '
            } else {
                butt.style = 'padding: 10px; border-radius: 50%; border: 1px solid hsl(233, 14%, 35%); background-color: transparent; transition: all 0.15s; '
            }            
        }
    })
}


function hovDel(event) {
    const rem = event.target; 
    list.forEach(added => {
        if (added.id == rem.id) {
            rem.style = "cursor: pointer; background: url(images/icon-cross.svg) no-repeat center; padding: 10px; margin-right: 25px; "; 
        }
    })
}







function checked(event) {
    const ticked = event.target; 
    const theTicked = ticked.id; 
    let count = 0; //out forEach
    list.forEach(added => {
        let num = list.length; 
        if (added.id == theTicked && count <= num) {
            if (added.on) { 
                ticked.style = 'padding: 10px; border-radius: 50%; border: 1px solid hsl(220, 98%, 61%); background-color: transparent; transition: all 0.15s; '
                list.splice(count, 1, {
                    title: added.title, 
                    id: added.id, 
                    on: 0,
                })
            } else {
                ticked.style = 'background: url(images/icon-check.svg) no-repeat center; padding: 10px; border-radius: 50%; border: 1px solid hsl(233, 14%, 35%); background-color: hsl(220, 98%, 61%); transition: all 0.15s; '
                list.splice(count, 1, {
                    title: added.title, 
                    id: added.id, 
                    on: 1,
                })
            }
            num = count; 
        }
        count++; 
    })
    showList(stat);
}




mainEdit(stat); 
function mainEdit(num) {
    if (num == 1) {
        editAll.style = "color: hsl(220, 98%, 61%); " 
        stat = 1;  
    } else editAll.style = "" 

    if (num == 2) {
        editAct.style = "color: hsl(220, 98%, 61%); " 
        stat = 2;  
    } else editAct.style = "" 

    if (num == 3) {
        editComp.style = "color: hsl(220, 98%, 61%); " 
        stat = 3;  
    } else editComp.style = "" 

    showList(stat); 
}




