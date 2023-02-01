
const noti = document.getElementById("noti"); 
const newCart = document.getElementById("newCart"); 
const notiCart = document.getElementById("notiCart"); 
const notiCartNum = document.getElementById("notiCartNum"); 
const notiCartSum = document.getElementById("notiCartSum"); 
const noticartBox = document.getElementById("noticartBox"); 
const deleteCart = document.getElementById("deleteCart"); 
const emptyCart = document.getElementById("emptyCart"); 

const up = document.getElementById("up"); 
const down = document.getElementById("down"); 
let count = document.getElementById("count"); 

const cart = document.getElementById("cart"); 


const lightBox = document.getElementById("lightBox"); 

const prev = document.getElementById("prev"); 
const next = document.getElementById("next"); 

const boxImage1 = document.getElementById("boxImage1"); 
const boxImage2 = document.getElementById("boxImage2"); 
const boxImage3 = document.getElementById("boxImage3"); 
const boxImage4 = document.getElementById("boxImage4"); 

const boxThumbnail1 = document.getElementById("boxThumbnail1"); 
const boxThumbnail2 = document.getElementById("boxThumbnail2"); 
const boxThumbnail3 = document.getElementById("boxThumbnail3"); 
const boxThumbnail4 = document.getElementById("boxThumbnail4"); 






let sumCart; 
let countNumber = 0; //number chosen 
let newCartCheck = 0; //not show 
let thumbnail = 1; //first image 
let boxShow = 0; //not show the lightbox 




up.onclick = incNum; 
down.onclick = decNum; 


newCart.onclick = newCartShow; 
cart.onclick  = notiNum; 
deleteCart.onclick = delCart; 


next.onclick = nextImage; 
prev.onclick = prevImage; 










function newCartShow() { //show or hide the notification 
    if (newCartCheck == 0) {
        newCartCheck = 1; 
        notiCart.style = "display: block;"
    } else {
        newCartCheck = 0; 
        notiCart.style = "display: none;"
    }
}



check() 
function check() { //check all the functions 
    if (countNumber == 0) {
        emptyCart.style = "display: block;" 
        noticartBox.style = "display: none;"
        return; 
    }
    emptyCart.style = ""; 
    noticartBox.style = ""; 
    chooseImage(); //not important 
}



function incNum() {
    countNumber++; 
    count.innerText = countNumber; 
}
function decNum() {
    if (countNumber == 0) return; 
    countNumber--; 
    count.innerText = countNumber; 
}




function notiNum() { //show number and price of cart 
    noti.innerText = countNumber; 
    notiCartNum.innerText = countNumber; 
    sumCart = countNumber * 125; 
    notiCartSum.innerText = "$" + sumCart + ".00"; 
    if (countNumber) noti.style = "display: block;" 
        else noti.style = ""; 
    check(); 
}

function delCart() { //delete cart button onclick 
    countNumber = 0; 
    count.innerText = "0"; 
    noti.innerText = "0"; 
    noti.style = "display: none; "
    check(); 
}





function nextImage() {
    if (thumbnail < 4) thumbnail++; 
    chooseImage(); 
}
function prevImage() {
    if (thumbnail > 1) thumbnail--; 
    chooseImage(); 
}

function moveImage(num) {
    if (num == 1) thumbnail = 1; 
    if (num == 2) thumbnail = 2; 
    if (num == 3) thumbnail = 3; 
    if (num == 4) thumbnail = 4; 
    chooseImage(); 
}

function chooseImage() {
    if (thumbnail == 1) {
        boxImage1.style = "display: block"; 
        boxThumbnail1.style = "border-color: hsl(26, 100%, 55%); opacity: 0.5; "
    } else {
        boxImage1.style = "display: none; "; 
        boxThumbnail1.style = ""; 
    }
    if (thumbnail == 2) {
        boxImage2.style = "display: block"; 
        boxThumbnail2.style = "border-color: hsl(26, 100%, 55%); opacity: 0.5; "
    } else {
        boxImage2.style = "display: none; "; 
        boxThumbnail2.style = ""; 
    }
    if (thumbnail == 3) {
        boxImage3.style = "display: block"; 
        boxThumbnail3.style = "border-color: hsl(26, 100%, 55%); opacity: 0.5; "
    } else {
        boxImage3.style = "display: none; "; 
        boxThumbnail3.style = ""; 
    }
    if (thumbnail == 4) {
        boxImage4.style = "display: block"; 
        boxThumbnail4.style = "border-color: hsl(26, 100%, 55%); opacity: 0.5; "
    } else {
        boxImage4.style = "display: none; "; 
        boxThumbnail4.style = ""; 
    }

}

function showBox(num) {
    if (boxShow == 0) {
        boxShow = 1; 
        lightBox.style = "display: block;" 
        if (num == 1) {
            thumbnail = 1; 
            chooseImage(); 
        } 
        if (num == 2) {
            thumbnail = 2; 
            chooseImage(); 
        } 
        if (num == 3) {
            thumbnail = 3; 
            chooseImage(); 
        } 
        if (num == 4) {
            thumbnail = 4; 
            chooseImage(); 
        } 
    } else {
        boxShow = 0; 
        lightBox.style = "display: none;"
    }
}







