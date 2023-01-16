
let step = 1; 

const next = document.getElementById("next"); 
const back = document.getElementById("back")

let s1 = document.getElementById("stepNumber01"); 
let s2 = document.getElementById("stepNumber02"); 
let s3 = document.getElementById("stepNumber03"); 
let s4 = document.getElementById("stepNumber04"); 

const m1 = document.getElementById("main01"); 
const m2 = document.getElementById("main02"); 
const m3 = document.getElementById("main03"); 
const m4 = document.getElementById("main04"); 
const m5 = document.getElementById("mainFin"); 

//calculate the cost for step 4 
let plan02 = [9, 12, 15]; 
let cost03 = [1, 2, 2]; 

let choosePlan = 0; 

//addon == 1 -> pick 
let addon1 = 0; 
let addon2 = 0; 
let addon3 = 0; 


/*
let plan201 = 9; 
let plan202 = 12; 
let plan203 = 15; 

let cost301 = 1; 
let cost302 = 2; 
let cost303 = 2; 
*/


let costSum = 0; 


//choose Year -> x10 cost 
let timeOpt = 1; 




function checkStep() {
    //edit this step 4 later step = 4; 
    step01(); 
    step02(); 
    step03(); 
    step04();
    stepFin(); 
    totalCost(); 
}
checkStep(); 


next.onclick = nextStep; 
back.onclick = goBack; 


function nextStep() {
    if (step <= 4) {
        step++; 
        checkStep(); 
    } else stepFin(); 
}
function goBack() {
    if (step > 1) step--; 
    checkStep(); 
}


function step01() {
    if (step == 1) {
        s1.style = "background-color: hsl(206, 94%, 87%); border-color: hsl(206, 94%, 87%); color: black; "
        document.getElementById("back").style.display = "none"; 
        m1.style = "display: block; margin-left: 75px; "; 
    } else {
        s1.style = ""; 
        m1.style = ""; 
    }
}

function step02() {
    if (step == 2) {
        s2.style = "background-color: hsl(206, 94%, 87%); border-color: hsl(206, 94%, 87%); color: black; "
        document.getElementById("back").style.display = "";
        m2.style = "display: block; margin-left: 75px; "; 
    } else {
        s2.style = ""; 
        m2.style = ""; 
    }
}

function step03() {
    if (step == 3) {
        if (choosePlan == 0) {
            step--; 
            checkStep(); 
            alert("Select your plan!"); 
            return; 
        } 
        s3.style = "background-color: hsl(206, 94%, 87%); border-color: hsl(206, 94%, 87%); color: black; "
        m3.style = "display: block; margin-left: 75px; "; 
    } else {
        s3.style = ""; 
        m3.style = ""; 
    }
    if (timeOpt == 1) { 
        document.getElementById("mainResponseDataCost301").innerText = "+$10/yr"; 
        document.getElementById("mainResponseDataCost302").innerText = "+$20/yr"; 
        document.getElementById("mainResponseDataCost303").innerText = "+$20/yr"; 
    } else {
        document.getElementById("mainResponseDataCost301").innerText = "+$1/mo"; 
        document.getElementById("mainResponseDataCost302").innerText = "+$2/mo"; 
        document.getElementById("mainResponseDataCost303").innerText = "+$2/mo"; 
    }
}

function step04() {
    if (step == 4) {
        s4.style = "background-color: hsl(206, 94%, 87%); border-color: hsl(206, 94%, 87%); color: black; "
        m4.style = "display: block; margin-left: 75px; "; 
        next.innerText = "Confirm"; 
    } else {
        s4.style = ""; 
        m4.style = ""; 
        next.innerText = "Next Step"; 
    }
}

function stepFin() {
    if (step > 4) {
        m5.style = "display: block; margin-left: 75px; margin-top: 110px; "; 
        next.style = "display: none;"
        back.style = "display: none;"
    } else {
        m5.style = "display: none; "
        next.style = ""; 
        back.style = ""; 

    }
}


//change step by clicking on the numbers on the content part 
s1.onclick = changeStep1; 
s2.onclick = changeStep2;  
s3.onclick = changeStep3; 
s4.onclick = changeStep4; 

function changeStep1() {
    step = 1; 
    checkStep(); 
}
function changeStep2() {
    step = 2; 
    checkStep(); 
}
function changeStep3() {
    step = 3; 
    checkStep(); 
}
function changeStep4() {
    step = 4; 
    checkStep(); 
}





const mainResponseDataActive01 = document.getElementById("mainResponseDataActive01"); 
const mainResponseDataActive02 = document.getElementById("mainResponseDataActive02"); 
const mainResponseDataActive03 = document.getElementById("mainResponseDataActive03"); 

mainResponseDataActive01.onclick = choosePlanStep201; 
mainResponseDataActive02.onclick = choosePlanStep202; 
mainResponseDataActive03.onclick = choosePlanStep203; 

function choosePlanStep201() {
    document.getElementById("mainResponseData201").style = "background-color: hsl(217, 100%, 97%); border-color: hsl(243, 100%, 62%);"
    document.getElementById("mainResponseData202").style = "background-color: none; border-color: none; "
    document.getElementById("mainResponseData203").style = "background-color: none; border-color: none; "
    choosePlan = 1; 
}
function choosePlanStep202() {
    document.getElementById("mainResponseData201").style = "background-color: none; border-color: none; "
    document.getElementById("mainResponseData202").style = "background-color: hsl(217, 100%, 97%); border-color: hsl(243, 100%, 62%);"
    document.getElementById("mainResponseData203").style = "background-color: none; border-color: none; "
    choosePlan = 2; 
}
function choosePlanStep203() {
    document.getElementById("mainResponseData201").style = "background-color: none; border-color: none; "
    document.getElementById("mainResponseData202").style = "background-color: none; border-color: none; "
    document.getElementById("mainResponseData203").style = "background-color: hsl(217, 100%, 97%); border-color: hsl(243, 100%, 62%);"
    choosePlan = 3; 
}


const mainTimeOptButt = document.getElementById("mainTimeOptButt"); 
const mainTimeOptChoice = document.getElementById("mainTimeOptChoice"); 
mainTimeOptButt.onclick = changeTimeOption; 
mainTimeOptChoice.onclick = changeTimeOption; 

const timeOptMonth = document.getElementById("timeOptMonth"); 
const timeOptYear = document.getElementById("timeOptYear"); 





changeTimeOption();  

function changeTimeOption() {
    if (timeOpt == 0) {
        timeOpt = 1; //choose Year 
        mainTimeOptChoice.style = "margin-left: 15px;"
        timeOptMonth.style = "color: hsl(231, 11%, 63%);" 
        timeOptYear.style = "color: hsl(213, 96%, 18%);"
        document.getElementById("mainResponseDataCostYear201").style = "display: block; "
        document.getElementById("mainResponseDataCostYear202").style = "display: block; "
        document.getElementById("mainResponseDataCostYear203").style = "display: block; "
        document.getElementById("mainResponseDataCost201").innerHTML = "$90/yr"
        document.getElementById("mainResponseDataCost202").innerHTML = "$120/yr"
        document.getElementById("mainResponseDataCost203").innerHTML = "$150/yr"
    } else {
        timeOpt = 0; //choose Month 
        mainTimeOptChoice.style.margin = ""; 
        timeOptMonth.style = "color: hsl(213, 96%, 18%);"
        timeOptYear.style = "color: hsl(231, 11%, 63%);" 
        document.getElementById("mainResponseDataCostYear201").style = "display: none; "
        document.getElementById("mainResponseDataCostYear202").style = "display: none; "
        document.getElementById("mainResponseDataCostYear203").style = "display: none; "
        document.getElementById("mainResponseDataCost201").innerHTML = "$9/mo"
        document.getElementById("mainResponseDataCost202").innerHTML = "$12/mo"
        document.getElementById("mainResponseDataCost203").innerHTML = "$15/mo"
    }
}



const mainResponseData301 = document.getElementById("mainResponseData301"); 
const mainResponseData302 = document.getElementById("mainResponseData302"); 
const mainResponseData303 = document.getElementById("mainResponseData303"); 

mainResponseData301.onclick = pickAddon1; 
mainResponseData302.onclick = pickAddon2; 
mainResponseData303.onclick = pickAddon3; 



function pickAddon1() {
    if (addon1 == 0) {
        addon1 = 1; 
        mainResponseData301.style = "background: hsl(217, 100%, 97%);"
    } else {
        addon1 = 0; 
        mainResponseData301.style.background = ""; 
    }
}
function pickAddon2() {
    if (addon2 == 0) {
        addon2 = 1; 
        mainResponseData302.style = "background: hsl(217, 100%, 97%);"
    } else {
        addon2 = 0; 
        mainResponseData302.style.background = ""; 
    }
}
function pickAddon3() {
    if (addon3 == 0) {
        addon3 = 1; 
        mainResponseData303.style = "background: hsl(217, 100%, 97%);"
    } else {
        addon3 = 0; 
        mainResponseData303.style.background = ""; 
    }
}





function totalCost() {
    costSum = 0; 
    if (choosePlan == 0) return;  
    costSum += plan02[choosePlan - 1]; 
    if (choosePlan == 1) {
        document.getElementById("planTitle04").innerText = "Arcade"; 
        if (timeOpt) {
            document.getElementById("planTime04").innerText = "Yearly"; 
            document.getElementById("planCost04").innerText = plan02[0] * 10 + "/yr"; 
        } else {
            document.getElementById("planTime04").innerText = "Monthly"; 
            document.getElementById("planCost04").innerText = plan02[0] + "/mo"; 
        }
    }
    if (choosePlan == 2) {
        document.getElementById("planTitle04").innerText = "Advanced"; 
        if (timeOpt) {
            document.getElementById("planTime04").innerText = "Yearly"; 
            document.getElementById("planCost04").innerText = plan02[1] * 10 + "/yr"; 
        } else {
            document.getElementById("planTime04").innerText = "Monthly"; 
            document.getElementById("planCost04").innerText = plan02[1] + "/mo"; 
        }
    }
    if (choosePlan == 3) {
        document.getElementById("planTitle04").innerText = "Pro"; 
        if (timeOpt) {
            document.getElementById("planTime04").innerText = "Yearly"; 
            document.getElementById("planCost04").innerText = plan02[2] * 10 + "/yr"; 
        } else {
            document.getElementById("planTime04").innerText = "Monthly"; 
            document.getElementById("planCost04").innerText = plan02[2] + "/mo"; 
        }
    }

    if (addon1) {
        costSum += cost03[0];
        document.getElementById("addon401").style = "display: block; "
    } else {
        document.getElementById("addon401").style = "display: none; "; 
    }
    if (addon2) {
        costSum += cost03[1];
        document.getElementById("addon402").style = "display: block; "
    } else {
        document.getElementById("addon402").style = "display: none; "; 
    }
    if (addon3) {
        costSum += cost03[2];        
        document.getElementById("addon403").style = "display: block; "
    } else {
        document.getElementById("addon403").style = "display: none; "; 
    }
    
    if (timeOpt) {
        costSum *= 10; 
        document.getElementById("addonCost401").innerText = cost03[0] * 10;
        document.getElementById("addonTime401").innerText = "yr"; 
        document.getElementById("addonCost402").innerText = cost03[1] * 10;
        document.getElementById("addonTime402").innerText = "yr"; 
        document.getElementById("addonCost403").innerText = cost03[2] * 10;
        document.getElementById("addonTime403").innerText = "yr"; 
        document.getElementById("sumCostTime").innerText = "year"; 
        document.getElementById("sumTime").innerText = "yr"; 
    } else {
        document.getElementById("addonCost401").innerText = cost03[0];
        document.getElementById("addonTime401").innerText = "mo"; 
        document.getElementById("addonCost402").innerText = cost03[1];
        document.getElementById("addonTime402").innerText = "mo"; 
        document.getElementById("addonCost403").innerText = cost03[2];
        document.getElementById("addonTime403").innerText = "mo"; 
        document.getElementById("sumCostTime").innerText = "month"; 
        document.getElementById("sumTime").innerText = "mo"; 
    }

    document.getElementById("sumCost").innerText = costSum; 

}


