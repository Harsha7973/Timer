// const newPassword=document.getElementById("newPassword");
// const newText=document.getElementById("newText");
// const display=document.getElementById("display");
// const resetBut= document.getElementById("resetBut");
// const addBut= document.getElementById("addBut");

// resetBut.addEventListener("click", buttonReset);
// addBut.addEventListener("click", buttonAdd);
// function buttonAdd(){
//     console.log(newPassword.value);
//     console.log(newText.value);
// }
// i have two buttom start and stop and reset write function that will start the timer and stop the timer and reset the timer.
const start=document.getElementById("start");
const stop=document.getElementById("stop");
const reset=document.getElementById("reset");
const display=document.getElementById("display");
let timer;
let time=0;

function startTimer(){
    time++;
    display.innerHTML = 
    Math.floor(time / 3600).toString().padStart(2, "0") + ":" + Math.floor((time % 3600) / 60).toString().padStart(2, "0") + ":" + Math.floor((time % 60)).toString().padStart(2, "0");
}

start.addEventListener("click",()=>{
    start.innerText="Stop"
    if(timer){
        time=0;
        clearInterval(timer);
    }
    timer=setInterval(startTimer,100); 
})

function resetBtn(){
    time=0;
    clearInterval(timer);
    display.innerHTML="00:00:00";
    start.innerText="start";

}

reset.addEventListener("click",resetBtn);

function stopBtn(){
    clearInterval(timer);
}
stop.addEventListener("click",stopBtn);



