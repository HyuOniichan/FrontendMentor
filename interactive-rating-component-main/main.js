
let b = 0; 

function ratingChoose(num) {
    if (num == 1) {
      b = 1; 
      document.getElementById("RateButt1").style = "background-color: hsl(216, 12%, 54%); color: white; "; 
      document.getElementById("RateButt2").style = ""; 
      document.getElementById("RateButt3").style = ""; 
      document.getElementById("RateButt4").style = ""; 
      document.getElementById("RateButt5").style = ""; 
    }
    if (num == 2) {
      b = 2; 
      document.getElementById("RateButt1").style = ""; 
      document.getElementById("RateButt2").style = "background-color: hsl(216, 12%, 54%); color: white; "; 
      document.getElementById("RateButt3").style = ""; 
      document.getElementById("RateButt4").style = ""; 
      document.getElementById("RateButt5").style = ""; 
    }
    if (num == 3) {
      b = 3; 
      document.getElementById("RateButt1").style = ""; 
      document.getElementById("RateButt2").style = ""; 
      document.getElementById("RateButt3").style = "background-color: hsl(216, 12%, 54%); color: white; "; 
      document.getElementById("RateButt4").style = ""; 
      document.getElementById("RateButt5").style = ""; 
    }
    if (num == 4) {
      b = 4; 
      document.getElementById("RateButt1").style = ""; 
      document.getElementById("RateButt2").style = ""; 
      document.getElementById("RateButt3").style = ""; 
      document.getElementById("RateButt4").style = "background-color: hsl(216, 12%, 54%); color: white; "; 
      document.getElementById("RateButt5").style = ""; 
    }
    if (num == 5) {
      b = 5; 
      document.getElementById("RateButt1").style = ""; 
      document.getElementById("RateButt2").style = ""; 
      document.getElementById("RateButt3").style = ""; 
      document.getElementById("RateButt4").style = ""; 
      document.getElementById("RateButt5").style = "background-color: hsl(216, 12%, 54%); color: white; "; 
    }
}


function ratingNumber() {
    document.getElementById("num").innerText = b; 
}
ratingNumber(); 